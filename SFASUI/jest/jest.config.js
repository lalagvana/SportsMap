const path = require('path');

const projectDir = path.join(__dirname, '..');

module.exports = {
    rootDir: projectDir,
    testRegex: '.spec.(js|jsx|ts|tsx)$',
    setupFilesAfterEnv: [path.resolve(__dirname, './jest.setup.js')],
    moduleNameMapper: {
        '\\.css': path.resolve(__dirname, './styleMock.js'),
        '\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp)$': path.resolve(
            __dirname,
            './fileMock.js'
        ),
        '\\.svg': path.resolve(__dirname, './svg.js'),
    },
    testEnvironment: 'jest-environment-jsdom',
    transformIgnorePatterns: ['<projectDir>/node_modules', "jest-runner"],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    },
    moduleDirectories: ['node_modules', '<rootDir>'],
};
