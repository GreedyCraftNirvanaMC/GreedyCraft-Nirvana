// 此脚本用于为整合包下载版本文件用于检查更新
// priority: 32767

if (global.CHECK_VERSION_UPDATE) {
    for (let link of global.UPDATE_LINK) {
        let download = KJSutilsCommon.Download(link, "config/greedycraft/version.json")
        if (download) {
            break
        } else {
            console.warn(`Error downloading version.json from ${link}. will retry with another link`)
        }
    }
}
