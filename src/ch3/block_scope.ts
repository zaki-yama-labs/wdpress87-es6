/*
 * let と const によるブロックスコープ
 */

// --- let
function foo(condition: boolean) {
  let bar: number = 1;
  if (condition) {
    let bar:number = 2;
  }
  console.log(bar);
}
foo(true);

/*
// 以下、ES5 でありがちな間違い
for (var i = 0; i < 5; i++) {
  setTimeout(function() {console.log(i)}, i * 100);
}
// 正しくは
for (var i = 0; i < 5; i++) {
  (function(x) {
    // i を関数スコープにして保存する
    setTimeout(function() {console.log(x)}, x * 100);
  })(i);
}
*/
// [!] 以下は TypeScript だと正常に動かない。ループ中の let はサポートしていない模様
// `error TS4091: Loop contains block-scoped variable 'i' referenced by a function in the loop. This is only supported in ECMAScript 6 or higher.`
for (let i = 0; i < 5; i++) {
  setTimeout(function() {console.log(i)}, i * 1000);
}

// --- const
var foo2 = 1;
console.log(1);
foo2 = 100;
