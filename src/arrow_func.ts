/*
 * アロー関数
 * function キーワードを使わずに関数式が書ける
 */

var add = (a, b) => {
  return a + b;
};

// 1 行だけならブロックの波括弧と return を省略可能
var add = (a, b) => a + b;

// 引数が1つなら引数の丸括弧を省略可能
var square = n => n * n;


// this の捕捉
var john = {
  name: 'John',
  helloLater: function() {
    // アロー関数を使うと
    setTimeout(() => {
      // ここでの this は john なのでそのまま使える
      console.log('Hello, I\'m ' + this.name);
    }, 1000);
  }
}
