class Person
  # コンストラクタ & プロパティ
  constructor: (@name) ->

  # インスタンスメソッド
  greet: () ->
    console.log 'Hello, I\'m ' + this.name

  # スタティックメソッド
  @create: (name) ->
    return new Person(name)

window.Person = Person
