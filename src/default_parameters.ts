/*
 * 関数パラメータの拡張: デフォルトパラメータ
 */
function add(a = 1, b = 2): number {
  return a + b;
}

console.log(add());  // 1 + 2 = 3
console.log(add(0));  // 0 + 2 = 2
console.log(add(0, 0));  // 0 + 0 = 0

