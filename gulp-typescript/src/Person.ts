// クラス定義
class Person {
  // プロパティ
  private name: string;

  // コンストラクタ
  constructor(name: string) {
    this.name = name;
  }

  // インスタンスメソッド
  greet(): void {
    console.log('Hello, I\'m ' + this.name);
  }

  // スタティックメソッド
  static create(name: string): Person {
    return new Person(name);
  }
}
