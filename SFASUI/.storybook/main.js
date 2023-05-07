const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        {
            name: 'storybook-addon-next',
            options: {
                nextConfigPath: path.resolve(__dirname, '../next.config.js')
            }
        }
    ],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-webpack5',
    },
    webpackFinal: async (config) => {
        config.resolve.modules = [...(config.resolve.modules || []), path.resolve(__dirname, '../src')];

        const imageRule = config.module.rules.find(rule => rule.test.test('.svg'))
        imageRule.exclude = /\.svg$/

        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        })

        return config;
    },
};
