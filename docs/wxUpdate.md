---
sidebar_position: 11
---



# miniProgramUpdate
小程序热更新
## 1、运行机制

前台/后台状态
小程序启动后，界面被展示给用户，此时小程序处于前台状态。

当用户点击右上角胶囊按钮关闭小程序，或者按了设备 Home 键离开微信时，小程序并没有完全终止运行，而是进入了后台状态，小程序还可以运行一小段时间。

当用户再次进入微信或再次打开小程序，小程序又会从后台进入前台。但如果用户很久没有再进入小程序，或者系统资源紧张，小程序可能被销毁，即完全终止运行。
小程序启动
小程序启动可以分为两种情况，一种是冷启动，一种是热启动。

冷启动：如果用户首次打开，或小程序销毁后被用户再次打开，此时小程序需要重新加载启动，即冷启动。

热启动：如果用户已经打开过某小程序，然后在一定时间内再次打开该小程序，此时小程序并未被销毁，只是从后台状态进入前台状态，这个过程就是热启动


## 2、小程序销毁时机

通常，只有当小程序进入后台一定时间，或者系统资源占用过高，才会被销毁。具体而言包括以下几种情形：

当小程序进入后台，可以维持一小段时间的运行状态，如果这段时间内都未进入前台，小程序会被销毁。
当小程序占用系统资源过高，可能会被系统销毁或被微信客户端主动回收。
在 iOS 上，当微信客户端在一定时间间隔内连续收到系统内存告警时，会根据一定的策略，主动销毁小程序，并提示用户 「运行内存不足，请重新打开该小程序」。具体策略会持续进行调整优化。
建议小程序在必要时使用 `wx.onMemoryWarning` 监听内存告警事件，进行必要的内存清理。

## 3、更新机制

小程序冷启动时如果发现有新版本，将会异步下载新版本的代码包，并同时用客户端本地的包进行启动，即新版本的小程序需要等下一次冷启动才会应用上。 如果需要马上应用最新版本，可以使用 `wx.getUpdateManager` API 进行处理。



## 4、更新API

`wx.getUpdateManager()`使用该接口，可以获知是否有新版本小程序、新版本是否下载好以及应用新版本的能力。注：（将下面代码放到app.js的onLaunch方法里即可）

```js
function checkUpdate(){
	// 判断当前微信版本是否支持检测更新接口,注：（基础库版本大于v1.9.90才可以使用getUpdateManager接口所以要做低版本兼容处理）
	if (wx.canIUse('getUpdateManager')) { 
		const updateManager = wx.getUpdateManager();
		// 请求完新版本信息的回调
		updateManager.onCheckForUpdate(function (res) {
			// 如有新版本则进行静默下载更新并提示
			if(res.hasUpdate){ 
				// 新版本下载成功
				updateManager.onUpdateReady(function () {
				  wx.showModal({
				    title: '更新提示',
				    content: '发现版本更新，已经准备好请重启应用~',
					showCancel:false,
				    success(res) {
				      if (res.confirm) {
				        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
				        updateManager.applyUpdate();
				      }
				    }
				  })
				});
				// 新版本下载失败
				updateManager.onUpdateFailed(function () {
				  wx.showModal({
						title: '更新提示',
						content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~',
						showCancel:false
					})
				})
			}
		});
	}else{
		// 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
		wx.showModal({
			title: '提示',
			content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。',
			success(res) {
			  if (res.confirm) {
			    // 使用此接口可直接跳转至微信客户端更新下载页面
			    wx.updateWeChatApp();
			  }
			}
		})
	}
}

```

> 温馨提示：发布的第一版不会生效，下一版才会生效的











