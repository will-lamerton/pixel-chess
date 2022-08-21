<br>
<h1 align='center'>
    Pixel Chess
</h1>

<h4 align="center">
    A simple Chess engine written in JavaScript, hooked up to a retro front-end for play. ♞
</h4>
<hr>
<br>

## Introduction
The engine behind Pixel Chess works much like any other traditional chess engine. Written 100% in JavaScript, the AI uses an algorithm called NegaMax to look a number of moves ahead and then an evaluation function to decide on the best move.

This evaluation function takes into consideration a
number of factors, including material value of pieces, positioning, mobility and more to weight a score towards a certain position to be played.

This project was coded over roughly 2-weeks so there are many improvements that could be made to the AI (see shortcomings and roadmap).

However, currently, the engine plays at around 2,000 [ELO](https://www.chess.com/terms/elo-rating-chess).

## Usage
The engine is totally standalone and can be hooked up to any project via a Web Worker. The AI simply takes a number of parameters and feeds back a string with what it thinks is the best move for a given position. The front-end UI simply then takes that move and updates the board.

In the repo under `/resources/js/ai` you can find the code for the AI. It has one dependency [Chess.js](https://github.com/jhlywa/chess.js) but other than that you're good to go.

Assuming you have a front-end UI setup to play, you can use the engine with the below code:

```js
const ai = new Worker('./js/ai/main.js', {type: 'module'}
);
```

This sets up the Web Worker which you can then post a message to in order to generate a move.

```js
ai.postMessage({
    position: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR',
    lastPlayerMove: 'e4',
    numberOfMoves: 1,
    allocatedSearchTime: 2000
    searchDepth: 2
});
```

The above code posts a message to the engine specifying:

- `position` – The current position as a FEN string.
- `lastPlayerMove` – The last move the player made.
- `numberOfMoves` – The number of moves we're into the game.
- `allocatedSearchTime` – How long the engine has to find the best move.
- `searchDepth` – How deep the engine should search in the game tree.

From here, the engine will post a message back with what it thinks is the best move which can be received via the below code.

```js
ai.onmessage = (e) => {
    const bestMove = e.data;
}
```

Within this function you can do what you will with move generated.

You can find an example of how this functionality is implemented via the main game JavaScript file which can be viewed in `/resources/js/main.js`.

<br>

## Playing Via Pixel Chess
As mentioned, this repo hooks the engine up to a retro front-end inspired by the [Kilobyte Gambit](https://vole.wtf/kilobytes-gambit/). You can play Chess against it by heading over the [website](https://chess.barr.media).

It's pretty simplistic at the moment but you can control the AI's strength by clicking the "AI" button whilst playing. The default is to search 2 ply and return an a move within 2 seconds to keep things speedy for most users.

You can of course change this and make the engine stronger if you have a more powerful computer or don't mind the AI taking longer to return a move.

There's plans for the front-end which you can read in the Roadmap section.

## Shortcomings
This project was written in 2-weeks and approached having never written a Chess engine before so, there's no illusion to the fact that it can certainly be improved in virtually all areas of the game.

### Speed
The biggest weakness at the moment is that the engine is particularly slow. 2 ply is the deepest the engine can search whilst keeping gameplay fast for the user. More optimisations could take place such as better move ordering & iterative deepening but the biggest issue is how legal moves are generated.

Although the Chess.js framework is fantastic and really sped up the development of this project, it takes roughly `1ms` to generate all the legal moves for a given position. This, although sounding fast is too slow for when the engine is searching at larger depths with hundreds of thousands of positions, each one needing legal moves generated.

Having such a low cap on depth obviously limits the AI, mostly in the endgame where it simply cannot see far enough ahead to checkmate opponents even in winning positions for the engine often ending the game in a draw.

To overcome this, custom move generation and board representation should be written so that the engine doesn't have to rely on Chess.js to do this. It's not that Chess.js is a bad framework, it's just that the AI has been written around what is possible with Chess.js which is often at the cost of performance.

### Other General Functions
The AI currently implements NegaMax with alpha/beta pruning and move ordering to power search in conjunction with the Evaluation function. This has been a great start however, basic general function improvement could come in the form of:

- Adding transposition tables.
- Adding iterative deepening.
- More advanced move ordering to make alpha/beta pruning more effective.
- More advanced piece tables taking game stage into consideration.
- More advanced quiescence search.

### Openings
The engine currently uses an opening book to bring variance and strong play in the opening moves. This book could of course be extended to add more openings, transpositions and side lines.

### Middlegame
The middlegame is where the engine plays at its strongest. Nevertheless, improvements here could of course be made. Things like a better understanding of King safety and Pawn structure could be added for better play.

### Endgame
This is where the AI is weakest. Mostly down to search depth ability which is spoken about above.

Improving this would certainly help the endgame, but things like changing what the Evaluation function believes is a good move in the endgame would also help. For example, adding a postive weight to the evaluation if a move pushes the enemy King to the edge of the board as well as encouraging a more active King would help the engine win endgames.

### Modern Techniques
The engine is very classical using brute force methods to play. In the future coupling the classic methods of Chess engines with some of kind of neural network to learn and play better could have awesome strength improvement.

### UCI Compatible
As the title suggests, making the engine UCI compatible would of course open the door for possible advancements.

<br>

## Roadmap
Having listed out the shortcomings of the engine, there's obviously a lot of challenges to overcome to make this a stronger Chess engine. Having said that, we're keen for the challenge.

Being an open source project, we'll have to work on this as when we can however, we'd love to implement solutions to all the above problems overtime as well as a plethora of other ideas to not only improve the engine, but the front-end website you can play it and it's accessiblity to others wanting to use it in their projects.

A more detailed roadmap can be found [here](https://faceted-period-56f.notion.site/84d80b6c1c7c4d7e9137eadef5f82c9c?v=b18451b52ea543d6b84b329430e031ac)

## Contributing
We would love contributors – please feel free to work on Pixel Chess, create discussions and submit pull requests :)

## Credits
[Chess.js](https://github.com/jhlywa/chess.js) – amazing framework for legal move generation, board positioning and game state detection.

[Chessboard.js](https://chessboardjs.com/index.html) – powers the front-end chessboard.
