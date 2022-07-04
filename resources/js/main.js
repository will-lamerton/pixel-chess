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
            pieceTheme: './img/chesspieces/retro/{piece}.svg',
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

        new Audio('audio/move.mp3').play();

        if (window.game.playingAs === 'w' && window.game.chess.turn() !== 'w') {
            window.game.board = Chessboard(
                'board',
                {
                    pieceTheme: './img/chesspieces/retro/{piece}.svg',
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
                    pieceTheme: './img/chesspieces/retro/{piece}.svg',
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

        window.game.ai.postMessage({
            originalPosition: window.game.chess.fen(),
            lastPlayerMove: (piece.substring(1) === 'P') ? target : piece.substring(1).toUpperCase()+target,
            numberOfMoves: window.game.moves,
        });

        window.game.ai.onmessage = (e) => {
            window.game.chess.move(e.data);
            window.game.board.position(window.game.chess.fen());
            window.game.update();
        }
    }

    /**
     * API extension method to set the turn of Chess.js by passing a color.
     * @param {string} color - either `w` or `b`.
     * @return {void}
     */
    setTurn(color) {
        let tokens = window.game.chess.fen().split(' ');
        tokens[1] = color;
        window.game.chess.load(tokens.join(' '));
    }

    /**
     * Method to set a custom FEN for the board.
     * @param {[type]} fen  [description]
     */
    setCustomFen(fen) {
        window.game.chess.reset();
        window.game.chess.load(fen);
        window.game.update(fen);
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
            });

            window.game.ai.onmessage = (e) => {
                window.game.chess.move(e.data);
                window.game.board.position(window.game.chess.fen());
                window.game.update();
            }
        }
    }

    /**
     * API extension to get the long hand version of the current players turn
     * color.
     * @return {string}
     */
    getTurnColorLong() {
        return (window.game.chess.turn() === 'w') ? 'white' : 'black';
    }

    /**
     * Method to get King positions on the board.
     * @param {array|undefined} board – optional board array to save time calculating.
     * @return {object}
     */
    getKingPositions(board = undefined) {
        board = (board === undefined) ? window.game.chess.board() : board;

        let whiteKingSquare = null;
        let blackKingSquare = null;

        for (let rank in board) {
            for (let square in board[rank]) {
                if (board[rank][square] === null) {
                    continue;
                }

                if (
                    board[rank][square]['color'] === 'w' &&
                    board[rank][square]['type'] === 'k' &&
                    whiteKingSquare === null
                ) {
                    whiteKingSquare = board[rank][square]['square'];
                    continue;
                }
                else if (
                    board[rank][square]['color'] === 'b' &&
                    board[rank][square]['type'] === 'k' &&
                    blackKingSquare === null
                ) {
                    blackKingSquare = board[rank][square]['square'];
                    continue;
                }
            }
        }

        return {
            whiteKingSquare: whiteKingSquare,
            blackKingSquare: blackKingSquare
        };
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

        window.game.playingAs = 'w';
        window.game.lastPlayerMove = undefined;
    }
}

const game = new Game();
window.game = game;

window.Alpine = Alpine;

Alpine.store('game', {
    moves: window.game.moves,
})

Alpine.start();
