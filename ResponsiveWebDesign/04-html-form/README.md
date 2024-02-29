# Getting Started with Create React App
![Alt Text](./registration_form.png)

## `rem`
`rem` 是 CSS（层叠样式表）中的长度单位，表示相对于根元素（html元素）字体大小的倍数。`1rem` 等于根元素的字体大小，根元素字体大小默认为16px。`rem`单位具有灵活性，用在响应式设计中。
```
body {
  font-size: 16px; /* 假设根元素字体大小为16像素 */
}

p {
  font-size: 1.5rem; /* 相当于 1.5 * 16px = 24px */
}

h1 {
  font-size: 2rem; /* 相当于 2 * 16px = 32px */
}
```

## `em`
`em` 是相对于元素自身的字体大小的单位。1em 等于元素的字体大小。如果嵌套在其他元素中，em 将相对于其最近的非继承字体大小的父元素的大小。
```
body {
  font-size: 16px;
}

p {
  font-size: 1.5em; /* 相对于 body 的字体大小，即 1.5 * 16px = 24px */
}

div {
  font-size: 1.2em; /* 相对于 p 的字体大小，即 1.2 * 24px = 28.8px */
}
```

## `name="account-type"`
用于一组单选框或者单选按钮

## `:last-of-type`
CSS 伪类（pseudo-class）之一，用于选择某个元素的最后一个特定类型的兄弟元素。
例如，如果你有一个包含多个段落`<p>` 元素的父元素，并且想选择其中每个类型为`<p>`的元素中的最后一个，你可以使用 `:last-of-type`。

## `: unset`
CSS 中的一个关键字，将该属性的值重置为其继承值，如果没有继承值，则设置为初始值。

## `attribute selector`
属性选择器是 CSS 中一种用于选择带有特定属性或属性值的元素的方法。它允许你选择文档中的元素，这些元素具有满足某些条件的属性。
