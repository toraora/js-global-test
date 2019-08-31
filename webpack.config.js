const path = require('path');

const config1 = {
    entry: './src/entry1.js',

    output: {
        filename: 'entry1.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
          {
            test: /\.js$/,
            type: 'javascript/esm',
            exclude: /node_modules/
          }
        ]
      }
};

const config2 = {
    entry: './src/entry2.js',

    output: {
        filename: 'entry2.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
          {
            test: /\.js$/,
            type: 'javascript/esm',
            exclude: /node_modules/
          }
        ]
      }
};

module.exports = [
    config1,
    config2,
];