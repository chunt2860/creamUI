## 基础用法

输入框的基本用法
<demo-block src="input/basic">

<<< @/example/input/basic.vue

</demo-block>

## 不同状态

可以通过 `disabled` 和 `readonly` 属性来设置输入框的禁用和只读状态
<demo-block src="input/status">

<<< @/example/input/status.vue

</demo-block>

## 输入框尺寸

通过 `size` 属性设置输入框的尺寸，支持 4 种尺寸，分别是 `mini` - <b>迷你</b>，`small` - <b>小型</b>，`default` - <b>普通（默认）</b>，`large` - <b>大型</b>。
<demo-block src="input/size">

<<< @/example/input/size.vue

</demo-block>

## 字数限制

支持字数限制，通过 `maxlength` 属性设置最大字数，并且通过 `show-limit` 属性来显示字数统计。
<demo-block src="input/limit">

<<< @/example/input/limit.vue

</demo-block>

## 前置&后置元素

通过 `perfix` 和 `suffix` 属性设置输入框前置和后置元素。
<demo-block src="input/element">

<<< @/example/input/element.vue

</demo-block>

## 密码输入

支持密码输入，通过 `type` 属性设置输入框类型为 `password`。
<demo-block src="input/password">

<<< @/example/input/password.vue

</demo-block>
