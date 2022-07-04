// webpack.mix.js

let mix = require('laravel-mix');

mix
    .options({
        hmrOptions: {
            host: 'localhost',
            port: 4206,
        },
        publicPath: "public",
        assetDirs: "resources"
    })
    .js('resources/js/main.js', 'public/js')
    .js('resources/js/ai/main.js', 'public/js/ai')
    .js('resources/js/chessboard.js', 'public/js')
    .postCss("resources/css/main.css", "public/css", [
        require("tailwindcss"),
    ])
;
