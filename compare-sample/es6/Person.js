// クラス定義
class Person {
  // コンストラクタ
  constructor(name) {
    // プロパティ
    this.name = name;
  }

  // インスタンスメソッド
  greet() {
    console.log('Hello, I\'m ' + this.name);
  }

  // スタティックメソッド
  static create(name) {
    return new Person(name);
  }
}
