# zx-comparison(作者:初志鑫<1204505056@qq.com>)

## 注意事项
```
只能用于Vue CLI项目

```

## 鸣谢
```
努力了这么久,终于成了一名合格的代码搬运工,我只是有幸站在了巨人的肩膀上,感谢自己,感谢巨人...
[Demo](https://chuzhixin.github.io/zx-comparison/)
```

## 实现功能
```
1.实现了fas图标的全部集成
2.提供了更简单的图标使用方案

```

## 商务合作与赞赏
```
邮箱  1204505056@qq.com
QQ 1204505056

如果你觉得这个项目帮助到了你，你可以赞赏一下作者:
```
![image](https://raw.githubusercontent.com/chuzhixin/donate/master/donation.png)

## 安装方法
```
cnpm i -S zx-comparison

```

## icon组件main.js全局引入
```
import Vue from 'vue'
import zxComparison from 'zx-comparison'
Vue.component('byui-comparison', zxComparison)

```

## byui-parallax-container属性

| Prop   |      Type      |  Default Value | Description
|----------	|:-------------:|------							|------			|
| id		|  String		| slider						| 唯一id		|
| width		|  String		| auto							| 图片宽度		|
| height	|  String		| auto							| 图片高度		|
| src1		|  String		| require('@/assets/img/aa.png')| 左侧图片路径	|
| src2		|  String		| require('@/assets/img/bb.png')| 右侧图片路径	|

## template完整示例
```
<template>
	<div id="app">
		<byui-comparison :id="comparison.id" :width="comparison.width" :height="comparison.height" :src1="comparison.src1" :src2="comparison.src2"></byui-comparison>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			comparison: {
				id: 'silderA',
				width: '1000px',
				height: 'auto',
				src1: require('@/assets/img/aa.png'),
				src2: require('@/assets/img/bb.png')
			}
		};
	},
	created() {},
	mounted() {},
	methods: {}
};
</script>

<style>
body {
	margin: 0;
	padding: 0;
}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>



```

 
 
 
