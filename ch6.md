第6章 標準化されたモジュール管理システム
========================================


### CommonJS モジュール

- Node.js で採用されている
- サーバーサイド向けのモジュール管理機構

module.js

```JavaScript
exports.foo = 'foo!';
```

import.js

```JavaScript
var mod = require('./module');
console.log(mod.foo); // 'foo!'
```

#### 特徴

`require` 関数で同期的に他のモジュールを読み込むことができ、シンプルで自由度が高い。

#### 欠点

非常に自由度が高いゆえに、依存関係の解析や制御は難しい


### AMD

- Asynchronous Module Definition の略
- ブラウザ向けに作られたモジュール機構

module.js

```JavaScript
define(function() {
  return {foo: 'foo!'};
})
```

import.js

```JavaScript
require(['./module'], function(mod) {
  console.log(mod.foo);  // 'foo!'
});
```

#### 特徴

`require` は依存するモジュールがすべて読み込まれたら、非同期にコールバックでメインのコードを実行する。
そのため、ビルドを必要とせず、ブラウザ上で非同期に依存を解決できる。


#### 欠点

- コールバックを伴う記法が冗長である
- 本番環境では結局ビルドが必要になる

### ES6

#### 特徴

- 宣言的でシンプルなモジュールのインポートとエクスポート
- 読み込み方法は同期にも非同期にも対応可能

#### ES6 モジュールのインポートとエクスポート

- 名前つきエクスポート

module.js

```JavaScript
export var foo = 'foo!';
export function bar() {}
export class Baz {
  baz() {}
}
```

import.js

```JavaScript
import {foo, bar, Baz} from './module';
console.log(foo);
bar();
new Baz();

// インポートする変数名の設定
import {foo as poo} from './module';
console.log(poo);

// モジュールをまとめてインポート
import * as module from './module';
console.log(module.foo);
```

- デフォルトエクスポート

1モジュールにつき1つのメンバ (メンバは変数・関数・クラス)

```JavaScript
// foo.js
export default 'foo!';

// bar.js
export default function() {
  console.log('bar!');
}

// baz.js
export default class {
  constructor() {
    console.log('Baz!');
  }
}
```
