const path = require('path');
const { fastFormats } = require('./build/main');

module.exports = [
  {
    mode: 'development',
    devtool: 'inline-source-map',

    target: 'node',
    entry: './src/server/main.ts',
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'main.js',
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    // // async/awaitに必要
                    // targets: {
                    //   node: 'current',
                    // },
                  },
                ],
                '@babel/preset-typescript',
              ],
              plugins: ['@babel/plugin-proposal-class-properties'],
            },
          },
        },
      ]
    },
    resolve: {
      extensions: ['.ts', '.js'],
    }
  },
  {
    mode: 'development',
    devtool: 'inline-source-map',

    target: 'web',
    entry: './src/ui/index.tsx',
    output: {
      path: path.join(
        __dirname,
        'public',
        'build',
      ),
      filename: 'index.js',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  // {
                  //   targets: "chrome"
                  // },
                ],
                '@babel/preset-typescript',
                '@babel/preset-react',
              ],
              plugins: ['@babel/plugin-proposal-class-properties'],
            },
          },
        },
      ]
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
  },
];
