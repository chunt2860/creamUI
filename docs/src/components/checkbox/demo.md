## 基础用法

复选框的基本用法。
<demo-block src="checkbox/basic">

<<< @/example/checkbox/basic.vue

</demo-block>

## 复选框组

通过 `checkbox-group` 实现复选框组，通过数组收集勾选选项，支持两种布局方式，分别是 <b>`vertical`</b> 和 <b>`horizontal`（默认）</b>。
<demo-block src="checkbox/group">

<<< @/example/checkbox/group.vue

</demo-block>

## 限制可勾选数量

在 `checkbox-group` 中，可以设置 `max` 以限制勾选数量
<demo-block src="checkbox/limit">

<<< @/example/checkbox/limit.vue

</demo-block>

## 不确定状态

在全选的场景下，你可以通过 `indeterminate` 属性设置复选框的不确定状态。
<demo-block src="checkbox/select-all">

<<< @/example/checkbox/select-all.vue

</demo-block>
