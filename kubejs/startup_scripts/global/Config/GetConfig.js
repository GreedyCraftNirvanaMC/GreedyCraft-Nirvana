// 此脚本用于获取整合包基础配置
// priority: 32766

global.PACK_MODE = KJSutils.Analysis("config/greedycraft/config.json", "$.packMode")
global.CHECK_VERSION_UPDATE = ConfigFormBoolean("config/greedycraft/config.json", "$.checkVersionUpdate")
global.ANTI_CHEAT = ConfigFormBoolean("config/greedycraft/config.json", "$.antiCheat")
global.ANTI_CHEAT_MODE = KJSutils.Analysis("config/greedycraft/config.json", "$.antiCheatMode")
global.LOCAL_PACKVERSION_CODE = KJSutils.Analysis("config/greedycraft/config.json", "$.localPackVersionCode")
global.LOCAL_PACKVERSION_NAME = KJSutils.Analysis("config/greedycraft/config.json", "$.localPackVersionName")
global.UPDATE_LINK = KJSutils.AnalysisAll("config/greedycraft/config.json", "$.updateLink")

console.log(`Get GreedyCraft Config:
    packMode: ${global.PACK_MODE}
    checkVersionUpdate: ${global.CHECK_VERSION_UPDATE}
    antiCheat: ${global.ANTI_CHEAT}
    antiCheatMode: ${global.ANTI_CHEAT_MODE}
    localPackVersionCode: ${global.LOCAL_PACKVERSION_CODE}
    localPackVersionName: ${global.LOCAL_PACKVERSION_NAME}
    updateLink: ${global.UPDATE_LINK}`)
