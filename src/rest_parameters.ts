/*
 * 関数パラメータの拡張: レストパラメータ
 * (可変長引数のこと)
 */
function foo(first, second, ...rest) {
  console.log('first: ' + first);
  console.log('second: ' + second);
  console.log('rest: ' + rest);
}

foo(1, 2, 3, 4, 5);
