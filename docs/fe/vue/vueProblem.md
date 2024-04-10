
# vue router 配置 component 报错 TypeError: Cannot use 'in' operator to search for 'catch' in undefined 

### 问题描述：

在配置路由文件时，开始时component不小心写成下面的格式

![](https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/images/20240316160919.png)

打开页面控制台报错如下
![image](https://img2024.cnblogs.com/blog/1857566/202401/1857566-20240125155259068-1305464985.png)

### 解决方案：

引入组件的箭头函数忘记写返回
![](https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/images/1857566-20240125155440938-641076154.png)
或者写成一行
![](https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/images/1857566-20240125155334913-156267822.png)

> 相当低级的错误。