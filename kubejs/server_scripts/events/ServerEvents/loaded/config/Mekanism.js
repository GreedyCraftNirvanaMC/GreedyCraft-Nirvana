// 此脚本用于根据整合包模式修改通用机械模组的部分配置
// priority: 50

let pack_mode = KJSutilsCommon.getJsonStringValue("config/greedycraft/config.json", "packMode").toUpperCase()

// 在服务器加载时触发
ServerEvents.loaded(event => {
    // 加载通用机械配置类
    let $MekanismConfig = Java.loadClass("mekanism.common.config.MekanismConfig")

    // 获取整合包模式对应的热力蒸馏塔产出系数
    /** @type {number} */
    let TempMultiplierValue = global[`VARIABLE_${pack_mode}_MEKANISM_BASEVALUE`].TEPValue

    // 设置并保存配置
    $MekanismConfig.general.evaporationTempMultiplier.set(TempMultiplierValue)
    $MekanismConfig.general.save()
})