// priority: 32765

// 下载版本文件
if (global.CHECK_VERSION_UPDATE) {
    for (let link of global.UPDATE_LINK) {
        let download = KJSutils.Download( link, "config/greedycraft", "version.json")
        if (download) {
            break
        } else {
            console.warn(`Error downloading version.json from ${link}. will retry with another link`)
        }
    }
}
