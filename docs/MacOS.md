---
sidebar_position: 3
---
## mac系统下关闭Chrome跨域

参考地址：

https://segmentfault.com/a/1190000012807882

```sh
sudo vim /etc/hosts
```

```sh
open -n /Applications/Google\ Chrome.app/ --args --disable-web-security --user-data-dir=/Users/kevin/Documents__/MyChromeDevUserData
```

### 1.建立本地跨域文件夹

这个文件夹是浏览器打开时候进行设置一些基本文件，因为需要关闭浏览器的安全策略。
命令：`cd /Users/[你电脑名字]/Documents/` 然后建立个文件夹：命令是`mkdir MyChromeDevUserData`
第一步就结束了。

### 2.打开浏览器增加参数

命令：

```sh
open -n /Applications/Google\ Chrome.app/ --args --disable-web-security --user-data-dir=/Users/【电脑名字】/Documents/MyChromeDevUserData
```

这样会重启1以新参数形式打开浏览器，你再重新请求处理，就解决了跨域问题了。



## mac系统下Vim的简单操作

https://www.cnblogs.com/fanxiaocong/p/7070130.html

```sh
vim ~/.bash_profile
```

1. 键盘输入     `i`     进入编辑状态，开始并完成内容修改
2. 点击【`esc`】退出编辑状态，此时无法对内容进行修改
3. 键盘输入【`:wq!`】强制保存并退出vim，回到终端的界面
4. `:wq` 保存退出

基本上 vi/vim 共分为三种模式，分别是命令模式（Command mode），插入模式（Insert mode）和底线命令模式（Last line mode）

### 命令模式

用户刚刚启动 vi/vim，便进入了命令模式

1.   `i`  切换到插入模式，以输入字符。
2.   `x`  删除当前光标所在处的字符。
3.   `:`  切换到底线命令模式，以在最底一行输入命令。 
4.   若想要编辑文本：启动Vim，进入了命令模式，按下   `i`  ，切换到输入模式



### 输入模式

  在命令模式下按下 i 就进入了输入模式。

  在输入模式中，可以使用以下按键：

1. ​    `HOME/END`  移动光标到行首/行尾
2. ​    Page Up/Page Down     上/下翻页
3. ​    `ESC`          　　　　退出输入模式，切换到命令模式

### 底线命令模式

  在命令模式下按下 :`（英文冒号）`就进入了底线命令模式。

  底线命令模式可以输入单个或多个字符的命令，可用的命令非常多。

  在底线命令模式中，基本的命令有（已经省略了冒号）：

1.   q 　　退出程序
2.   w 　　保存文件

  按ESC键可随时退出底线命令模式。

## 非正常关闭vi编辑器时会生成一个.swp文件

解决方法：
恢复文件： `vi -r 文件名`
删除swp文件 `rm .文件名.swp`

## Beautify格式化微信小程序

插件下载地址以及文档：https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify

### wxml属性换行显示

`settings.json` 配置

```json
// 关联文件
"files.associations": {
    "*.wxss": "css",
    "*.wxs": "javascript",
    "*.wxml": "html"
  },

// 属性换行显示
"html.format.wrapAttributes": "force-aligned",

// 指定格式化工具
"[html]": {
	"editor.defaultFormatter": "HookyQR.beautify"
},

```



## MacOS访达和系统快捷键

- `Shift-Command-G`：打开“前往文件夹”窗口。 



## MacOS剪切、拷贝、粘贴和其他常用快捷键

- `Command-Tab`：在打开的 App 中切换到下一个最近使用的 App。
- `Control-Command-F`：全屏使用 App（如果 App 支持）。
- `Option-Command-Esc`：[强制退出](https://support.apple.com/HT201276) App。  
- `Shift-Command-5`：在 [macOS Mojave 或更高版本](https://support.apple.com/HT201260)中，拍摄截屏或录制屏幕。也可以使用 Shift-Command-3 或 Shift-Command-4 来拍摄截屏。[进一步了解截屏](https://support.apple.com/zh-cn/HT201361)。
- `Command-H`：隐藏最前面的 App 的窗口。要查看最前面的 App 但隐藏所有其他 App，请按 Option-Command-H。
- `Command-M`：将最前面的窗口最小化至“程序坞”。要最小化最前面的 App 的所有窗口，请按 Option-Command-M。

