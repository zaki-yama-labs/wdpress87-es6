/*
 * クラスと継承
 */
class Person {
  // プロパティ
  private name: string;

  // コンストラクタ
  constructor(name: string) {
    this.name = name;
  }

  // インスタンスメソッド
  greet() {
    console.log('Hello, I\'m ' + this.name);
  }

  // スタティックメソッド
  static create(name: string) {
    return new Person(name);
  }
}

// クラスの継承
class Author extends Person {
  private book: string;

  // コンストラクタ
  // 省略しても親クラスのコンストラクタは必ず呼ばれる
  // constructor(...args) {
  //   super(...args);
  // }
  constructor(name: string, book: string) {
    super(name);
    this.book = book;
  }

  // インスタンスメソッドのオーバーライド
  greet() {
    super.greet();
    console.log('I wrote ' + this.book);
  }

  // スタティックメソッドのオーバーライド
  static create(name: string, book: string) {
    return new Author(name, book);
  }
}

var author = new Author('Gillian Flynn', 'Gone Girl');
author.greet();
