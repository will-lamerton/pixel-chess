import Alpine from 'alpinejs';

import { Chess } from 'chess.js';

class Game {
    /**
     * Constructor
     */
    constructor() {
        this.chess = new Chess();

        this.ai = new Worker('./js/ai/main.js', { type: 'module' });

        this.config = {
            pieceTheme: './img/chesspieces/font-awesome/{piece}.svg',
            position: 'start',
            draggable: true,
            onDragStart: this.onDragStart,
            onDrop: this.onDrop,
            orientation: 'white',
        }

        this.board = Chessboard('board', this.config);

        this.moves = 0;
        this.playingAs = 'w';

        this.pieces = {
            p: 100,
            n: 320,
            b: 330,
            r: 500,
            q: 900,
        }
    }

    /**
     * Method to update the front end UI for the chess game.
     * @param {string} fen - custom fen to update board with.
     * @return {void}
     */
    update(fen = undefined) {
        window.game.moves++;
        window.Alpine.store('game').moves++;

        if (window.game.playingAs === 'w' && window.game.chess.turn() !== 'w') {
            window.game.board = Chessboard(
                'board',
                {
                    pieceTheme: './img/chesspieces/font-awesome/{piece}.svg',
                    position: window.game.chess.fen(),
                    draggable: true,
                    onDragStart: window.game.onDragStart,
                    onDrop: window.game.onDrop,
                }
            );
        }
        else if (window.game.playingAs === 'b' && window.game.chess.turn() !== 'b') {
            window.game.board = Chessboard(
                'board',
                {
                    pieceTheme: './img/chesspieces/font-awesome/{piece}.svg',
                    position: window.game.chess.fen(),
                    draggable: true,
                    onDragStart: window.game.onDragStart,
                    onDrop: window.game.onDrop,
                    orientation: 'black'
                }
            );
        }
    }

    /**
     * Method that gets called when the user begins dragging a piece on the
     * board.
     * @param  {string} source - Square where drag started.
     * @param  {string} piece - Color and piece type that's being dragged.
     * @param  {object} position - Object containing all squares with pieces on and what those pieces are.
     * @param  {string} orientation - the current color who's playing.
     *
     * @return {boolean} - returning false stops the drag.
     */
    onDragStart(source, piece, position, orientation) {
        // Game isn't over...
        if (window.game.chess.game_over() === true) {
            return false;
        }

        // Correct color to play...
        if (
            (window.game.chess.turn() === 'w' && piece.search(/^b/) !== -1) ||
            (window.game.chess.turn() === 'b' && piece.search(/^w/) !== -1)
        ) {
            return false;
        }

        return true;
    }

    /**
     * Method that gets called when user stops dragging and tries to place the
     * piece.
     * @param  {string} source - square where drag and drop started.
     * @param  {string} target - square where drag and drop ended.
     * @return {void}
     */
    onDrop(source, target, piece) {
        let move = window.game.chess.move({
            from: source,
            to: target,
            promotion: 'q' // NOTE: always promote to a queen for example simplicity
        });

        // If move is illegal...
        if (move === null) {
            return 'snapback';
        }

        window.game.update();

        // If capture, we need to update the UI.
        window.game.logCapture(move);

        // Check for game ends.
        window.game.hasGameEnded();

        // Highlight move...
        document.getElementsByClassName(`square-${source}`)[0].classList.add('highlight-white');
        document.getElementsByClassName(`square-${target}`)[0].classList.add('highlight-white');

        window.Alpine.store('game').thinking = true;

        window.game.ai.postMessage({
            position: window.game.chess.fen(),
            lastPlayerMove: (piece.substring(1) === 'P') ? target : piece.substring(1).toUpperCase()+target,
            numberOfMoves: window.game.moves,
            allocatedSearchTime: window.Alpine.store('game').ai.allocatedSearchTime,
            searchDepth: window.Alpine.store('game').ai.searchDepth
        });

        // Method to await engine worker response.
        window.game.ai.onmessage = (e) => {
            window.Alpine.store('game').thinking = false;

            let move = window.game.chess.move(e.data);

            // If capture, we need to update the UI.
            window.game.logCapture(move);

            // If in check, highlight kings square red.
            if (window.game.chess.in_check() === true) {
                let board = window.game.chess.board();

                for (let rank in board) {
                    for (let square in board[rank]) {
                        if (board[rank][square] === null) {
                            continue;
                        }

                        // If playing white.
                        if (
                            board[rank][square]['color'] === 'w' &&
                            board[rank][square]['type'] === 'k' &&
                            window.game.playingAs === 'w'
                        ) {
                            document.getElementsByClassName(`square-${board[rank][square]['square']}`)[0].classList.add('highlight-check');
                        }
                        // If playing black.
                        else if (
                            board[rank][square]['color'] === 'b' &&
                            board[rank][square]['type'] === 'k' &&
                            window.game.playingAs === 'b'
                        ) {
                            document.getElementsByClassName(`square-${board[rank][square]['square']}`)[0].classList.add('highlight-check');
                        }
                    }
                }
            }

            // Check for game ends.
            window.game.hasGameEnded();

            // Highlight move...
            document.getElementsByClassName(`square-${move.from}`)[0].classList.add('highlight-black');
            document.getElementsByClassName(`square-${move.to}`)[0].classList.add('highlight-black');

            window.game.board.position(window.game.chess.fen());
            window.game.update();
        }
    }

    /**
     * Method to flip the game board. Does not change color playing.
     * @return {void}
     */
    flip() {
        window.game.board.orientation('flip');

        if (window.game.moves === 0) {
            window.game.playingAs = (window.game.chess.turn() === 'w') ? 'b' : 'w';

            window.game.ai.postMessage({
                originalPosition: window.game.chess.fen(),
                lastPlayerMove: undefined,
                numberOfMoves: window.game.moves,
                allocatedSearchTime: window.Alpine.store('game').ai.allocatedSearchTime,
                searchDepth: window.Alpine.store('game').ai.searchDepth,
            });

            window.game.ai.onmessage = (e) => {
                window.game.chess.move(e.data);
                window.game.board.position(window.game.chess.fen());
                window.game.update();
            }
        }
    }

    /**
     * Method to log a capture on the board and update the UI.
     * @param {object} move - move object from Chess.js
     * @return {void}
     */
    logCapture(move) {
        // If no capture, return.
        if (move.captured === undefined) {
            return;
        }

        // If there was a capture, which side has the captured piece.
        let capturedPlayer = (move.color === 'w') ? 'b' : 'w';

        // Log capture in store so UI can update.
        window.Alpine.store('game').captures[capturedPlayer][move.captured]++;
    }

    /**
     * Method to detect if the game has ended via.
     * - Checkmate
     * - Stalemate
     * - Draw by 50-move rule
     * - Draw by insufficient material
     * - Draw by threefold repetition
     *
     * Before updating the store to update the UI.
     * @return {void}
     */
    hasGameEnded() {
        if (window.game.chess.in_checkmate() === true) {
            window.Alpine.store('game').inCheckmate = true;
        }
        else if (window.game.chess.in_stalemate() === true) {
            window.Alpine.store('game').inStalemate = true;
        }
        else if (window.game.chess.insufficient_material() === true) {
            window.Alpine.store('game').insufficientMaterial = true;
        }
        else if (window.game.chess.in_draw() === true) {
            window.Alpine.store('game').inDraw = true;
        }
        else if (window.game.chess.in_threefold_repetition() === true) {
            window.Alpine.store('game').inThreefoldRepetition = true;
        }
    }

    /**
     * Method to reset the game and the various packages.
     * @return {void}
     */
    reset() {
        window.game.ai.onmessage = undefined;
        window.game.ai.terminate();
        window.game.ai = new Worker('./js/ai/main.js', { type: 'module' });

        window.game.board.start(true);
        window.game.board.orientation('white');

        window.game.chess.reset();

        window.game.moves = 0;
        window.Alpine.store('game').moves = 0;
        window.Alpine.store('game').captures = {
            w: {
                p: 0,
                n: 0,
                b: 0,
                r: 0,
                q: 0,
            },
            b: {
                p: 0,
                n: 0,
                b: 0,
                r: 0,
                q: 0,
            },
        }
        window.Alpine.store('game').inCheckmate = false;
        window.Alpine.store('game').inStalemate = false;
        window.Alpine.store('game').inDraw = false;
        window.Alpine.store('game').inThreefoldRepetition = false;
        window.Alpine.store('game').insufficientMaterial = false;

        window.game.playingAs = 'w';
        window.game.lastPlayerMove = undefined;
    }
}

const game = new Game();
window.game = game;

window.Alpine = Alpine;

Alpine.store('game', {
    moves: window.game.moves,
    thinking: false,

    captures: {
        w: {
            p: 0,
            n: 0,
            b: 0,
            r: 0,
            q: 0,
        },
        b: {
            p: 0,
            n: 0,
            b: 0,
            r: 0,
            q: 0,
        },
    },

    inCheckmate: false,
    inStalemate: false,
    inDraw: false,
    inThreefoldRepetition: false,
    insufficientMaterial: false,

    ai: {
        allocatedSearchTime: 2000,
        searchDepth: 2,
    }
})

Alpine.start();
