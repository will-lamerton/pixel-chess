import { BLACK_PAWN } from "./pieces/bP";
import { WHITE_PAWN } from "./pieces/wP";
import { KNIGHT } from "./pieces/N";
import { BISHOP } from "./pieces/B";
import { ROOK } from "./pieces/R";
import { QUEEN } from "./pieces/Q";
import { KING } from "./pieces/K";

export const pieceMoveTable = {
    p: {
        b: BLACK_PAWN,
        w: WHITE_PAWN
    },
    n: {
        b: KNIGHT,
        w: KNIGHT
    },
    b: {
        b: BISHOP,
        w: BISHOP
    },
    r: {
        b: ROOK,
        w: ROOK
    },
    q: {
        b: QUEEN,
        w: QUEEN
    },
    k: {
        b: KING,
        w: KING
    }  
}