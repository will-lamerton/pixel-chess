export const QUEEN = {
    // Rank 8
    a8: {
        up: [],
        down: ['a7', 'a6', 'a5', 'a4', 'a3', 'a2', 'a1'],
        left: [],
        right: ['b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8'],

        upRight: [],
        upLeft: [],
        downRight: ['a8', 'b7', 'c6', 'd5', 'e4', 'f3', 'g2', 'h1'],
        downLeft: [],
    },
    b8: {
        up: [],
        down: ['b7', 'b6', 'b5', 'b4', 'b3', 'b2', 'b1'],
        left: ['a8'],
        right: ['c8', 'd8', 'e8', 'f8', 'g8', 'h8'],

        upRight: [],
        upLeft: [],
        downRight: ['c7', 'd6', 'e5', 'f4', 'g3', 'h2'],
        downLeft: ['a7'],
    },
    c8: {
        up: [],
        down: ['c7', 'c6', 'c5', 'c4', 'c3', 'c2', 'c1'],
        left: ['b8', 'a8'],
        right: ['d8', 'e8', 'f8', 'g8', 'h8'],

        upRight: [],
        upLeft: [],
        downRight: ['d7', 'e6', 'f5', 'g4', 'h3'],
        downLeft: ['b7', 'a6'],
    },
    d8: {
        up: [],
        down: ['d7', 'd6', 'd5', 'd4', 'd3', 'd2', 'd1'],
        left: ['c8', 'b8', 'a8'],
        right: ['e8', 'f8', 'g8', 'h8'],

        upRight: [],
        upLeft: [],
        downRight: ['e7', 'f6', 'g5', 'h4'],
        downLeft: ['c7', 'b6', 'a5'],
    },
    e8: {
        up: [],
        down: ['e7', 'e6', 'e5', 'e4', 'e3', 'e2', 'e1'],
        left: ['d8', 'c8', 'b8', 'a8'],
        right: ['f8', 'g8', 'h8'],

        upRight: [],
        upLeft: [],
        downRight: ['f7', 'g6', 'h5'],
        downLeft: ['d7', 'c6', 'b5', 'a4'],
    },
    f8: {
        up: [],
        down: ['f7', 'f6', 'f5', 'f4', 'f3', 'f2', 'f1'],
        left: ['e8', 'd8', 'c8', 'b8', 'a8'],
        right: ['g8', 'h8'],

        upRight: [],
        upLeft: [],
        downRight: ['g7', 'h6'],
        downLeft: ['e7', 'd6', 'c5', 'b4', 'a3'],
    },
    g8: {
        up: [],
        down: ['g7', 'g6', 'g5', 'g4', 'g3', 'g2', 'g1'],
        left: ['f8', 'e8', 'd8', 'c8', 'b8', 'a8'],
        right: ['h8'],

        upRight: [],
        upLeft: [],
        downRight: ['h7'],
        downLeft: ['f7', 'e6', 'd5', 'c4', 'b3', 'a2'],
    },
    h8: {
        up: [],
        down: ['h7', 'h6', 'h5', 'h4', 'h3', 'h2', 'h1'],
        left: ['g8', 'f8', 'e8', 'd8', 'c8', 'b8', 'a8'],
        right: [],

        upRight: [],
        upLeft: [],
        downRight: [],
        downLeft: ['g7', 'f6', 'e5', 'd4', 'c3', 'b2', 'a1'],
    },

    // Rank 7
    a7: {
        up: ['a8'],
        down: ['a6', 'a5', 'a4', 'a3', 'a2', 'a1'],
        left: [],
        right: ['b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],

        upRight: ['b8'],
        upLeft: [],
        downRight: ['b6', 'c5', 'd4', 'e3', 'f2', 'g1'],
        downLeft: [],
    },
    b7: {
        up: ['b8'],
        down: ['b6', 'b5', 'b4', 'b3', 'b2', 'b1'],
        left: ['a7'],
        right: ['c7', 'd7', 'e7', 'f7', 'g7', 'h7'],

        upRight: ['c8'],
        upLeft: ['a8'],
        downRight: ['c6', 'd5', 'e4', 'f3', 'g2', 'h1'],
        downLeft: ['a6'],
    },
    c7: {
        up: ['c8'],
        down: ['c6', 'c5', 'c4', 'c3', 'c2', 'c1'],
        left: ['b7', 'a7'],
        right: ['d7', 'e7', 'f7', 'g7', 'h7'],

        upRight: ['d8'],
        upLeft: ['b8'],
        downRight: ['d6', 'e5', 'f4', 'g3', 'h2'],
        downLeft: ['b6', 'a5'],
    },
    d7: {
        up: ['d8'],
        down: ['d6', 'd5', 'd4', 'd3', 'd2', 'd1'],
        left: ['c7', 'b7', 'a7'],
        right: ['e7', 'f7', 'g7', 'h7'],

        upRight: ['e8'],
        upLeft: ['c8'],
        downRight: ['e6', 'f5', 'g4', 'h3'],
        downLeft: ['c6', 'b5', 'a4'],
    },
    e7: {
        up: ['e8'],
        down: ['e6', 'e5', 'e4', 'e3', 'e2', 'e1'],
        left: ['d7', 'c7', 'b7', 'a7'],
        right: ['f7', 'g7', 'h7'],

        upRight: ['f8'],
        upLeft: ['d8'],
        downRight: ['f6', 'g5', 'h4'],
        downLeft: ['d6', 'c5', 'b4', 'a3'],
    },
    f7: {
        up: ['f8'],
        down: ['f6', 'f5', 'f4', 'f3', 'f2', 'f1'],
        left: ['e7', 'd7', 'c7', 'b7', 'a7'],
        right: ['g7', 'h7'],

        upRight: ['g8'],
        upLeft: ['e8'],
        downRight: ['g6', 'h5'],
        downLeft: ['e6', 'd5', 'c4', 'b3', 'a2'],
    },
    g7: {
        up: ['g8'],
        down: ['g6', 'g5', 'g4', 'g3', 'g2', 'g1'],
        left: ['f7', 'e7', 'd7', 'c7', 'b7', 'a7'],
        right: ['h7'],

        upRight: ['h8'],
        upLeft: ['f8'],
        downRight: ['h6'],
        downLeft: ['f6', 'e5', 'd4', 'c3', 'b2', 'a1'],
    },
    h7: {
        up: ['h8'],
        down: ['h6', 'h5', 'h4', 'h3', 'h2', 'h1'],
        left: ['g7', 'f7', 'e7', 'd7', 'c7', 'b7', 'a7'],
        right: [],

        upRight: [],
        upLeft: ['g8'],
        downRight: [],
        downLeft: ['g6', 'f5', 'e4', 'd3', 'c2', 'b1'],
    },

    // Rank 6
    a6: {
        up: ['a7', 'a8'],
        down: ['a5', 'a4', 'a3', 'a2', 'a1'],
        left: [],
        right: ['b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6'],

        upRight: ['b7', 'c8'],
        upLeft: [],
        downRight: ['b5', 'c4', 'd3', 'e2', 'f1'],
        downLeft: [],
    },
    b6: {
        up: ['b7', 'b8'],
        down: ['b5', 'b4', 'b3', 'b2', 'b1'],
        left: ['a6'],
        right: ['c6', 'd6', 'e6', 'f6', 'g6', 'h6'],

        upRight: ['c7', 'd8'],
        upLeft: ['a7'],
        downRight: ['c5', 'd4', 'e3', 'f2', 'g1'],
        downLeft: ['a5'],
    },
    c6: {
        up: ['c7', 'c8'],
        down: ['c5', 'c4', 'c3', 'c2', 'c1'],
        left: ['b6', 'a6'],
        right: ['d6', 'e6', 'f6', 'g6', 'h6'],

        upRight: ['d7', 'e8'],
        upLeft: ['b7', 'a8'],
        downRight: ['d5', 'e4', 'f3', 'g2', 'h1'],
        downLeft: ['b5', 'a4'],
    },
    d6: {
        up: ['d7', 'd8'],
        down: ['d5', 'd4', 'd3', 'd2', 'd1'],
        left: ['c6', 'b6', 'a6'],
        right: ['e6', 'f6', 'g6', 'h6'],

        upRight: ['e7', 'f8'],
        upLeft: ['c7', 'b8'],
        downRight: ['e5', 'f4', 'g3', 'h2'],
        downLeft: ['c5', 'b4', 'a3'],
    },
    e6: {
        up: ['e7', 'e8'],
        down: ['e5', 'e4', 'e3', 'e2', 'e1'],
        left: ['d6', 'c6', 'b6', 'a6'],
        right: ['f6', 'g6', 'h6'],

        upRight: ['f7', 'g8'],
        upLeft: ['d7', 'c8'],
        downRight: ['f5', 'g4', 'h3'],
        downLeft: ['d5', 'c4', 'b3', 'a2'],
    },
    f6: {
        up: ['f7', 'f8'],
        down: ['f5', 'f4', 'f3', 'f2', 'f1'],
        left: ['e6', 'd6', 'c6', 'b6', 'a6'],
        right: ['g6', 'h6'],

        upRight: ['g7', 'h8'],
        upLeft: ['e7', 'd8'],
        downRight: ['g5', 'h4'],
        downLeft: ['e5', 'd4', 'c3', 'b2', 'a1'],
    },
    g6: {
        up: ['g7', 'g8'],
        down: ['g5', 'g4', 'g3', 'g2', 'g1'],
        left: ['f6', 'e6', 'd6', 'c6', 'b6', 'a6'],
        right: ['h6'],

        upRight: ['h7'],
        upLeft: ['f7', 'e8'],
        downRight: ['h5'],
        downLeft: ['f5', 'e4', 'd3', 'c2', 'b1'],
    },
    h6: {
        up: ['h7', 'h8'],
        down: ['h5', 'h4', 'h3', 'h2', 'h1'],
        left: ['g6', 'f6', 'e6', 'd6', 'c6', 'b6', 'a6'],
        right: [],

        upRight: [],
        upLeft: ['g7', 'f8'],
        downRight: [],
        downLeft: ['g5', 'f4', 'e3', 'd2', 'c1'],
    },

    // Rank 5
    a5: {
        up: ['a6', 'a7', 'a8'],
        down: ['a4', 'a3', 'a2', 'a1'],
        left: [],
        right: ['b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5'],

        upRight: ['b6', 'c7', 'd8'],
        upLeft: [],
        downRight: ['b4', 'c3', 'd2', 'e1'],
        downLeft: [],
    },
    b5: {
        up: ['b6', 'b7', 'b8'],
        down: ['b4', 'b3', 'b2', 'b1'],
        left: ['a5'],
        right: ['c5', 'd5', 'e5', 'f5', 'g5', 'h5'],

        upRight: ['c6', 'd7', 'e8'],
        upLeft: ['a6'],
        downRight: ['c4', 'd3', 'e2', 'f1'],
        downLeft: ['a4'],
    },
    c5: {
        up: ['c6', 'c7', 'c8'],
        down: ['c4', 'c3', 'c2', 'c1'],
        left: ['b5', 'a5'],
        right: ['d5', 'e5', 'f5', 'g5', 'h5'],

        upRight: ['d6', 'e7', 'f8'],
        upLeft: ['b6', 'a7'],
        downRight: ['d4', 'e3', 'f2', 'g1'],
        downLeft: ['b4', 'a3'],
    },
    d5: {
        up: ['d6', 'd7', 'd8'],
        down: ['d4', 'd3', 'd2', 'd1'],
        left: ['c5', 'b5', 'a5'],
        right: ['e5', 'f5', 'g5', 'h5'],

        upRight: ['e6', 'f7', 'g8'],
        upLeft: ['c6', 'b7', 'a8'],
        downRight: ['e4', 'f3', 'g2', 'h1'],
        downLeft: ['c4', 'b3', 'a2'],
    },
    e5: {
        up: ['e6', 'e7', 'e8'],
        down: ['e4', 'e3', 'e2', 'e1'],
        left: ['d5', 'c5', 'b5', 'a5'],
        right: ['f5', 'g5', 'h5'],

        upRight: ['f6', 'g7', 'h8'],
        upLeft: ['d6', 'c7', 'b8'],
        downRight: ['f4', 'g3', 'h2'],
        downLeft: ['d4', 'c3', 'b2', 'a1'],
    },
    f5: {
        up: ['f6', 'f7', 'f8'],
        down: ['f4', 'f3', 'f2', 'f1'],
        left: ['e5', 'd5', 'c5', 'b5', 'a5'],
        right: ['g5', 'h5'],

        upRight: ['g6', 'h7'],
        upLeft: ['e6', 'd7', 'c8'],
        downRight: ['g4', 'h3'],
        downLeft: ['e4', 'd3', 'c2', 'b1'],
    },
    g5: {
        up: ['g6', 'g7', 'g8'],
        down: ['g4', 'g3', 'g2', 'g1'],
        left: ['f5', 'e5', 'd5', 'c5', 'b5', 'a5'],
        right: ['h5'],

        upRight: ['h6'],
        upLeft: ['f6', 'e7', 'd8'],
        downRight: ['h4'],
        downLeft: ['f4', 'e3', 'd2', 'c1'],
    },
    h5: {
        up: ['h6', 'h7', 'h8'],
        down: ['h4', 'h3', 'h2', 'h1'],
        left: ['g5', 'f5', 'e5', 'd5', 'c5', 'b5', 'a5'],
        right: [],

        upRight: [],
        upLeft: ['g6', 'f7', 'e8'],
        downRight: [],
        downLeft: ['g4', 'f3', 'e2', 'd1'],
    },

    // Rank 4
    a4: {
        up: ['a5', 'a6', 'a7', 'a8'],
        down: ['a3', 'a2', 'a1'],
        left: [],
        right: ['b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4'],

        upRight: ['b5', 'c6', 'd7', 'e8'],
        upLeft: [],
        downRight: ['b3', 'c2', 'd1'],
        downLeft: [],
    },
    b4: {
        up: ['b5', 'b6', 'b7', 'b8'],
        down: ['b3', 'b2', 'b1'],
        left: ['a4'],
        right: ['c4', 'd4', 'e4', 'f4', 'g4', 'h4'],

        upRight: ['c5', 'd6', 'e7', 'f8'],
        upLeft: ['a5'],
        downRight: ['c3', 'd2', 'e1'],
        downLeft: ['a3'],
    },
    c4: {
        up: ['c5', 'c6', 'c7', 'c8'],
        down: ['c3', 'c2', 'c1'],
        left: ['b4', 'a4'],
        right: ['d4', 'e4', 'f4', 'g4', 'h4'],

        upRight: ['d5', 'e6', 'f7', 'g8'],
        upLeft: ['b5', 'a6'],
        downRight: ['d3', 'e2', 'f1'],
        downLeft: ['b3', 'a2'],
    },
    d4: {
        up: ['d5', 'd6', 'd7', 'd8'],
        down: ['d3', 'd2', 'd1'],
        left: ['c4', 'b4', 'a4'],
        right: ['e4', 'f4', 'g4', 'h4'],

        upRight: ['e5', 'f6', 'g7', 'h8'],
        upLeft: ['c5', 'b6', 'a7'],
        downRight: ['e3', 'f2', 'g1'],
        downLeft: ['c3', 'b2', 'a1'],
    },
    e4: {
        up: ['e5', 'e6', 'e7', 'e8'],
        down: ['e3', 'e2', 'e1'],
        left: ['d4', 'c4', 'b4', 'a4'],
        right: ['f4', 'g4', 'h4'],

        upRight: ['f5', 'g6', 'h7'],
        upLeft: ['d5', 'c6', 'b7', 'a8'],
        downRight: ['f3', 'g2', 'h1'],
        downLeft: ['d3', 'c2', 'b1'],
    },
    f4: {
        up: ['f5', 'f6', 'f7', 'f8'],
        down: ['f3', 'f2', 'f1'],
        left: ['e4', 'd4', 'c4', 'b4', 'a4'],
        right: ['g4', 'h4'],

        upRight: ['g5', 'h6'],
        upLeft: ['e5', 'd6', 'c7', 'b8'],
        downRight: ['g3', 'h2'],
        downLeft: ['e3', 'd2', 'c1'],
    },
    g4: {
        up: ['g5', 'g6', 'g7', 'g8'],
        down: ['g3', 'g2', 'g1'],
        left: ['f4', 'e4', 'd4', 'c4', 'b4', 'a4'],
        right: ['h4'],

        upRight: ['h5'],
        upLeft: ['f5', 'e6', 'd7', 'c8'],
        downRight: ['h3'],
        downLeft: ['f3', 'e2', 'd1'],
    },
    h4: {
        up: ['h5', 'h6', 'h7', 'h8'],
        down: ['h3', 'h2', 'h1'],
        left: ['g4', 'f4', 'e4', 'd4', 'c4', 'b4', 'a4'],
        right: [],

        upRight: [],
        upLeft: ['g5', 'f6', 'e7', 'd8'],
        downRight: [],
        downLeft: ['g3', 'f2', 'e1'],
    },

    // Rank 3
    a3: {
        up: ['a4', 'a5', 'a6', 'a7', 'a8'],
        down: ['a2', 'a1'],
        left: [],
        right: ['b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3'],

        upRight: ['b4', 'c5', 'd6', 'e7', 'f8'],
        upLeft: [],
        downRight: ['b2', 'c1'],
        downLeft: [],
    },
    b3: {
        up: ['b4', 'b5', 'b6', 'b7', 'b8'],
        down: ['b2', 'b1'],
        left: ['a3'],
        right: ['c3', 'd3', 'e3', 'f3', 'g3', 'h3'],

        upRight: ['c4', 'd5', 'e6', 'f7', 'g8'],
        upLeft: ['a4'],
        downRight: ['c2', 'd1'],
        downLeft: ['a2'],
    },
    c3: {
        up: ['c4', 'c5', 'c6', 'c7', 'c8'],
        down: ['c2', 'c1'],
        left: ['b3', 'a3'],
        right: ['d3', 'e3', 'f3', 'g3', 'h3'],

        upRight: ['d4', 'e5', 'f6', 'g7', 'h8'],
        upLeft: ['b4', 'a5'],
        downRight: ['d2', 'e1'],
        downLeft: ['b2', 'a1'],
    },
    d3: {
        up: ['d4', 'd5', 'd6', 'd7', 'd8'],
        down: ['d2', 'd1'],
        left: ['c3', 'b3', 'a3'],
        right: ['e3', 'f3', 'g3', 'h3'],

        upRight: ['e4', 'f5', 'g6', 'h7'],
        upLeft: ['c4', 'b5', 'a6'],
        downRight: ['e2', 'f1'],
        downLeft: ['c2', 'b1'],
    },
    e3: {
        up: ['e4', 'e5', 'e6', 'e7', 'e8'],
        down: ['e2', 'e1'],
        left: ['d3', 'c3', 'b3', 'a3'],
        right: ['f3', 'g3', 'h3'],

        upRight: ['f4', 'g5', 'h6'],
        upLeft: ['d4', 'c5', 'b6', 'a7'],
        downRight: ['f2', 'g1'],
        downLeft: ['d2', 'c1'],
    },
    f3: {
        up: ['f4', 'f5', 'f6', 'f7', 'f8'],
        down: ['f2', 'f1'],
        left: ['e3', 'd3', 'c3', 'b3', 'a3'],
        right: ['g3', 'h3'],

        upRight: ['g4', 'h5'],
        upLeft: ['e4', 'd5', 'c6', 'b7', 'a8'],
        downRight: ['g2', 'h1'],
        downLeft: ['e2', 'd1'],
    },
    g3: {
        up: ['g4', 'g5', 'g6', 'g7', 'g8'],
        down: ['g2', 'g1'],
        left: ['f3', 'e3', 'd3', 'c3', 'b3', 'a3'],
        right: ['h3'],

        upRight: ['h4'],
        upLeft: ['f4', 'e5', 'd6', 'c7', 'b8'],
        downRight: ['h2'],
        downLeft: ['f2', 'e1'],
    },
    h3: {
        up: ['h4', 'h5', 'h6', 'h7', 'h8'],
        down: ['h2', 'h1'],
        left: ['g3', 'f3', 'e3', 'd3', 'c3', 'b3', 'a3'],
        right: [],

        upRight: [],
        upLeft: ['g4', 'f5', 'e6', 'd7', 'c8'],
        downRight: [],
        downLeft: ['g2', 'f1'],
    },

    // Rank 2
    a2: {
        up: ['a3', 'a4', 'a5', 'a6', 'a7', 'a8'],
        down: ['a1'],
        left: [],
        right: ['b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],

        upRight: ['b3', 'c4', 'd5', 'e6', 'f7', 'g8'],
        upLeft: [],
        downRight: ['b1'],
        downLeft: [],
    },
    b2: {
        up: ['b3', 'b4', 'b5', 'b6', 'b7', 'b8'],
        down: ['b1'],
        left: ['a2'],
        right: ['c2', 'd2', 'e2', 'f2', 'g2', 'h2'],

        upRight: ['c3', 'd4', 'e5', 'f6', 'g7', 'h8'],
        upLeft: ['a3'],
        downRight: ['c1'],
        downLeft: ['a1'],
    },
    c2: {
        up: ['c3', 'c4', 'c5', 'c6', 'c7', 'c8'],
        down: ['c1'],
        left: ['b2', 'a2'],
        right: ['d2', 'e2', 'f2', 'g2', 'h2'],

        upRight: ['d3', 'e4', 'f5', 'g6', 'h7'],
        upLeft: ['b3', 'a4'],
        downRight: ['d1'],
        downLeft: ['b1'],
    },
    d2: {
        up: ['d3', 'd4', 'd5', 'd6', 'd7', 'd8'],
        down: ['d1'],
        left: ['c2', 'b2', 'a2'],
        right: ['e2', 'f2', 'g2', 'h2'],

        upRight: ['e3', 'f4', 'g5', 'h6'],
        upLeft: ['c3', 'b4', 'a5'],
        downRight: ['e1'],
        downLeft: ['c1'],
    },
    e2: {
        up: ['e3', 'e4', 'e5', 'e6', 'e7', 'e8'],
        down: ['e1'],
        left: ['d2', 'c2', 'b2', 'a2'],
        right: ['f2', 'g2', 'h2'],

        upRight: ['f3', 'g4', 'h5'],
        upLeft: ['d3', 'c4', 'b5', 'a6'],
        downRight: ['f1'],
        downLeft: ['d1'],
    },
    f2: {
        up: ['f3', 'f4', 'f5', 'f6', 'f7', 'f8'],
        down: ['f1'],
        left: ['e2', 'd2', 'c2', 'b2', 'a2'],
        right: ['g2', 'h2'],

        upRight: ['g3', 'h4'],
        upLeft: ['e3', 'd4', 'c5', 'b6', 'a7'],
        downRight: ['g1'],
        downLeft: ['e1'],
    },
    g2: {
        up: ['f3', 'g4', 'g5', 'g6', 'g7', 'g8'],
        down: ['g1'],
        left: ['f2', 'e2', 'd2', 'c2', 'b2', 'a2'],
        right: ['h2'],

        upRight: ['h3'],
        upLeft: ['f3', 'e4', 'd5', 'c6', 'b7', 'a8'],
        downRight: ['h1'],
        downLeft: ['f1'],
    },
    h2: {
        up: ['h3', 'h4', 'h5', 'h6', 'h7', 'h8'],
        down: ['h1'],
        left: ['g2', 'f2', 'e2', 'd2', 'c2', 'b2', 'a2'],
        right: [],

        upRight: [],
        upLeft: ['g3', 'f4', 'e5', 'd6', 'c7', 'b8'],
        downRight: [],
        downLeft: ['g1'],
    },

    // Rank 1
    a1: {
        up: ['a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8'],
        down: [],
        left: [],
        right: ['b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'],

        upRight: ['b2', 'c3', 'd4', 'e5', 'f6', 'g7', 'h8'],
        upLeft: [],
        downRight: [],
        downLeft: [],
    },
    b1: {
        up: ['b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8'],
        down: [],
        left: ['a1'],
        right: ['c1', 'd1', 'e1', 'f1', 'g1', 'h1'],

        upRight: ['c2', 'd3', 'e4', 'f5', 'g6', 'h7'],
        upLeft: ['a2'],
        downRight: [],
        downLeft: [],
    },
    c1: {
        up: ['c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'],
        down: [],
        left: ['b1', 'a1'],
        right: ['d1', 'e1', 'f1', 'g1', 'h1'],

        upRight: ['d2', 'e3', 'f4', 'g5', 'h6'],
        upLeft: ['b2', 'a3'],
        downRight: [],
        downLeft: [],
    },
    d1: {
        up: ['d2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8'],
        down: [],
        left: ['c1', 'b1', 'a1'],
        right: ['e1', 'f1', 'g1', 'h1'],

        upRight: ['e2', 'f3', 'g4', 'h5'],
        upLeft: ['c2', 'b3', 'a4'],
        downRight: [],
        downLeft: [],
    },
    e1: {
        up: ['e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8'],
        down: [],
        left: ['d1', 'c1', 'b1', 'a1'],
        right: ['f1', 'g1', 'h1'],

        upRight: ['f2', 'g3', 'h4'],
        upLeft: ['d2', 'c3', 'b4', 'a5'],
        downRight: [],
        downLeft: [],
    },
    f1: {
        up: ['f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8'],
        down: [],
        left: ['e1', 'd1', 'c1', 'b1', 'a1'],
        right: ['g1', 'h1'],

        upRight: ['g2', 'h3'],
        upLeft: ['e2', 'd3', 'c4', 'b5', 'a6'],
        downRight: [],
        downLeft: [],
    },
    g1: {
        up: ['g2', 'f3', 'g4', 'g5', 'g6', 'g7', 'g8'],
        down: [],
        left: ['f1', 'e1', 'd1', 'c1', 'b1', 'a1'],
        right: ['h1'],

        upRight: ['h2'],
        upLeft: ['f2', 'e3', 'd4', 'c5', 'b6', 'a7'],
        downRight: [],
        downLeft: [],
    },
    h1: {
        up: ['h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8'],
        down: [],
        left: ['g1', 'f1', 'e1', 'd1', 'c1', 'b1', 'a1'],
        right: [],

        upRight: [],
        upLeft: ['g2', 'f3', 'e4', 'd5', 'c6', 'b7', 'a8'],
        downRight: [],
        downLeft: [],
    },
}