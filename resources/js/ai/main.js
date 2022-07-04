import { Chess } from 'chess.js';

import { OpeningBook } from './opening-book.js';
self.outOfOpening = false;

import { PieceTables } from './piece-tables.js';

/**
 * Method to order moves by assumption of how good they might be. Useful
 * for more efficient alpha/beta pruning.
 * @param  {array} moves - moves array.
 * @param {boolean} justCaptures - just return ordered captures.
 * @return {array} - ordered moves.
 */
function orderMoves(moves, justCaptures = false) {
    let movesOrdered = [];
    let movesScored = [];

    if (justCaptures === true) {
        moves = moves.filter(item => item['captured'] !== undefined);
    }

    // Loop through all moves and score them based on how good they are
    // as an assumption.
    for (let i in moves) {
        // 0 by default if there's nothing special about them.
        let moveScore = 0;

        // If it's checkmate, highest score.
        if (moves[i]['san'].includes('#')) {
            moveScore += 9999;
        }

        // Checks are pretty good.
        if (moves[i]['san'].includes('+')) {
            moveScore += 100;
        }

        // So are piece promotions, but only queens for now.
        if (moves[i]['san'].includes('=Q')) {
            moveScore += self.pieces.q;
        }

        // Some captures are good too, how good will depend on piece value.
        if (moves[i]['captured'] !== undefined) {
            moveScore += 10 * self.pieces[moves[i]['captured']] - self.pieces[moves[i]['piece']]
        }

        // Penalise moves that get high value pieces captured by pawns.

        // Push the move and the score to an array to sort.
        movesScored.push([moves[i], moveScore]);
    }

    // Sort array to get best scoring.
    const movesScoredAndOrdered = movesScored.sort(function(a, b) {
        return b[1] - a[1];
    });

    // Remove scores and just get the move order to be evaluated.
    for (let i in movesScoredAndOrdered) {
        movesOrdered.push(movesScoredAndOrdered[i][0]['san']);
    }

    return movesOrdered;
}

/**
 * Method to calculate the total material value for players including value
 * of piece and it's position on the board.
 *
 * @param {array} board - pass a board array or don't and use the current game one.
 * Get board array with: `window.game.chess.board()`
 * @return {object} – material values.
 */
function calculateMaterialValue(board = undefined) {
    board = (board === undefined) ?
        self.chess.board() :
        board
    ;

    let whiteMaterialValue = 0;
    let blackMaterialValue = 0;
    let whiteNumberOfPieces = 0;
    let blackNumberOfPieces = 0;

    for (let rank in board) {
        for (let square in board[rank]) {

            if (board[rank][square] === null) {
                continue;
            }

            if (board[rank][square]['color'] === 'w') {
                switch (board[rank][square]['type']) {
                    case 'p':
                        whiteMaterialValue += self.pieces.p;

                        whiteMaterialValue += self.pieceTables.wP[
                            board[rank][square]['square'][0]
                        ][
                            (board[rank][square]['square'][1]-1)
                        ];

                        whiteNumberOfPieces++;

                        break;

                    case 'n':
                        whiteMaterialValue += self.pieces.n;

                        whiteMaterialValue += self.pieceTables.n[
                            board[rank][square]['square'][0]
                        ][
                            (board[rank][square]['square'][1]-1)
                        ];

                        whiteNumberOfPieces++;

                        break;

                    case 'b':
                        whiteMaterialValue += self.pieces.b;

                        whiteMaterialValue += self.pieceTables.b[
                            board[rank][square]['square'][0]
                        ][
                            (board[rank][square]['square'][1]-1)
                        ];

                        whiteNumberOfPieces++;

                        break;

                    case 'r':
                        whiteMaterialValue += self.pieces.r;

                        whiteMaterialValue += self.pieceTables.r[
                            board[rank][square]['square'][0]
                        ][
                            (board[rank][square]['square'][1]-1)
                        ];

                        whiteNumberOfPieces++;

                        break;

                    case 'q':
                        whiteMaterialValue += self.pieces.q;

                        whiteMaterialValue += self.pieceTables.q[
                            board[rank][square]['square'][0]
                        ][
                            (board[rank][square]['square'][1]-1)
                        ];

                        whiteNumberOfPieces++;

                        break;

                    case 'k':
                        whiteMaterialValue += self.pieceTables.wK[
                            board[rank][square]['square'][0]
                        ][
                            (board[rank][square]['square'][1]-1)
                        ];

                        whiteNumberOfPieces++;

                        break;
                }
            }
            else {
                switch (board[rank][square]['type']) {
                    case 'p':
                        blackMaterialValue += self.pieces.p;

                        blackMaterialValue += self.pieceTables.bP[
                            board[rank][square]['square'][0]
                        ][
                            (board[rank][square]['square'][1]-1)
                        ];

                        blackNumberOfPieces++;

                        break;

                    case 'n':
                        blackMaterialValue += self.pieces.n;

                        blackMaterialValue += self.pieceTables.n[
                            board[rank][square]['square'][0]
                        ][
                            (board[rank][square]['square'][1]-1)
                        ];

                        blackNumberOfPieces++

                        break;

                    case 'b':
                        blackMaterialValue += self.pieces.b;

                        blackMaterialValue += self.pieceTables.b[
                            board[rank][square]['square'][0]
                        ][
                            (board[rank][square]['square'][1]-1)
                        ];

                        blackNumberOfPieces++;

                        break;

                    case 'r':
                        blackMaterialValue += self.pieces.r;

                        blackMaterialValue += self.pieceTables.r[
                            board[rank][square]['square'][0]
                        ][
                            (board[rank][square]['square'][1]-1)
                        ];

                        blackNumberOfPieces++;

                        break;

                    case 'q':
                        blackMaterialValue += self.pieces.q;

                        blackMaterialValue += self.pieceTables.q[
                            board[rank][square]['square'][0]
                        ][
                            (board[rank][square]['square'][1]-1)
                        ];

                        blackNumberOfPieces++;

                        break;

                    case 'k':
                        blackMaterialValue += self.pieceTables.bK[
                            board[rank][square]['square'][0]
                        ][
                            (board[rank][square]['square'][1]-1)
                        ];
                        blackNumberOfPieces++;

                        break;
                }
            }
        }
    }

    return {
        white: {
            materialValue: whiteMaterialValue,
            numberOfPieces: whiteNumberOfPieces,
        },
        black: {
            materialValue: blackMaterialValue,
            numberOfPieces: blackNumberOfPieces,
        },
    }
}

/**
 * Method to evaluate and score a position.
 * @return {float}
 */
function evaluate() {
    // Some variables used within evaluation
    const turn = self.chess.turn();
    const moves = self.currentMoveSet;
    const board = self.chess.board();
    const totalMaterialValue = calculateMaterialValue(board);

    // Calculates material value for a side including positional value.
    const materialValue = totalMaterialValue.white.materialValue - totalMaterialValue.black.materialValue;

    // Calcuates mobility value for a side. In theory the more moves you have
    // the better.
    const mobilityValue = 100 / moves.length;

    // Calcuate final score.
    let score = (mobilityValue + materialValue);

    // Invert for the right colour.
    return (turn === 'w') ? score * 1 : score * -1;
}

/**
 * Method is a seperate NegaMax function that has no depth and searches
 * through just captures.
 * @param  {int|float} alpha - highest score so far.
 * @param  {int|float} beta - lowest score so far.
 * @return {int|float} - highest score.
 */
function searchAllCaptures(alpha, beta) {
    let score = evaluate();

    if (score >= beta) {
        return beta;
    }

    if (score > alpha) {
        alpha = score;
    }

    let moves = self.chess.moves({ verbose: true });
    self.currentMoveSet = moves;
    moves = orderMoves(moves, true);

    for (let i in moves) {
        self.chess.move(moves[i]);
        let newScore = -searchAllCaptures(-beta, -alpha);
        self.chess.undo();

        if (newScore >= beta) {
            return beta;
        }
        if (newScore > alpha) {
            alpha = newScore;
        }
    }

    return alpha;
}

/**
 * NegaMax function for finding the highest score for a given move set.
 * @param  {int|float} alpha - highest score so far.
 * @param  {int|float} beta - lowest score so far.
 * @param  {int} depth - depth to search to.
 * @return {int|float} - highest score.
 */
function negaMax(alpha, beta, depth) {
    self.positionsEvaluated++;

    const timeCheck = performance.now();

    if (depth === 0 || (timeCheck - self.searchTimeStart) > self.allocatedSearchTime) {
        return searchAllCaptures(alpha, beta);
    }

    let currentBestScore = -Infinity;
    let currentBestMove = '';

    let moves = self.chess.moves({ verbose: true });
    self.currentMoveSet = moves;
    moves = orderMoves(moves);


    if (moves.length === 0) {
        if (self.chess.in_checkmate() === true) {
            return -Infinity;
        }
        return 0;
    }

    for (let i in moves) {
        self.chess.move(moves[i]);
        let newScore = -negaMax(-beta, -alpha, depth-1);
        self.chess.undo();

        if (newScore >= beta) {
            return beta;
        }
        if (newScore > alpha) {
            alpha = newScore;
        }
    }

    return alpha;
}

onmessage = (e) => {
    self.chess = new Chess(e.data.originalPosition);

    self.lastMove = e.data.lastMove;
    self.numberOfMoves = e.data.moves;

    self.positionsEvaluated = 0;
    self.searchDepth = 2;
    self.alpha = -Infinity;
    self.beta = Infinity;
    self.openings = OpeningBook;
    self.pieceTables = PieceTables;
    self.currentMoveSet = null;
    self.allocatedSearchTime = 30000;
    self.searchTimeStart = 0;

    self.pieces = {
        p: 100,
        n: 320,
        b: 330,
        r: 500,
        q: 900,
    }

    self.positionsEvaluated = 0;
    self.searchTimeStart = performance.now();

    // Check opening book if there are still openings that could be played.
    self.lastPlayerMove = e.data.lastPlayerMove;
    self.numberOfMoves = e.data.numberOfMoves;
    let moves = self.chess.moves({verbose: true});
    self.currentMoveSet = moves;
    moves = orderMoves(moves);

    let currentBestMove = undefined;

    if (self.outOfOpening === false) {

        let playableOpenings = [];

        for (let opening in self.openings) {
            let openingExploded = self.openings[opening].split(' ');

            if (self.numberOfMoves === 0) {
                playableOpenings.push(openingExploded[self.numberOfMoves]);
            }

            else if (self.lastPlayerMove === openingExploded[self.numberOfMoves-1]) {
                playableOpenings.push(openingExploded[self.numberOfMoves]);
            }
        }

        if (playableOpenings.length !== 0) {
            const randomMoveIndexFromOpenings = Math.floor(Math.random() * playableOpenings.length);
            currentBestMove = playableOpenings[randomMoveIndexFromOpenings];

            if (moves.includes(currentBestMove) === false) {
                currentBestMove = undefined;
            }
        }
        else {
            self.outOfOpening = true;
        }
    }

    if (currentBestMove === undefined) {
        let currentBestScore = -Infinity;

        if (moves.length === 0) {
            return;
        }

        for (let i in moves) {
            self.chess.move(moves[i]);
            let newScore = -negaMax(self.alpha, self.beta, self.searchDepth);
            self.chess.undo();

            if (newScore >= currentBestScore) {
                currentBestScore = newScore;
                currentBestMove = moves[i];
            }
        }

        const t1 = performance.now();

        console.log(
            `Move: ${currentBestMove}\nNumber of Positions Evaluated: ${self.positionsEvaluated}\nScore: ${currentBestScore}\nTime: ${Math.round(t1-self.searchTimeStart)}ms`,
        );
    }

    postMessage(currentBestMove);
}
