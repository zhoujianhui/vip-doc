element destroy-on-close属性使用踩坑
https://www.jianshu.com/p/77d1ba476a6d
表单重置和清除表单的校验结果
1.能不用destroy-on-close就不用，使用v-if替代
2.一定要用，注意传入的是组件，并且注意dialog的关闭事件，会触发组件的生命周期。