---
title: 扫雷app开发
date: 2025-09-20 21:05:25
categories: [创业]
---

# 前言
关于为什么会开发扫雷app及为什么会选择扫雷，可以参考[这篇文章](/my-hexo-blog/2025/09/01/我的创业)。

# 流程及参考文章
## 开发
最简单的一步，正常地开发就好。广告盈利的话需要集成AdMob,可以参考[官网](https://developers.google.com/admob/flutter/quick-start?hl=zh-cn)。需要注意的是最后打包流程，如果要发布到google play store需要使用aab格式。打包需要使用到keytools来生成keystore为你的程序签名，需要记住你的keystore的用户与密码，而flutter SDK并不包含keytools，需要自己去网上下载。具体的打包aab流程可以参考[这篇文章](https://docs.flutter.dev/deployment/android)。打包时需要注意以下东西
- **pubspec.yaml里的version**: 这会影响你上传去Google Play Console的aab，Google Play Console并不允许你上传重复的版本，当你更新了某些功能要上传新版本时，一定要更改pubspec.yaml里面的version。Google Play Console看的版本是+后面的数字，比方说 `version: 1.5.0+13`，前面的1.5.0能重复，但是+13并不能重复。当你有新更新时，你可以再次使用1.5.0版本但是必须增加后面的版本`version: 1.5.0+14`
- **广告ID**: 开发时注意使用测试ID，打包发布时记得改去真实的ID。记得有2个地方的id需要变更，一个在`AndroidManifest.xml`，一个是你在apps里面初始化使用传入的`adUnitId`。

## 发布
#### 1. 注册Google Play Console账号，需要25美金
没有什么特别，去官网注册即可。注册后，可以开发无数的app上架Google Play Store，但是需要通过审查。

#### 2. 寻找测试者
需要14个人。最难的一步，我没有朋友T^T,创建了几个小号+家人才终于筹够14人。

#### 3. 测试2个礼拜
由于那时我使用的是小号，所以并没有每个账号都去下载来测试，实际下载人数应该时4，5个人而已，可能因为这个一直审查失败。感觉他会检查测试者是否安装/运行时间/反馈之类的来决定是否进行了完整的测试来决定是否批准。我那时失败了4，5次后本来打算放弃了，但是我咽不下这口气，尤其是我的25美金。所以在我放弃前我向客服发送了邮件投诉说我的app很小，并不需要如此完整的测试，而且我本人测试时候也发现了几个bug也迭代了几个测试版本。本来也没抱有期待，但是过了2个月后突然说审查成功，如果你的app很小也有正当理由可以试下这条邪修路。

#### 4. 开发者网站和隐私政策
如果你要在Google Play发布app，你需要一个开发者网站，而且还要有一个网站来描述你的app的隐私政策。这步不难，我都是AI帮我写开发者网站，隐私政策也是AI帮忙写的。部署网站方面则有很多免费的第三方静态网站部署比如Github Page，Firebase，Vercel等等。我是使用Firebase来部署。

#### 5. 发布
正常发布，没有特别需要注意的事情。

#### 6. 更新注意
上传新版本时需要注意你app的版本和广告ID，详情看回上面[开发](#开发)

## 其他注意事项
#### 添加Google Play Games成就注意事项
当你添加Google Play Games成就时，需要填你app签名使用的SHA1。但是你需要注意你有没有启用这个设置
{% asset_img google_play_sign.png %}
如果你启用了Google Play签名，你需要使用Google Play的SHA1签名，而不是你打包使用的keystore的SHA1。