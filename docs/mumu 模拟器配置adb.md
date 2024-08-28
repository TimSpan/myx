---
sidebar_position: 5
---
# mumu模拟器以及RN环境

这篇文章在开启 TUN 模式后 相当于作废了

## 配置adb___windows

https://mumu.163.com/help/20230214/35047_1073151.html

把`adb.exe`所在的目录`D:\MuMuPlayer-12.0\shell`添加到环境变量中

![image-20240823102110108](./img/Rn_mumu/image-20240823102110108.png)

然后就可以这个目录下 使用 `adb` 命令了，切记要重新启动终端

![image-20240823102441746](./img/Rn_mumu/image-20240823102441746.png)

## RN环境配置

## 必须严格按照RN官方文档 配置环境！

### android studio 配置代理

镜像：https://mirrors.cloud.tencent.com/AndroidSDK/

搭建开发环境需要严格按照开发文档的来！
然后启动模拟器的时候  windows平台 一定会弹出 `abd` 访问窗口

正常的 加载情况是这样：

第一次运行时需要**下载大量编译依赖**，耗时可能数十分钟。此过程`严重依赖稳定的代理软件`

![image-20240823171117563](./img/Rn_mumu/image-20240823171117563.png)

## RN环境配置之 Android SDK

检查环境是否有缺失

```shell
npx react-native doctor
```

![image-20240826141720085](./img/Rn_mumu/image-20240826141720085.png)

## 运行RN项目报错：Android SDK提示Versions found: N/A

参考文章：

https://blog.csdn.net/G1ANTS/article/details/125485177

## 重新安装依赖可以解决很多问题

## 解决依赖下载慢

`Downloading https://services.gradle.org/distributions/gradle-5.5-all.zip`

可以手动下载 然后 放到 电脑这个目录中 `C:\Users\cat20\.gradle\wrapper\dists`

搜索关键字：`distributionUrl`  一般在这个目录下 `android/gradle/wrapper/gradle-wrapper.properties` 

## 老版本文档比如0.62

https://reactnative-archive-august-2023.netlify.app/docs/0.62/getting-started

## 解决Gradle 下载慢！

代理 需要使用TUN Mode 模式

系统代理和 TUN模式 不能同时开启，会起冲突

![image-20240828115010755](./img/Rn_mumu/image-20240828115010755.png)

后面的依赖需要用系统代理

![image-20240828121642057](./img/Rn_mumu/image-20240828121642057.png)





























