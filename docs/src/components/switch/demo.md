## 基础用法

开关的基础用法。
<demo-block src="switch/basic">

<<< @/example/switch/basic.vue

</demo-block>

## 开关尺寸

提供两种开关尺寸，分别是 `small` - <b>小型（默认）</b>，`mini` - <b>迷你</b>
<demo-block src="switch/size">

<<< @/example/switch/size.vue

</demo-block>

## 自定义文案

通过 `check-text` 和 `uncheck-text` 设置对应状态下的文案。
<demo-block src="switch/text">

<<< @/example/switch/text.vue

</demo-block>

## 异步操作

通过 `on-before-ok` 属性拦截开关状态，返回值用于判断是否允许切换。
<demo-block src="switch/async">

<<< @/example/switch/async.vue

</demo-block>
