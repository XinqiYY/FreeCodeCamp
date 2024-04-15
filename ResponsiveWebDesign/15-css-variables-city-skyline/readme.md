# Learn CSS Variables by Building a City 
![Alt Text](./day.png)
![Alt Text](./night.png)

### CSS variable
是一种在 CSS 中定义的可重用值的机制。它们允许你在 CSS 中创建一些类似于编程语言中的变量的东西，可以在整个样式表中引用和更新。CSS 变量以 `--` 开头，例如` --main-color: red;`，通过 `var()` 函数来引用它，例如 `color: var(--main-color);`。
- `var(--variable-name, fallback-value)`: The property will use the fallback value when there's a problem with the variable

### `linear-gradient` vs `repeating-linear-gradient`
会在指定的区域内重复创建渐变，直到填满整个容器。无论容器的大小如何，渐变都会被重复应用以填充整个区域。前者只创建一次

### Use board build a trangle
.bb2a {
  border-bottom: 5vh solid var(--building-color2);
  border-left: 5vw solid transparent;
  border-right: 5vw solid transparent;
}

### `radial-gradient`
与 linear-gradient 不同，radial-gradient 创建的是从中心点向外辐射的渐变效果
```
.sky {
  background: radial-gradient(#ffcf33, #ffcf33 20%, #ffff66 21%, #bbeeff 100%);
}
```

```
circle closest-corner at 15% 15%,
```
This will move the start of the gradient to 15% from the top and left. It will make it end at the closest-corner and it will maintain a circle shape.