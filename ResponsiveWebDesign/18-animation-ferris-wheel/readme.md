# Learn CSS Animation by Building a Ferris Wheel

### `transform-origin`
是 CSS 中用于指定 CSS 变换（如旋转、缩放、倾斜等）的基点位置的属性。
`transform-origin` 属性可以接受不同的值，其中包括像素值、百分比值、关键字（如 top、bottom、left、right、center）等。这些值指定了基点相对于元素框模型的位置。

### `@keyframes`
CSS 中用于创建动画的规则，它定义了动画的关键帧（keyframes），指定了动画在不同时间点上的状态和样式。

### `animation-name:`
需要与定义时的名字一致

### `animation-duration:`
定义一次动画的时长

### `animation-iteration-count`
定义动画重复的次数，可以是数字，或者infinite

## `animation-timing-function`
定义动画在执行过程中时间上的变化规律
通过 animation-timing-function，你可以控制动画的加速度或减速度，使得动画在时间轴上的变化更加平滑或更具有冲击性。它接受各种不同类型的时间函数值，包括线性、缓入、缓出、缓入缓出等等。

以下是一些常见的时间函数值：

- linear：线性变化，动画在整个过程中以恒定的速度执行。
- ease：默认值，缓入缓出效果，动画开始时慢，中间快，结束时慢。
- ease-in：缓入效果，动画开始时慢，后来加速。
- ease-out：缓出效果，动画开始时快，后来减速。
- ease-in-out：开始和结束时都慢，中间快。
你还可以使用 `cubic-bezier()` 函数自定义时间函数，通过指定四个控制点的坐标来定义一条贝塞尔曲线，从而实现更加精细的时间控制。

### `animation`
- `animation: cabins 10s linear infinite;`
This will set the animation-name, animation-duration, animation-timing-function, and animation-iteration-count properties in that order.

```
@keyframes wheel {}
```

.wheel {
    animation-name: wheel;
}