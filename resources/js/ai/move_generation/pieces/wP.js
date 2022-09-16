export const WHITE_PAWN = {
    // Rank 7
    a7: {
        pushes: ['a8=Q', 'a8=R', 'a8=B', 'a8=N'],
        captures: ['a8=Q', 'a8=R', 'a8=B', 'a8=N'],
    },
    b7: {
        pushes: ['b8=Q', 'b8=R', 'b8=B', 'b8=N'],
        captures: ['b8=Q', 'b8=R', 'b8=B', 'b8=N'],
    },
    c7: {
        pushes: ['c8=Q', 'c8=R', 'c8=B', 'c8=N'],
        captures: ['c8=Q', 'c8=R', 'c8=B', 'c8=N'],
    },
    d7: {
        pushes: ['d8=Q', 'd8=R', 'd8=B', 'd8=N'],
        captures: ['d8=Q', 'd8=R', 'd8=B', 'd8=N'],
    },
    e7: {
        pushes: ['e8=Q', 'e8=R', 'e8=B', 'e8=N'],
        captures: ['e8=Q', 'e8=R', 'e8=B', 'e8=N'],
    },
    f7: {
        pushes: ['f8=Q', 'f8=R', 'f8=B', 'f8=N'],
        captures: ['f8=Q', 'f8=R', 'f8=B', 'f8=N'],
    },
    g7: {
        pushes: ['g8=Q', 'g8=R', 'g8=B', 'g8=N'],
        captures: ['g8=Q', 'g8=R', 'g8=B', 'g8=N'],
    },
    h7: {
        pushes: ['h8=Q', 'h8=R', 'h8=B', 'h8=N'],
        captures: ['h8=Q', 'h8=R', 'h8=B', 'h8=N'],
    },

    // Rank 6
    a6: {
        pushes: ['a7'],
        captures: ['b7'],
    },
    b6: {
        pushes: ['b7'],
        captures: ['a7', 'b7'],
    },
    c6: {
        pushes: ['c7'],
        captures: ['b7', 'd7'],
    },
    d6: {
        pushes: ['d7'],
        captures: ['c7', 'e7'],
    },
    e6: {
        pushes: ['e7'],
        captures: ['d7', 'f7'],
    },
    f6: {
        pushes: ['f7'],
        captures: ['e7', 'g7'],
    },
    g6: {
        pushes: ['g7'],
        captures: ['f7', 'h7'],
    },
    h6: {
        pushes: ['h7'],
        captures: ['g7'],
    },

    // Rank 5
    a5: {
        pushes: ['a6'],
        captures: ['b6'],
    },
    b5: {
        pushes: ['b6'],
        captures: ['a6', 'b6'],
    },
    c5: {
        pushes: ['c6'],
        captures: ['b6', 'd6'],
    },
    d5: {
        pushes: ['d6'],
        captures: ['c6', 'e6'],
    },
    e5: {
        pushes: ['e6'],
        captures: ['d6', 'f6'],
    },
    f5: {
        pushes: ['f6'],
        captures: ['e6', 'g6'],
    },
    g5: {
        pushes: ['g6'],
        captures: ['f6', 'h6'],
    },
    h5: {
        pushes: ['h6'],
        captures: ['g6'],
    },

    // Rank 4
    a4: {
        pushes: ['a5'],
        captures: ['b5'],
    },
    b4: {
        pushes: ['b5'],
        captures: ['a5', 'b5'],
    },
    c4: {
        pushes: ['c5'],
        captures: ['b5', 'd5'],
    },
    d4: {
        pushes: ['d5'],
        captures: ['c5', 'e5'],
    },
    e4: {
        pushes: ['e5'],
        captures: ['d5', 'f5'],
    },
    f4: {
        pushes: ['f5'],
        captures: ['e5', 'g5'],
    },
    g4: {
        pushes: ['g5'],
        captures: ['f5', 'h5'],
    },
    h4: {
        pushes: ['h5'],
        captures: ['g5'],
    },

    // Rank 3
    a3: {
        pushes: ['a4'],
        captures: ['b4'],
    },
    b3: {
        pushes: ['b4'],
        captures: ['a4', 'b4'],
    },
    c3: {
        pushes: ['c4'],
        captures: ['b4', 'd4'],
    },
    d3: {
        pushes: ['d4'],
        captures: ['c4', 'e4'],
    },
    e3: {
        pushes: ['e4'],
        captures: ['d4', 'f4'],
    },
    f3: {
        pushes: ['f4'],
        captures: ['e4', 'g4'],
    },
    g3: {
        pushes: ['g4'],
        captures: ['f4', 'h4'],
    },
    h3: {
        pushes: ['h4'],
        captures: ['g4'],
    },

    // Rank 2
    a2: {
        pushes: ['a3', 'a4'],
        captures: ['b3'],
    },
    b2: {
        pushes: ['b3', 'b4'],
        captures: ['a3', 'b3'],
    },
    c2: {
        pushes: ['c3', 'c4'],
        captures: ['b3', 'd3'],
    },
    d2: {
        pushes: ['d3', 'd4'],
        captures: ['c3', 'e3'],
    },
    e2: {
        pushes: ['e3', 'e4'],
        captures: ['d3', 'f3'],
    },
    f2: {
        pushes: ['f3', 'f4'],
        captures: ['e3', 'g3'],
    },
    g2: {
        pushes: ['g3', 'g4'],
        captures: ['f3', 'h3'],
    },
    h2: {
        pushes: ['h3', 'h4'],
        captures: ['g3'],
    }
}