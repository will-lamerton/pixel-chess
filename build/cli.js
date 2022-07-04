const vorpal = require("vorpal");
const chalk = vorpal().chalk;

const fs = require('fs');

const cli = vorpal().delimiter(chalk.cyan('Little Chess CLI ~ $'));

cli
    .command('convert <pgn_file_path>', 'Convert a PGN file to a set of moves usable within the Chess AI. Feed a `.pgn` file and get back a `.txt` file. WARNING – only tested a handful of times.')
    .action((args) => {
        return new Promise((resolve, reject) => {
            fs.readFile(args.pgn_file_path, 'utf8', (error, data) => {
                if (error) {
                    reject(error);
                }

                const moves = data.split(/\r?\n/);

                let convertedMoves = [];

                for (line in moves) {
                    let lineConverted = '';
                    const movesExploded = moves[line].split(' ');

                    for (move in movesExploded) {
                        if (/\d(?:\.\d)?([.]+)/.test(movesExploded[move]) === true) {
                            movesExploded[move] = movesExploded[move].slice(2)
                        }

                        if (movesExploded[move].includes('Knight')) {
                            movesExploded[move] = movesExploded[move].replace('Knight', 'N');
                        }

                        if (movesExploded[move].includes('Bishop')) {
                            movesExploded[move] = movesExploded[move].replace('Bishop', 'B');
                        }

                        if (movesExploded[move].includes('Queen')) {
                            movesExploded[move] = movesExploded[move].replace('Queen', 'Q');
                        }

                        if (movesExploded[move].includes('Rook')) {
                            movesExploded[move] = movesExploded[move].replace('Rook', 'R');
                        }

                        if (move == movesExploded.length-1) {
                            lineConverted = lineConverted.concat(`${movesExploded[move]}`);
                        }
                        else {
                            lineConverted = lineConverted.concat(`${movesExploded[move]} `);
                        }
                    }

                    try {
                        fs.appendFileSync('converted.txt', `'${lineConverted}',\n`);
                        // file written successfully
                    } catch (err) {
                        console.error(err);
                    }
                }
            });
        });
    });

cli.show();
