const BASE_PATH = process.env.BASE_PATH || '';

module.exports = {
    typescript: {
        ignoreBuildErrors: true,
    },
    env: {
        BASE_PATH,
    },
};
