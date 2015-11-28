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
