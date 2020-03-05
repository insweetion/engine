## 文档修订历史

| 修订日期 | 修订人  | 修订内容 |
| ------ | ------ | ------ |
| 2020,3,4| 贾佳菊 | 文档初始内容（简介，具体用法，计划修改） |
| 2020,3,4| 贾佳菊 | 全局对象|
| 2020,3,5| 贾佳菊 | 添加修改介绍|
| 2020,3,5| 贾佳菊 | ts 代码提示文件相关信息|


## 简介

使用```insweetion```分支，该分支是从 cocos 官方```v2.3.1-release```分支```checkout```出来的。

## 具体用法

[官方文档](http://docs.cocos.com/creator/manual/zh/advanced-topics/engine-customization.html)

注意要```gulp build```之后才能用，否则引入 CocosCreator 后会报错。
并且每次```gulp build```之后要重启 CocosCreator，否则修改不会生效。

## 计划修改

* 添加一个全局 object，用来放单例和全局对象；
* 添加方便在浏览器里测试 qq 小游戏的逻辑；（未修改）
* 性能实时统计；（未修改）
* main 入口，需要在所有代码前执行的逻辑。解决 qq 小游戏平台有一些监听如 qq.onShow, qq.onHide 在第一次进入游戏之前无法生效；（未修改）
* 研究如何生成 creator.d.ts 文件（ts 代码提示用）；

## 修改介绍

### 全局对象

添加了 insweetion 和 welove 全局对象，具体在 ```extensions/insweetion```和```extensions/welove``` 两个目录下。以后有添加模块的需要可以在这两个命名空间中添加，具体代码添加到这两个目录下就可以。

### qq 小游戏浏览器 debug 适配

未做

### 性能实时统计

未做

### main 入口

未做

### ts 代码提示文件 creator.d.ts 的生成

调研了 [dts-gen](https://github.com/insweetion/dts-gen) 和 tsc，没找到方法，先手写吧。见[这个库](https://github.com/insweetion/cocoscreator-util)。




