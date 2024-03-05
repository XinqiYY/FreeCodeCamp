# Learn Basic JavaScript by Building a Role Playing Game

## JavaScript 如何与 HTML 交互
`DOM` 是一个由对象组成的树形结构，它代表了 `HTML` `文档的结构。JavaScript` 可以通过访问这个树状结构中的对象来操纵和修改 `HTML。`。使用 `document` object访问，它代表整个 `HTML` 文档。

### 在 `JavaScript` 中，你可以使用不同的方法来查找和获取 `HTML` 文档中的特定元素。以下是一些常用的方法：
- `getElementById`: 通过元素的 id 属性获取元素。
```
var element = document.getElementById("myElementId");
```
- `getElementsByClassName`: 通过元素的类名获取元素集合。
```
var elements = document.getElementsByClassName("myClassName");
```
- `getElementsByTagName`: 通过元素的标签名获取元素集合。
```
var elements = document.getElementsByTagName("div");
```
- `querySelector`: 使用 CSS 选择器获取匹配的第一个元素。
```
var element = document.querySelector("#myElementId");
```
- `querySelectorAll`: 使用 CSS 选择器获取所有匹配的元素。
```
var elements = document.querySelectorAll(".myClassName");
```
- `getElementsByName`: 通过元素的 name 属性获取元素集合（通常用于表单元素）。
```
var elements = document.getElementsByName("myElementName");
```

## `innerText`
改变`HTML`元素内容
```
<p id="info">Demo content</p> 
```
```
const info = document.querySelector("#info"); 
info.innerText = "Hello World"; 
```
以上内容会将`<p>`元素内容替换成`"Hello World"`

## `shift()`
移除数组第一个元素并且返回移除的元素

## `innerHTML`
JavaScript 中用于访问和修改 HTML 元素内部 HTML 内容的属性.它允许你以字符串的形式读取或写入元素的 HTML 内容。这个属性非常强大，因为它不仅仅可以获取纯文本内容，还可以获取和设置包含 HTML 标签的内容。

## `<span>` vs `<p>`
- `<span>` 是一个内联元素，它通常用于在文本中对某一部分进行行内样式化或操作。它本身不会对文本的布局产生影响，而只是为其包含的内容提供一个容器。
- `<p>` 是一个块级元素，用于定义文本的段落。它会在文本上方和下方都产生一些空间，从而使得文本以段落的形式显示。