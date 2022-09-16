import { Chess } from 'chess.js';

import { OpeningBook } from './opening-book.js';
self.outOfOpening = false;

import { GenerateMoves } from './move_generation/move-generator.js';

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
    for (let i=0; i<moves.length; i++) {
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
    for (let i=0; i<movesScoredAndOrdered.length; i++) {
        movesOrdered.push(movesScoredAndOrdered[i][0]['san']);
    }

    return movesOrdered;
}

/**
 * Method to calculate the total material value for players including value
 * of piece and it's position on the board.
 *
 * @param {array} board - pass a board array or don't and use the current game one.
 * Get board array with: `self.chess.board()`
 * @return {object} – material values.
 */
function calculateMaterialValue(board) {

    // Set values to zero.
    let whiteMaterialValue = 0;
    let blackMaterialValue = 0;

    // Loop through all ranks on the board.
    for (let rank=0; rank<board.length; rank++) {
        // Loop through all squares in a rank.
        for (let square=0; square<board[rank].length; square++) {
            // If square is empty, continue to the next square.
            if (board[rank][square] === null) {
                continue;
            }

            // If piece is white...
            if (board[rank][square]['color'] === 'w') {
                // Choose piece and calculate value from strength and also position...
                switch (board[rank][square]['type']) {
                    case 'p':
                        whiteMaterialValue += self.pieces.p;

                        whiteMaterialValue += self.pieceTables.wP[
                            board[rank][square]['square'][0]
                        ][
                            (board[rank][square]['square'][1]-1)
                        ];

                        break;

                    case 'n':
                        whiteMaterialValue += self.pieces.n;

                        whiteMaterialValue += self.pieceTables.n[
                            board[rank][square]['square'][0]
                        ][
                            (board[rank][square]['square'][1]-1)
                        ];

                        break;

                    case 'b':
                        whiteMaterialValue += self.pieces.b;

                        whiteMaterialValue += self.pieceTables.b[
                            board[rank][square]['square'][0]
                        ][
                            (board[rank][square]['square'][1]-1)
                        ];

                        break;

                    case 'r':
                        whiteMaterialValue += self.pieces.r;

                        whiteMaterialValue += self.pieceTables.r[
                            board[rank][square]['square'][0]
                        ][
                            (board[rank][square]['square'][1]-1)
                        ];

                        break;

                    case 'q':
                        whiteMaterialValue += self.pieces.q;

                        whiteMaterialValue += self.pieceTables.q[
                            board[rank][square]['square'][0]
                        ][
                            (board[rank][square]['square'][1]-1)
                        ];

                        break;

                    case 'k':
                        whiteMaterialValue += self.pieceTables.wK[
                            board[rank][square]['square'][0]
                        ][
                            (board[rank][square]['square'][1]-1)
                        ];

                        break;
                }
            }
            // Else, if black...
            else {
                // Do the same... choose piece and calculate value from strength and also position...
                switch (board[rank][square]['type']) {
                    case 'p':
                        blackMaterialValue += self.pieces.p;

                        blackMaterialValue += self.pieceTables.bP[
                            board[rank][square]['square'][0]
                        ][
                            (board[rank][square]['square'][1]-1)
                        ];

                        break;

                    case 'n':
                        blackMaterialValue += self.pieces.n;

                        blackMaterialValue += self.pieceTables.n[
                            board[rank][square]['square'][0]
                        ][
                            (board[rank][square]['square'][1]-1)
                        ];

                        break;

                    case 'b':
                        blackMaterialValue += self.pieces.b;

                        blackMaterialValue += self.pieceTables.b[
                            board[rank][square]['square'][0]
                        ][
                            (board[rank][square]['square'][1]-1)
                        ];

                        break;

                    case 'r':
                        blackMaterialValue += self.pieces.r;

                        blackMaterialValue += self.pieceTables.r[
                            board[rank][square]['square'][0]
                        ][
                            (board[rank][square]['square'][1]-1)
                        ];

                        break;

                    case 'q':
                        blackMaterialValue += self.pieces.q;

                        blackMaterialValue += self.pieceTables.q[
                            board[rank][square]['square'][0]
                        ][
                            (board[rank][square]['square'][1]-1)
                        ];

                        break;

                    case 'k':
                        blackMaterialValue += self.pieceTables.bK[
                            board[rank][square]['square'][0]
                        ][
                            (board[rank][square]['square'][1]-1)
                        ];

                        break;
                }
            }
        }
    }

    // Return an object with material values.
    return {
        white: {
            materialValue: whiteMaterialValue,
        },
        black: {
            materialValue: blackMaterialValue,
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

    for (let i=0; i<moves.length; i++) {
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
function negaMax(alpha, beta, depth, nullMove = true) {
    // Count the positions evaluated.
    self.positionsEvaluated++;

    // Make sure we're within our time limits.
    const timeCheck = performance.now();

    // If depth is 0 or we're out of time run a shallow search looking for immediate
    // threats as a counter to the horizon effect and return this eval.
    if (depth <= 0 || (timeCheck - self.searchTimeStart) > self.allocatedSearchTime) {
        return searchAllCaptures(alpha, beta);
    }
    
    // Generate and order moves.
    let moves = self.chess.moves({ verbose: true });
    self.currentMoveSet = moves;
    moves = orderMoves(moves);

    // If no moves we must be in checkmate or stalemate.
    if (moves.length === 0) {
        if (self.chess.in_checkmate() === true) {
            // If checkmate, we lose so the score is -Infinity aka... bad.
            return -Infinity;
        }

        // If stalemate it's a draw so eval is 0.
        return 0;
    }

    // Loop over moves and perform depth search and eval.
    for (let i=0; i<moves.length; i++) {
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

/**
 * Entry for engine.
 * @param {object} e – Worker event. Contains data object with engine parameters.
 * 
 * @param {string} e.data.position - FEN string of original position.
 * (Original because we'll be manipulating the board position to determine the best move).
 * 
 * @param {int} e.data.numberOfMoves - number of moves in the game. Used for various calculations where
 * number of moves is important.
 * 
 * @param {string} e.data.lastPlayerMove – the last player move. This is used for opening play calculation.
 * 
 * @param {int} e.data.allocatedSearchTime – the amount of time the engine has to find the best move.
 * 
 * @param {int} e.data.searchDepth – the depth in the game tree for the engine to search to.
 **/
onmessage = (e) => {
    // Setup all variables passed in from the UI.
    self.chess = new Chess(e.data.position);
    self.allocatedSearchTime = e.data.allocatedSearchTime;
    self.searchDepth = e.data.searchDepth;
    self.lastPlayerMove = e.data.lastPlayerMove;
    self.numberOfMoves = e.data.numberOfMoves;

    // Setup other variables needed.
    self.positionsEvaluated = 0;
    self.alpha = -Infinity;
    self.beta = Infinity;
    self.openings = OpeningBook;
    self.pieceTables = PieceTables;
    self.currentMoveSet = null;

    const start = performance.now();
    self.GenerateMoves = GenerateMoves(
        self.chess.board(),
        self.chess.fen()
    );
    const stop = performance.now();

    console.log(self.GenerateMoves);
    console.log(self.chess.moves({ verbose: true }));

    console.log(stop-start);

    self.pieces = {
        p: 100,
        n: 320,
        b: 330,
        r: 500,
        q: 900,
    }

    // Start the clock for search time.
    self.searchTimeStart = performance.now();

    // Generate and order all legal moves for position.
    let moves = self.chess.moves({ verbose: true });
    self.currentMoveSet = moves;
    moves = orderMoves(moves);

    // Reset current best move.
    let currentBestMove = undefined;

    // Check opening book if there are still openings that could be played.
    if (self.outOfOpening === false) {
        // Array of playable openings.
        let playableOpenings = [];

        // Loop through all openings in the book.
        for (let opening=0; opening<self.openings.length; opening++) {
            // Split moves down into an array seperating by spaces.
            let openingExploded = self.openings[opening].split(' ');

            // If we're on the first move, automatically add all openings to the array
            // as we could play anything!
            if (self.numberOfMoves === 0) {
                playableOpenings.push(openingExploded[self.numberOfMoves]);
            }

            // Else check to see if the last player move lines up with the correct move in the
            // opening book.
            else if (self.lastPlayerMove === openingExploded[self.numberOfMoves-1]) {
                // If it does, push it as a playable opening.
                playableOpenings.push(openingExploded[self.numberOfMoves]);
            }
        }

        // If we have a playable opening...
        if (playableOpenings.length !== 0) {
            // Pick a random one and set it to be the `currentBestMove`.
            const randomMoveIndexFromOpenings = Math.floor(Math.random() * playableOpenings.length);
            currentBestMove = playableOpenings[randomMoveIndexFromOpenings];

            // Little fail safe check to ensure the move is actually a legal one.
            if (moves.includes(currentBestMove) === false) {
                // If it's not then we'll set the current best move to be undefined again.
                currentBestMove = undefined;
            }
        }
        // If there are no playable openings then we'll set the engine to be out of opening which
        // will trigger it have to act for itself.
        else {
            self.outOfOpening = true;
        }
    }

    // If we don't have a legal move by this point, the opening book has failed so we'll need to search
    // and evaluate.
    if (currentBestMove === undefined) {
        let currentBestScore = -Infinity;

        for (let i=0; i<moves.length; i++) {
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

    // Send best move back to the UI.
    postMessage(currentBestMove);
}
