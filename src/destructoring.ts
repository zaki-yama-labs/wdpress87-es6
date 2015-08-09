/*
 * 分割代入
 */
var regex = /(\d{4})(\d{2})(\d{2})/;

// 注) regex.exec() した結果の 0 番目は '20151231'
var [, year, month, day] = regex.exec('20151231');
console.log(year, month, day);

// オブジェクトの分割代入
var {name: a, age: b} = {name: 'Bob', age: 18};
console.log(a, b);

// 関数引数での分割代入
function foo({a, b}) {
  console.log(a, b);
}
foo({a: 1, b: 2});
