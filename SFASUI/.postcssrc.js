const path = require('path');

module.exports = {
    plugins: [
        'postcss-flexbugs-fixes',
        [
            'postcss-preset-env',
            {
                autoprefixer: {
                    flexbox: 'no-2009',
                },
                stage: 3,
                features: {
                    'custom-properties': false,
                },
            },
        ],
        [
            'postcss-custom-media',
            {
                importFrom: path.join(__dirname, 'src/client/styles/media.css'),
                preserve: false,
            },
        ],
    ],
};
