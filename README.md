# Node.js Web Frameworks

## [Express](https://github.com/expressjs/express) <img src="https://img.shields.io/github/stars/expressjs/express.svg">

- OpenJS Foundation のプロジェクト

## [Fastify](https://github.com/fastify/fastify) <img src="https://img.shields.io/github/stars/fastify/fastify.svg">

- レスポンス速い
- JSON Schema 形式でバリデーションを書ける
- モジュール指向の設計
  - 静的ファイル配信や認証など、プラグインとして提供
  - 公式がメンテする core plugin が多数ある
- OpenJS Foundation のプロジェクト

## [Koa](https://github.com/koajs/koa) <img src="https://img.shields.io/github/stars/koajs/koa.svg">

- 多分 Express よりも API が軽量・単純
- ミドルウェア関数の組み合わせでアプリケーションを作る
  - ミドルウェア関数が`async`なので`next`を`await`できる
- high level "sugar" の提供を重視
- 認証などは別パッケージによってミドルウェアとして提供される形？

## [Nest](https://github.com/nestjs/nest) <img src="https://img.shields.io/github/stars/nestjs/nest.svg">

- Express（デフォルト）や Fastify を内部で使う
- アーキテクチャを規定
  - MVC
  - DI の仕組み
  - Controller, Module

## [Sails](https://github.com/balderdashy/sails) <img src="https://img.shields.io/github/stars/balderdashy/sails.svg">

- MVC
- Express, Socket.io ベース

## [Meteor](https://github.com/meteor/meteor) <img src="https://img.shields.io/github/stars/meteor/meteor.svg">

## 選定の観点

- ビルトインで提供される機能
  - 認証、テンプレートエンジン、DB、ログ、
- テスト
- レスポンス性能
