const { withGlobalCss } = require('next-global-css');

const withConfig = withGlobalCss();

const BASE_PATH = process.env.BASE_PATH || '';

module.exports = withConfig({
    typescript: {
        ignoreBuildErrors: true,
    },
    env: {
        BASE_PATH,
    },
});
