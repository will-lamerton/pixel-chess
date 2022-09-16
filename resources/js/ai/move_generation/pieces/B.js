export const BISHOP = {
    // Rank 8
    a8: {
        upRight: [],
        upLeft: [],
        downRight: ['b7', 'c6', 'd5', 'e4', 'f3', 'g2', 'h1'],
        downLeft: [],
    },
    b8: {
        upRight: [],
        upLeft: [],
        downRight: ['c7', 'd6', 'e5', 'f4', 'g3', 'h2'],
        downLeft: ['a7'],
    },
    c8: {
        upRight: [],
        upLeft: [],
        downRight: ['d7', 'e6', 'f5', 'g4', 'h3'],
        downLeft: ['b7', 'a6'],
    },
    d8: {
        upRight: [],
        upLeft: [],
        downRight: ['e7', 'f6', 'g5', 'h4'],
        downLeft: ['c7', 'b6', 'a5'],
    },
    e8: {
        upRight: [],
        upLeft: [],
        downRight: ['f7', 'g6', 'h5'],
        downLeft: ['d7', 'c6', 'b5', 'a4'],
    },
    f8: {
        upRight: [],
        upLeft: [],
        downRight: ['g7', 'h6'],
        downLeft: ['e7', 'd6', 'c5', 'b4', 'a3'],
    },
    g8: {
        upRight: [],
        upLeft: [],
        downRight: ['h7'],
        downLeft: ['f7', 'e6', 'd5', 'c4', 'b3', 'a2'],
    },
    h8: {
        upRight: [],
        upLeft: [],
        downRight: [],
        downLeft: ['g7', 'f6', 'e5', 'd4', 'c3', 'b2', 'a1'],
    },

    // Rank 7
    a7: {
        upRight: ['b8'],
        upLeft: [],
        downRight: ['b6', 'c5', 'd4', 'e3', 'f2', 'g1'],
        downLeft: [],
    },
    b7: {
        upRight: ['c8'],
        upLeft: ['a8'],
        downRight: ['c6', 'd5', 'e4', 'f3', 'g2', 'h1'],
        downLeft: ['a6'],
    },
    c7: {
        upRight: ['d8'],
        upLeft: ['b8'],
        downRight: ['d6', 'e5', 'f4', 'g3', 'h2'],
        downLeft: ['b6', 'a5'],
    },
    d7: {
        upRight: ['e8'],
        upLeft: ['c8'],
        downRight: ['e6', 'f5', 'g4', 'h3'],
        downLeft: ['c6', 'b5', 'a4'],
    },
    e7: {
        upRight: ['f8'],
        upLeft: ['d8'],
        downRight: ['f6', 'g5', 'h4'],
        downLeft: ['d6', 'c5', 'b4', 'a3'],
    },
    f7: {
        upRight: ['g8'],
        upLeft: ['e8'],
        downRight: ['g6', 'h5'],
        downLeft: ['e6', 'd5', 'c4', 'b3', 'a2'],
    },
    g7: {
        upRight: ['h8'],
        upLeft: ['f8'],
        downRight: ['h6'],
        downLeft: ['f6', 'e5', 'd4', 'c3', 'b2', 'a1'],
    },
    h7: {
        upRight: [],
        upLeft: ['g8'],
        downRight: [],
        downLeft: ['g6', 'f5', 'e4', 'd3', 'c2', 'b1'],
    },

    // Rank 6
    a6: {
        upRight: ['b7', 'c8'],
        upLeft: [],
        downRight: ['b5', 'c4', 'd3', 'e2', 'f1'],
        downLeft: [],
    },
    b6: {
        upRight: ['c7', 'd8'],
        upLeft: ['a7'],
        downRight: ['c5', 'd4', 'e3', 'f2', 'g1'],
        downLeft: ['a5'],
    },
    c6: {
        upRight: ['d7', 'e8'],
        upLeft: ['b7', 'a8'],
        downRight: ['d5', 'e4', 'f3', 'g2', 'h1'],
        downLeft: ['b5', 'a4'],
    },
    d6: {
        upRight: ['e7', 'f8'],
        upLeft: ['c7', 'b8'],
        downRight: ['e5', 'f4', 'g3', 'h2'],
        downLeft: ['c5', 'b4', 'a3'],
    },
    e6: {
        upRight: ['f7', 'g8'],
        upLeft: ['d7', 'c8'],
        downRight: ['f5', 'g4', 'h3'],
        downLeft: ['d5', 'c4', 'b3', 'a2'],
    },
    f6: {
        upRight: ['g7', 'h8'],
        upLeft: ['e7', 'd8'],
        downRight: ['g5', 'h4'],
        downLeft: ['e5', 'd4', 'c3', 'b2', 'a1'],
    },
    g6: {
        upRight: ['h7'],
        upLeft: ['f7', 'e8'],
        downRight: ['h5'],
        downLeft: ['f5', 'e4', 'd3', 'c2', 'b1'],
    },
    h6: {
        upRight: [],
        upLeft: ['g7', 'f8'],
        downRight: [],
        downLeft: ['g5', 'f4', 'e3', 'd2', 'c1'],
    },

    // Rank 5
    a5: {
        upRight: ['b6', 'c7', 'd8'],
        upLeft: [],
        downRight: ['b4', 'c3', 'd2', 'e1'],
        downLeft: [],
    },
    b5: {
        upRight: ['c6', 'd7', 'e8'],
        upLeft: ['a6'],
        downRight: ['c4', 'd3', 'e2', 'f1'],
        downLeft: ['a4'],
    },
    c5: {
        upRight: ['d6', 'e7', 'f8'],
        upLeft: ['b6', 'a7'],
        downRight: ['d4', 'e3', 'f2', 'g1'],
        downLeft: ['b4', 'a3'],
    },
    d5: {
        upRight: ['e6', 'f7', 'g8'],
        upLeft: ['c6', 'b7', 'a8'],
        downRight: ['e4', 'f3', 'g2', 'h1'],
        downLeft: ['c4', 'b3', 'a2'],
    },
    e5: {
        upRight: ['f6', 'g7', 'h8'],
        upLeft: ['d6', 'c7', 'b8'],
        downRight: ['f4', 'g3', 'h2'],
        downLeft: ['d4', 'c3', 'b2', 'a1'],
    },
    f5: {
        upRight: ['g6', 'h7'],
        upLeft: ['e6', 'd7', 'c8'],
        downRight: ['g4', 'h3'],
        downLeft: ['e4', 'd3', 'c2', 'b1'],
    },
    g5: {
        upRight: ['h6'],
        upLeft: ['f6', 'e7', 'd8'],
        downRight: ['h4'],
        downLeft: ['f4', 'e3', 'd2', 'c1'],
    },
    h5: {
        upRight: [],
        upLeft: ['g6', 'f7', 'e8'],
        downRight: [],
        downLeft: ['g4', 'f3', 'e2', 'd1'],
    },

    // Rank 4
    a4: {
        upRight: ['b5', 'c6', 'd7', 'e8'],
        upLeft: [],
        downRight: ['b3', 'c2', 'd1'],
        downLeft: [],
    },
    b4: {
        upRight: ['c5', 'd6', 'e7', 'f8'],
        upLeft: ['a5'],
        downRight: ['c3', 'd2', 'e1'],
        downLeft: ['a3'],
    },
    c4: {
        upRight: ['d5', 'e6', 'f7', 'g8'],
        upLeft: ['b5', 'a6'],
        downRight: ['d3', 'e2', 'f1'],
        downLeft: ['b3', 'a2'],
    },
    d4: {
        upRight: ['e5', 'f6', 'g7', 'h8'],
        upLeft: ['c5', 'b6', 'a7'],
        downRight: ['e3', 'f2', 'g1'],
        downLeft: ['c3', 'b2', 'a1'],
    },
    e4: {
        upRight: ['f5', 'g6', 'h7'],
        upLeft: ['d5', 'c6', 'b7', 'a8'],
        downRight: ['f3', 'g2', 'h1'],
        downLeft: ['d3', 'c2', 'b1'],
    },
    f4: {
        upRight: ['g5', 'h6'],
        upLeft: ['e5', 'd6', 'c7', 'b8'],
        downRight: ['g3', 'h2'],
        downLeft: ['e3', 'd2', 'c1'],
    },
    g4: {
        upRight: ['h5'],
        upLeft: ['f5', 'e6', 'd7', 'c8'],
        downRight: ['h3'],
        downLeft: ['f3', 'e2', 'd1'],
    },
    h4: {
        upRight: [],
        upLeft: ['g5', 'f6', 'e7', 'd8'],
        downRight: [],
        downLeft: ['g3', 'f2', 'e1'],
    },

    // Rank 3
    a3: {
        upRight: ['b4', 'c5', 'd6', 'e7', 'f8'],
        upLeft: [],
        downRight: ['b2', 'c1'],
        downLeft: [],
    },
    b3: {
        upRight: ['c4', 'd5', 'e6', 'f7', 'g8'],
        upLeft: ['a4'],
        downRight: ['c2', 'd1'],
        downLeft: ['a2'],
    },
    c3: {
        upRight: ['d4', 'e5', 'f6', 'g7', 'h8'],
        upLeft: ['b4', 'a5'],
        downRight: ['d2', 'e1'],
        downLeft: ['b2', 'a1'],
    },
    d3: {
        upRight: ['e4', 'f5', 'g6', 'h7'],
        upLeft: ['c4', 'b5', 'a6'],
        downRight: ['e2', 'f1'],
        downLeft: ['c2', 'b1'],
    },
    e3: {
        upRight: ['f4', 'g5', 'h6'],
        upLeft: ['d4', 'c5', 'b6', 'a7'],
        downRight: ['f2', 'g1'],
        downLeft: ['d2', 'c1'],
    },
    f3: {
        upRight: ['g4', 'h5'],
        upLeft: ['e4', 'd5', 'c6', 'b7', 'a8'],
        downRight: ['g2', 'h1'],
        downLeft: ['e2', 'd1'],
    },
    g3: {
        upRight: ['h4'],
        upLeft: ['f4', 'e5', 'd6', 'c7', 'b8'],
        downRight: ['h2'],
        downLeft: ['f2', 'e1'],
    },
    h3: {
        upRight: [],
        upLeft: ['g4', 'f5', 'e6', 'd7', 'c8'],
        downRight: [],
        downLeft: ['g2', 'f1'],
    },

    // Rank 2
    a2: {
        upRight: ['b3', 'c4', 'd5', 'e6', 'f7', 'g8'],
        upLeft: [],
        downRight: ['b1'],
        downLeft: [],
    },
    b2: {
        upRight: ['c3', 'd4', 'e5', 'f6', 'g7', 'h8'],
        upLeft: ['a3'],
        downRight: ['c1'],
        downLeft: ['a1'],
    },
    c2: {
        upRight: ['d3', 'e4', 'f5', 'g6', 'h7'],
        upLeft: ['b3', 'a4'],
        downRight: ['d1'],
        downLeft: ['b1'],
    },
    d2: {
        upRight: ['e3', 'f4', 'g5', 'h6'],
        upLeft: ['c3', 'b4', 'a5'],
        downRight: ['e1'],
        downLeft: ['c1'],
    },
    e2: {
        upRight: ['f3', 'g4', 'h5'],
        upLeft: ['d3', 'c4', 'b5', 'a6'],
        downRight: ['f1'],
        downLeft: ['d1'],
    },
    f2: {
        upRight: ['g3', 'h4'],
        upLeft: ['e3', 'd4', 'c5', 'b6', 'a7'],
        downRight: ['g1'],
        downLeft: ['e1'],
    },
    g2: {
        upRight: ['h3'],
        upLeft: ['f3', 'e4', 'd5', 'c6', 'b7', 'a8'],
        downRight: ['h1'],
        downLeft: ['f1'],
    },
    h2: {
        upRight: [],
        upLeft: ['g3', 'f4', 'e5', 'd6', 'c7', 'b8'],
        downRight: [],
        downLeft: ['g1'],
    },

    // Rank 1
    a1: {
        upRight: ['b2', 'c3', 'd4', 'e5', 'f6', 'g7', 'h8'],
        upLeft: [],
        downRight: [],
        downLeft: [],
    },
    b1: {
        upRight: ['c2', 'd3', 'e4', 'f5', 'g6', 'h7'],
        upLeft: ['a2'],
        downRight: [],
        downLeft: [],
    },
    c1: {
        upRight: ['d2', 'e3', 'f4', 'g5', 'h6'],
        upLeft: ['b2', 'a3'],
        downRight: [],
        downLeft: [],
    },
    d1: {
        upRight: ['e2', 'f3', 'g4', 'h5'],
        upLeft: ['c2', 'b3', 'a4'],
        downRight: [],
        downLeft: [],
    },
    e1: {
        upRight: ['f2', 'g3', 'h4'],
        upLeft: ['d2', 'c3', 'b4', 'a5'],
        downRight: [],
        downLeft: [],
    },
    f1: {
        upRight: ['g2', 'h3'],
        upLeft: ['e2', 'd3', 'c4', 'b5', 'a6'],
        downRight: [],
        downLeft: [],
    },
    g1: {
        upRight: ['h2'],
        upLeft: ['f2', 'e3', 'd4', 'c5', 'b6', 'a7'],
        downRight: [],
        downLeft: [],
    },
    h1: {
        upRight: [],
        upLeft: ['g2', 'f3', 'e4', 'd5', 'c6', 'b7', 'a8'],
        downRight: [],
        downLeft: [],
    },
}