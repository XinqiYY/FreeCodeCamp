# Learn More About CSS Pseudo Selectors by Building A Balance Sheet

### `caption`
一个 `<table>` 元素只能有一个 `<caption>` 元素，且应该在表格中的任何其他内容之前。这个标题通常显示在表格的顶部，可以帮助用户更好地理解表格的内容和用途。

### `span[class~="sr-only"]`
selector will select any `span` element whose class includes `sr-only`

### `clip`
`clip` 是 CSS 属性之一，用于剪裁元素的可见区域。然而，`clip` 属性在 CSS3 中已经被弃用，不推荐使用。相反，推荐使用 `clip-path` 属性来实现剪裁效果，它提供了更强大和灵活的剪裁能力。

### `:first-of-type`
used to target the first element

### `:last-of-type`
target the last

### `:nth-of-type()`
pseudo-selector is used to target specific elements based on their order among siblings of the same type

### `:not()`
The :not() pseudo-selector is used to target all elements that do not match the selector
```span:not(.sr-only)```

### `tr[class="total"]` vs `tr.total`
- `tr[class="total"]`： 这是一个属性选择器，表示选择具有 class 属性值为 "total" 的 `<tr>` 元素。它会选择所有具有 class 属性值为 "total" 的` <tr>` 元素，无论它们的类名是否还有其他值。这意味着它会选择以下形式的元素：`<tr class="total">`。

- `tr.total`： 这是一个类选择器，表示选择具有类名为 "total" 的 `<tr>` 元素。它会选择所有具有类名为 "total" 的 `<tr>` 元素，无论它们的 class 属性中是否还有其他类名。这意味着它会选择以下形式的元素：`<tr class="total">`、`<tr class="total other">`。