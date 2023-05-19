remix icon
涉及vue.config.js和main.js
main.js引用icons/index.js加载所有的svg文件
vue.config.js处理所有svg文件为精灵图片

Add or rewrite the attribute of fill of every path to fill="currentColor"
Now, that svg will take the color of your font color, so you can do something like:

```css
svg {
    color : "red";
}
```

https://gomakethings.com/currentcolor-and-svgs/
https://stackoverflow.com/questions/22252472/how-can-i-change-the-color-of-an-svg-element