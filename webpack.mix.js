// webpack.mix.js

let mix = require('laravel-mix');

mix
    .js('resources/js/main.js', 'public/js')
    .js('resources/js/ai/main.js', 'public/js/ai')
    .js('resources/js/chessboard.js', 'public/js')
    .postCss("resources/css/main.css", "public/css", [
        require("tailwindcss"),
    ])
;
