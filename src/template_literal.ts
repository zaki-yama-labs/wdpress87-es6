/*
 * テンプレートリテラル
 * - 変数埋め込み
 * - 複数行文字列
 * - タグ付きテンプレート
 * 文字列は ' や " でなく `(バッククォート) で囲むことに注意
 */

// 変数埋め込み
var name = 'Bob';
console.log(`Hello, ${name}.`);

// 複数行文字列
var text =
`line 1
line 2
line 3`;
console.log(text);

// タグ付きテンプレート
var name = 'Bob <script>';
el.innerHTML = html`<p>Hello, ${name}</p>`;

function html(templates, ...values) {
  // templates: ['<p>Hello, ', '${name}</p>']
  // values: ['Bob <script>']
  var result = '';
  for (let i = 0; i < templates.length; i++) {
    result += templates[i];
    if (i < values.length) {
      result += escapeHTML(values[i]);
    }
  }
  return result;
}
