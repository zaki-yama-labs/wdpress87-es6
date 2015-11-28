/*
 * オブジェクトリテラルの拡張
 */
// --- プロパティ省略記法
var foo = 0, bar = 1;

// key 名と変数名が一致する場合、key を省略できる
var obj = {foo, bar};

// --- コンピューテッドプロパティ
var key = 'foo';

var obj = {
  [key]: 0,
  [key + '_bar']: 1
};

// --- メソッド定義
// function を省略できる。
// このケースでアロー関数を使うと this が counter ではなくなってしまうので注意
var counter = {
  count: 0,
  increment() {
    this.count++;
  }
}
