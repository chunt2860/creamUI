## 基础用法

支持 5 种按钮类型，分别是 `normal` - <b>常规（默认）</b>，`secondary` - <b>次要</b>，`plain` - <b>线框</b>，`dashed` - <b>虚线</b>，`text` - <b>文本</b>，以满足多样化设计与功能需求。

<demo-block src="button/basic">

<<< @/example/button/basic.vue

</demo-block>

## 按钮形状

支持 3 种按钮形状，分别是 `square` - <b>矩形（默认）</b>，`roune` - <b>椭圆</b>，`circle` - <b>圆</b>。
<demo-block src="button/shape">

<<< @/example/button/shape.vue

</demo-block>

## 按钮状态

支持 5 种按钮状态，分别是 `gary` - <b>灰度</b>，`primary` - <b>主要（默认）</b>，`success` - <b>成功</b>，`warning` - <b>警示</b>，`danger` - <b>危险</b>，与按钮类型搭配使用，以增强视觉效果和明确给功能属性。
<demo-block src="button/status">

<<< @/example/button/status.vue

</demo-block>

## 按钮尺寸

支持 4 种按钮尺寸，分别是 `mini` - <b>迷你</b>，`small` - <b>小型</b>，`default` - <b>普通（默认）</b>，`large` - <b>大型</b>。
<demo-block src="button/size">

<<< @/example/button/size.vue

</demo-block>

## 加载中

支持通过 `loading` 属性设置按钮是否处于加载中状态，此时按钮不可点击，而且可以通过 `loading-icon` 属性自定义加载中的图标。

<demo-block src="button/loading">

<<< @/example/button/loading.vue

</demo-block>

::: info 提示
`loading-icon` 属性支持传入 `number` 类型，由 1-5 之间的数字来展示对应的加载图标，也可以传入 `Component` 组件进行自定义 Icon。
:::

## 图标按钮

通过 `icon` 属性设置按钮的图标，增强视觉吸引力，提升按钮信息传达效率，节省空间。
<demo-block src="button/icon">

<<< @/example/button/icon.vue

</demo-block>

## 按钮组
将相关按钮组合在一起，以便更有效的布局和管理操作，简化页面结构。
<demo-block src="button/group">

<<< @/example/button/group.vue

</demo-block>
