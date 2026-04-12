// 主菜单检查更新

// 设置FancyMenu变量，名称：packLocalVersion 值：global.localPackVersionName
KJSutils.FMsetVariable("packLocalVersion", global.localPackVersionName)

// 判断检查更新是否开启
if (global.checkVersionUpdate) {
    // 获取从网络中下载的版本文件内的值
    let newVersionCode = KJSutils.Analysis("config/greedycraft/version.json", "$.versionCode")
    let newVersionName = KJSutils.Analysis("config/greedycraft/version.json", "$.versionName")

    // 判断本地版本代码是否小于版本文件中的版本代码
    if (global.localPackVersionCode < newVersionCode) {
        // 设置对应FancyMenu变量
        KJSutils.FMsetVariable("packUpdate", "true")
        KJSutils.FMsetVariable("packNewVersion", newVersionName)
        KJSutils.FMsetVariable("packNewVersionNumber", newVersionCode - global.localPackVersionCode)
    } else {
        // 没有更新
        KJSutils.FMsetVariable("packUpdate", "false")
    }
} else {
    // 检查更新关闭则直接设置值为false
    KJSutils.FMsetVariable("packUpdate", "false")
}
