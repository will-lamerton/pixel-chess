import { pieceMoveTable } from "./piece-move-table";
import { coordDictionary } from "./coord-dictionary";

import { Chess } from "chess.js";

export function GenerateMoves(board, fen) {
    // Reset attack map.
    attackMap = [];

    let turn = fen.split(' ')[1];
    let legalMoves = [];

    // Get King positions.
    const kingPositions = getKingPositions(board);
    let whiteKingPosition = kingPositions.white;
    let blackKingPosition = kingPositions.black;

    for (let rank=0; rank<board.length; rank++) {
        for (let square=0; square<board[rank].length; square++) {
            if (board[rank][square] === null) {
                continue;
            }

            let color = board[rank][square]['color'];

            let squareCode = board[rank][square]['square'];
            let piece = board[rank][square]['type'];

            let moves = pieceMoveTable[piece][color][squareCode];

            switch(piece) {
                // PAWN MOVEMENT
                case 'p':
                    if (moves === undefined) {
                        break;
                    }
                    
                    // Pawn push logic.
                    for (let i=0; i<moves['pushes'].length; i++) {
                        let boardArrayConversion = coordDictionary[moves['pushes'][i]];

                        if (board[boardArrayConversion[0]][boardArrayConversion[1]] === null) {

                            // Check to see if move puts enemy King into check. This will need
                            // extra notation.
                            let nextMovesFromTable = pieceMoveTable[piece][color][moves['pushes'][i]];
                            let inCheckFromPushMoves = doesMovePutEnemyKingIntoCheck(nextMovesFromTable['pushes'], blackKingPosition, whiteKingPosition, turn);
                            let inCheckFromCaptureMoves = doesMovePutEnemyKingIntoCheck(nextMovesFromTable['captures'], blackKingPosition, whiteKingPosition, turn);
                            
                            let san = moves['pushes'][i];

                            if (inCheckFromCaptureMoves === true || inCheckFromPushMoves === true) {
                                san = `${moves['pushes'][i]}+`;
                            }

                            if (turn === color) {
                                legalMoves.push({
                                    color: turn,
                                    san: san,
                                    from: squareCode,
                                    to: moves['pushes'][i],
                                    piece: piece,
                                });
                            }
                        }
                        else {
                            break;
                        }
                    }

                    // Pawn capture logic.
                    for (let i=0; i<moves['captures'].length; i++) {
                        let boardArrayConversion = coordDictionary[moves['captures'][i]];
                        let toSquare = board[boardArrayConversion[0]][boardArrayConversion[1]];

                        if (toSquare !== null && toSquare['color'] !== turn) {
                            let captureString = `${squareCode[0]}x${moves['captures'][i]}`;
                            let captured = toSquare['type'];

                            // Check to see if move puts enemy King into check. This will need
                            // extra notation.
                            let nextMovesFromTable = pieceMoveTable[piece][color][moves['captures'][i]];
                            let inCheckFromPushMoves = doesMovePutEnemyKingIntoCheck(nextMovesFromTable['pushes'], blackKingPosition, whiteKingPosition, turn);
                            let inCheckFromCaptureMoves = doesMovePutEnemyKingIntoCheck(nextMovesFromTable['captures'], blackKingPosition, whiteKingPosition, turn);

                            if (inCheckFromCaptureMoves === true || inCheckFromPushMoves === true) {
                                captureString = `${captureString}+`;
                            }
                            
                            if (turn === color) {
                                legalMoves.push({
                                    color: turn,
                                    san: captureString,
                                    from: squareCode,
                                    to: moves['captures'][i],
                                    piece: piece,
                                    captured: captured,
                                });
                            }
                            else {
                                addToAttackMap(moves['captures'][i], squareCode, piece);
                            }
                        }

                        if (toSquare === null && turn !== color) {
                            addToAttackMap(moves['captures'][i], squareCode, piece);
                        }
                    }

                break;
                
                // KNIGHT MOVEMENT
                case 'n':
                    if (moves === undefined) {
                        break;
                    }

                    for (let i=0; i<moves.length; i++) {
                        let boardArrayConversion = coordDictionary[moves[i]];
                        let toSquare = board[boardArrayConversion[0]][boardArrayConversion[1]];

                        // Square not empty, but enemy piece, so can capture
                        if (toSquare !== null && toSquare['color'] !== turn) {
                            let captureString = `Nx${moves[i]}`;
                            let captured = toSquare['type'];

                            // Check to see if move puts enemy King into check. This will need
                            // extra notation.
                            let nextMovesFromTable = pieceMoveTable[piece][color][moves[i]];
                            let inCheckFromMoves = doesMovePutEnemyKingIntoCheck(nextMovesFromTable, blackKingPosition, whiteKingPosition, turn);

                            if (inCheckFromMoves === true) {
                                captureString = `${captureString}+`;
                            }

                            if (turn === color) {
                                legalMoves.push({
                                    color: turn,
                                    san: captureString,
                                    from: squareCode,
                                    to: moves[i],
                                    piece: piece,
                                    captured: captured,
                                });
                            }
                            else {
                                addToAttackMap(moves[i], squareCode, piece);
                            }
                        }

                        // Square not empty, but friendly piece so cannot move.
                        else if (toSquare !== null && toSquare['color'] === turn) {
                            continue;
                        } 

                        // Square empty so can move.
                        else if (toSquare === null) {

                            // Check to see if move puts enemy King into check. This will need
                            // extra notation.
                            let nextMovesFromTable = pieceMoveTable[piece][color][moves[i]];
                            let inCheckFromMoves = doesMovePutEnemyKingIntoCheck(nextMovesFromTable, blackKingPosition, whiteKingPosition, turn);

                            let san = moves[i];

                            if (inCheckFromMoves === true) {
                                san = `${moves[i]}+`;
                            }

                            if (turn === color) {
                                legalMoves.push({
                                    color: turn,
                                    san: `N${san}`,
                                    from: squareCode,
                                    to: moves[i],
                                    piece: piece,
                                });
                            }
                            else {
                                addToAttackMap(moves[i], squareCode, piece);
                            }
                        }
                    }

                break;

                // BISHOP, ROOK, QUEEN & KING MOVEMENT
                case 'b':
                case 'r':
                case 'q':
                case 'k':
                    if (moves === undefined) {
                        break;
                    }

                    let inCheckFromUpRightMoves = false;
                    let inCheckFromUpLeftMoves = false;
                    let inCheckFromDownRightMoves = false;
                    let inCheckFromDownLeftMoves = false;
                    let inCheckFromUpMoves = false;
                    let inCheckFromDownMoves = false;
                    let inCheckFromLeftMoves = false;
                    let inCheckFromRightMoves = false;


                    for (let moveDirection in moves) {
                        for (let i=0; i<moves[moveDirection].length; i++) {
                            let boardArrayConversion = coordDictionary[moves[moveDirection][i]];
                            let toSquare = board[boardArrayConversion[0]][boardArrayConversion[1]];

                            // Check to see if move puts enemy King into check. This will need
                            // extra notation.
                            let nextMovesFromTable = pieceMoveTable[piece][color][moves[moveDirection][i]];

                            // Square not empty, but enemy piece so can capture, final square we can move to.
                            if (toSquare !== null && toSquare['color'] !== turn) {
                                let captureString = `${piece.toUpperCase()}x${moves[moveDirection][i]}`;
                                let captured = toSquare['type'];

                                // Check to see if move puts enemy King into check. This will need
                                // extra notation.
                                if (piece === 'b' || piece === 'q' || piece === 'k') {
                                    inCheckFromUpRightMoves = doesMovePutEnemyKingIntoCheck(nextMovesFromTable['upRight'], blackKingPosition, whiteKingPosition, turn);
                                    inCheckFromUpLeftMoves = doesMovePutEnemyKingIntoCheck(nextMovesFromTable['upLeft'], blackKingPosition, whiteKingPosition, turn);
                                    inCheckFromDownRightMoves = doesMovePutEnemyKingIntoCheck(nextMovesFromTable['downRight'], blackKingPosition, whiteKingPosition, turn);
                                    inCheckFromDownLeftMoves = doesMovePutEnemyKingIntoCheck(nextMovesFromTable['downLeft'], blackKingPosition, whiteKingPosition, turn);
                                }

                                if (piece === 'r' || piece === 'q' || piece === 'k') {
                                    inCheckFromUpMoves = doesMovePutEnemyKingIntoCheck(nextMovesFromTable['up'], blackKingPosition, whiteKingPosition, turn);
                                    inCheckFromDownMoves = doesMovePutEnemyKingIntoCheck(nextMovesFromTable['down'], blackKingPosition, whiteKingPosition, turn);
                                    inCheckFromRightMoves = doesMovePutEnemyKingIntoCheck(nextMovesFromTable['right'], blackKingPosition, whiteKingPosition, turn);
                                    inCheckFromLeftMoves = doesMovePutEnemyKingIntoCheck(nextMovesFromTable['left'], blackKingPosition, whiteKingPosition, turn);
                                }

                                if (
                                    inCheckFromUpRightMoves === true ||
                                    inCheckFromUpLeftMoves === true ||
                                    inCheckFromDownRightMoves === true ||
                                    inCheckFromDownLeftMoves === true
                                ) {
                                    captureString = `${captureString}+`;
                                }

                                if (turn === color) {
                                    legalMoves.push({
                                        color: turn,
                                        san: captureString,
                                        from: squareCode,
                                        to: moves[moveDirection][i],
                                        piece: piece,
                                        captured: captured,
                                    });
                                }
                                else {
                                    addToAttackMap(moves[moveDirection][i], squareCode, piece);
                                }

                                break;
                            }

                            // Square not empty, friendly piece so cannot move here, final square we look at.
                            else if (toSquare !== null && toSquare['color'] === turn) {
                                break;
                            }

                            // Square empty, can move.
                            else if (toSquare === null) {
                                let san = moves[moveDirection][i];

                                if (piece === 'b' || piece === 'q' || piece === 'k') {
                                    inCheckFromUpRightMoves = doesMovePutEnemyKingIntoCheck(nextMovesFromTable['upRight'], blackKingPosition, whiteKingPosition, turn);
                                    inCheckFromUpLeftMoves = doesMovePutEnemyKingIntoCheck(nextMovesFromTable['upLeft'], blackKingPosition, whiteKingPosition, turn);
                                    inCheckFromDownRightMoves = doesMovePutEnemyKingIntoCheck(nextMovesFromTable['downRight'], blackKingPosition, whiteKingPosition, turn);
                                    inCheckFromDownLeftMoves = doesMovePutEnemyKingIntoCheck(nextMovesFromTable['downLeft'], blackKingPosition, whiteKingPosition, turn);
                                }

                                if (piece === 'r' || piece === 'q' || piece === 'k') {
                                    inCheckFromUpMoves = doesMovePutEnemyKingIntoCheck(nextMovesFromTable['up'], blackKingPosition, whiteKingPosition, turn);
                                    inCheckFromDownMoves = doesMovePutEnemyKingIntoCheck(nextMovesFromTable['down'], blackKingPosition, whiteKingPosition, turn);
                                    inCheckFromRightMoves = doesMovePutEnemyKingIntoCheck(nextMovesFromTable['right'], blackKingPosition, whiteKingPosition, turn);
                                    inCheckFromLeftMoves = doesMovePutEnemyKingIntoCheck(nextMovesFromTable['left'], blackKingPosition, whiteKingPosition, turn);
                                }

                                if (
                                    inCheckFromUpRightMoves === true ||
                                    inCheckFromUpLeftMoves === true ||
                                    inCheckFromDownRightMoves === true ||
                                    inCheckFromDownLeftMoves === true
                                ) {
                                    san = `${moves[moveDirection][i]}+`;
                                }

                                if (turn === color) {
                                    legalMoves.push({
                                        color: turn,
                                        san: `${piece.toUpperCase()}${san}`,
                                        from: squareCode,
                                        to: moves[moveDirection][i],
                                        piece: piece,
                                    });
                                }
                                else {
                                    addToAttackMap(moves[moveDirection][i], squareCode, piece);
                                }
                            }
                        }
                    }
                break;
            }
        }
    }
    
    for (let move=0; move<attackMap.length; move++) {
        if (attackMap[move].to === blackKingPosition) {
            legalMoves = legalMoves.filter(item => item.to !== attackMap[move].to);
        }
    }
    //console.log(legalMoves);
    return legalMoves;
}



// Setup attack map.
let attackMap = [];

/**
 * Get the board square location of the Kings.
 * @param {array} board – board piece array generated by Chess.js
 * @return {object}
 */
function getKingPositions(board) {
    let whiteKingPosition = null;
    let blackKingPosition = null;

    for (let rank=0; rank<board.length; rank++) {
        for (let square=0; square<board[rank].length; square++) {
            if (board[rank][square] === null) {
                continue;
            }
            if (board[rank][square]['type'] === 'k' && (whiteKingPosition === null || blackKingPosition === null)) {
                if (board[rank][square]['color'] === 'w') {
                    whiteKingPosition = board[rank][square]['square'];
                    continue;
                }
                else {
                    blackKingPosition = board[rank][square]['square'];
                    continue;
                }
            }
        }
    }

    return {
        white: whiteKingPosition,
        black: blackKingPosition
    }
}

/**
 * Method to determine whether a move will put the enemy King into check if you make it.
 * @param {object} moves – moves list to search. 
 * @param {string} blackKingPosition - square the black King resides on e.g. `e1`.
 * @param {string} whiteKingPosition – square the white King resides on e.g. `e8`.
 * @param {string} turn – whos turn it is. `w` or `b`.
 * @returns
 */
function doesMovePutEnemyKingIntoCheck(moves, blackKingPosition, whiteKingPosition, turn) {
    for (let i=0; i<moves.length; i++) {
        if ((turn === 'b' && moves[i] === whiteKingPosition) || (turn === 'w' && moves[i] === blackKingPosition)) {
            return true;
        }
    }

    return false;
}

/**
 * Method to add a move to the attack map.
 * @param {string} to - the square the piece is going to. 
 * @param {string} from - the square the piece is coming from.
 * @param {string} piece - the piece moving.
 */
function addToAttackMap(to, from, piece) {
    attackMap.push({
        to: to,
        from: from,
        piece: piece,
    });
}