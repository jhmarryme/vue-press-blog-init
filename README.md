

# Vuepress 搭建记录

> [初始化项目地址](https://github.com/jhmarryme/vue-press-blog-init)



heroImage的地址配置第一个'/'默认指向的是 docs/.vuepress/public，你需要在此文件夹放置你的首页图片。 actionLink地址配置第一个'/'默认指向的是 docs/，若未路径文件不存在点击进去会跳转至404。=



## 自动生成导航栏和侧边栏

```
// 安装
npm i vuepress-plugin-auto-sidebar -D

// config.js中
module.exports = {
  plugins: {
    "vuepress-plugin-auto-sidebar": {
      nav: true,
    }
  }
}

项目运行后会在.vuepress目录下生成一个nav.js, 需要把该js引入到config.js, 添加到themeConfig中,

当添加了新的目录到docs后, 需要原有的nav.js删除, 运行一次后重新引入该js.
```





## 部署

gitpages 部署后可能需要等待几分钟才能访问.

[参考链接](https://blog.csdn.net/tr1912/article/details/80673610)

[参考链接2](https://blog.csdn.net/liu_1024_/article/details/102964638)


域名解析:



![1610688020859](https://raw.githubusercontent.com/jhmarryme/save-images/main/typora202101/15/132021-503640.png)
