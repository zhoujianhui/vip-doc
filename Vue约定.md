## Vue Template约定

* 先定义元素属性，换行再定义值绑定，换行最后定义事件绑定
* 元素存在多个属性时，属性定义顺序为：能标识出该元素用意的属性 > 元素组件特有的属性 > 通用属性
* 元素能写成一行的尽量写成一行

## Vue Script约定
* import顺序：第三方依赖引用 > 二方依赖引用 > 应用内引用
* methods方法顺序：  数据处理方法 > 事件处理方法
* methods方法命名
  * 数据处理方法: <处理动作名><业务模型名>，如：loadUserList
  * 事件处理方法: handle<组件名称><事件名>，如：handleUserAddBtnClick
* methods分组：
  * 数据处理方法: 按照处理数据的类型分组，用“//////”分割换行
  * 事件处理方法: 按照事件发生的组件分组，用“//////”分割换行

### data
```javascript```
data() {
  return {
    // 视图模型v-model，支持双向绑定，用于获取界面输入
    permissionNameKeyword: "",
    // 视图数据模型，用于界面元素呈现
    routePermissions: [],
    selectedRoutePermissions: [],
    editedRoutePermission: null,
    // 视图状态模型，用于控制界面元素的状态
    loading: false,
    dialogVisible: false,
    // 辅助对象
    paginationManager: new PaginationManager(null, null, ["lastModifiedDate,desc"])
  }
```  

## Vue Style约定
* 先定义组件样式然后在其内部**依次**定义组件子元素样式
* 使用::v-deep中深度订制所使用的第三方组件的样式，如：“ElementUI”
* 样式先写在Vue文件中（SFC单文件组件方式），直到存在3个及以上的组件具有相同样式时，再提取到模块的style文件夹中