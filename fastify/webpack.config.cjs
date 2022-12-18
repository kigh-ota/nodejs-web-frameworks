const path = require('path');
const TS_MODULE = {
  rules: [
    {
      test: /\.tsx?$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                // async/awaitに必要
                targets: {
                  node: 'current',
                },
              },
            ],
            '@babel/preset-typescript',
            '@babel/preset-react',
          ],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
    },
  ],
};

module.exports = [
  {
    mode: 'development',
    devtool: 'inline-source-map',

    target: 'web',
    entry: './ui/index.tsx', // 起点となるファイル
    // development は、 source map file を作成、再ビルド時間の短縮などの設定となる
    // production は、コードの圧縮やモジュールの最適化が行われる設定となる
    // 出力先設定 __dirname は node でのカレントディレクトリのパスが格納される変数
    output: {
      path: path.join(
        __dirname,
        'public',
        'build',
      ),
      filename: 'index.js',
    },
    module: TS_MODULE,
    resolve: {
      extensions: [
        '.ts',
        '.tsx',
        '.js', // node_modulesのライブラリ読み込みに必要
      ],
    },
  },
];
