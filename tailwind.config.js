module.exports = {
    content: [
        "./public/*.html",
    ],
    theme: {
        extend: {
            colors: {
                'phiox': 'var(--phiox)',
                'platinum': 'var(--platinum)',
                'fluorescent-blue': 'var(--fluorescent-blue)',
            },
            width: {
                '104': '32rem'
            }
        },
    },
    plugins: [],
}
