## 菜单路由管理

### 路由和菜单的关系
菜单主要是用于跳转到某个页面，而不是执行某项操作，所以天然和路由是一体的。因此我们将菜单管理纳入路由管理，菜单的配置信息设计为路由的元数据。

### 路由的访问控制
路由的访问控制分为两种：
* 路由拦截器：默认加载所有路由，然后拦截路由请求，通过安全元数据判断是否可以访问。安全元数据可以事先加载也可动态实时获取。
* 只加载可访问的路由：根据安全元数据只加载能够被访问的路由，不需要路由拦截判断判断是否可以访问

相比而言两种方式各有优缺点
* 路由拦截器
  * 优点
    * 路由初始化实现较简单
  * 缺点
    * 每次路由跳转都需要拦截，略显性能损耗
    * 导航菜单要从全部路由中过滤出能够访问的路由作为菜单项
    * 如果采用后端授权，登录后需要更新路由元数据
* 只加载可访问的路由
  * 优点
    * 不需要拦截器，性能无损耗
    * 导航菜单可以直接使用路由作为菜单，无需过滤
  * 缺点
    * 路由初始化较复杂，需要过滤出能够访问的路由
    * 如果采用后端授权，登录后需要更新路由元数据
推荐使用第二种方式！！！

备注：
采用第二种方式还有一个原因，希望从后端获得完整路由信息并在前端初始化路由，实验发现会报找不到.vue文件的错误，原因是路由中的"component"属性指向的.vue文件需要在编译时指定，
否则.vue文件是不会被打包的。如果运行时从后端指定，编译好地前端不包含此文件，那么就会产生上述错误。因为这个原因，我先是从前端加载所有路由，从后端获得元数据进行过滤，然后把可以访问的路由
所以折中采用过滤出可访问的路由这种方式！！！


### 路由的元数据
路由的元数据包含安全元数据和普通元数据（包含路由相关和菜单相关）

路由的元数据的配置可以在前端配置，也可以在后端动态配置
对于路由信息不需要修改或者权限分配较简单的应用，可在前端配置
对于需要动态维护路由信息并且权限分配较复杂的大型应用，我们一般将不需要动态变化的元数据配置在前端，动态变化的配置在后端。路由加载时从后端获得元数据信息合并到路由中。

#### 路由的安全元数据
我们采用RBAC模型进行安全控制，因此路由的安全元数据包含两类：
* 是否需要安全控制requireAuth
* 哪些角色可以访问roles
对于前端鉴权，我们只需要在路由元数据中配置：requireAuth和roles两项。
```json
{
  "meta": {
    "requireAuth": true,
    "roles": ["ROLE_ADMIN"]
  }
}
```
requireAuth默认值为true，因为大部分路由都是需要授权的，所以可以省略不写。
roles配置的是角色码，主要是依据我们平台的用户角色管理约定，必须以“ROLE_”开头

对于某个需要权限控制的路由，但是嵌套的子路由不需要权限控制，那么需要设置"requireAuth:false"进行细粒度的权限控制

#### 路由的基本元数据
路由的基本元数据有：
* layout: 布局，默认DefaultLayout
* isHome: 是否是首页，默认false
* isLogin: 是否是登录页，默认false
* noKeepAlive: 是否不需要保持缓存，默认true
* target: 用于外链打开的方式，默认为""
* isMenu: 是否是菜单，默认true
* menuIndex: 菜单索引用于排序，默认为1
* title: 菜单标题
* icon：菜单图标，用的是awesome font
* remixIcon：菜单图标，用的是自定义混合式图标
* affix：是否固定在tab页，不需要关闭
* badge：菜单徽章，可用于标识菜单的一些额外属性

其中适合后端维护的元数据有：
* isMenu
* menuIndex
* title
* affix
* badge