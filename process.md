# 開発環境構築手順

## About

1. Node.jsのセットアップ
1. プロジェクトの作成と、初期設定
1. ビルドツールのセットアップ
  1. webpack
1. タスクランナーのセットアップ

## Node.js

https://nodejs.org/ja/

### nodebrewのインストール

```
$ brew install nodebrew
bash_profileにnode用のパスを追加する
$ vim ~/.bash_profile
    export PATH=$HOME/.nodebrew/current/bin:$PATH
```

### nodeJSのインストール

```
バージョン一覧
$ nodebrew ls-remote
フォルダがない場合
$ mkdir ~/.nodebrew
$ mkdir ~/.nodebrew/src
最新のStableバージョンのインストール
$ nodebrew install stable
currentがまだないので、currentをセットしてあげる
$ nodebrew use v'インストールしたバージョン'
インストール確認、これでバージョン名が表示されれば問題ない
$ node -v
```

参考サイト：

- http://qiita.com/shoridevel/items/e45c4eca64a4992ad37b
- https://blog.yug1224.com/archives/5693a5e0fef2539c7d5b149d

## プロジェクトの作成と、初期設定

```
$ mkdir 'プロジェクトネーム'
$ cd 作ったフォルダ
srcフォルダも作っておく
$ mkdir src
npmのパッケージ管理を行うように、package.jsonを用意する
$ npm init -y
```

こんなファイルができる

```package.json
{
  "name": "frontend-workspace",
  "version": "1.0.0",
  "description": "フロントエンドの環境構築セット",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Reyurnible/frontend-workspace.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/Reyurnible/frontend-workspace/issues"
  },
  "homepage": "https://github.com/Reyurnible/frontend-workspace#readme"
}
```

npmでパッケージをインストールする

|依存関係|オプション|省略形|意味|
|---|---|---|---|
|dependencies|--save|-S|jQueryなどのソースコードで利用するライブラリとして読み込むパッケージで使用します|
|devDependencies|--save-dev|-D|webpackなどソースコードで利用しないパッケージで使用します|
|peerDependencies|||パッケージのプラグインなどで依存バージョンを明示するときに使用します|
|optionalDependencies|--save-optional|-O|環境によって依存するライブラリが変わるもので使用します|
|bundledDependencies|||既存のパッケージに変更を加えてnpmには無いパッケージなどを明示するときに使用します|

グローバルインストールする

```
$ npm install --global typescript
```

## ビルドツールのインストール

Webpackをインストールする

```
WebPack
$ npm install --save-dev webpack
```

最低限のビルドができるところまでを用意する

es6/es2015のトランスパイル

```
Babelのインストール
$ npm install babel-loader babel-core babel-preset-es2015 --save-dev
```

`webpack.config.js`を作成する

```webpack.config.js
module.exports = {
  context: __dirname + '/src',

  entry: {
    js: "./js/app.js"
  },

  output: {
    path: __dirname + '/dist',
    filename: "./js/app.js"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
```

context:ビルドの対象となるディレクトリを定義します
entry:ビルドの起点となるファイルのパスを記述します
output:output.pathに出力先、output.filenameに出力ファイルのファイル名を記述します


参考サイト：http://qiita.com/tatsuyankmura/items/539c56837fc3a5f258b5
