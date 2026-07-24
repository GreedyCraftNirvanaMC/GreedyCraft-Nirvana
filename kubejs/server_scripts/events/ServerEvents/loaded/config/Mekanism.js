// priority: 50

let pack_mode = KJSutilsCommon.getJsonStringValue("config/greedycraft/config.json", "packMode").toUpperCase()

ServerEvents.loaded(event => {
    let $MekanismConfig = Java.loadClass("mekanism.common.config.MekanismConfig")

    /** @type {number} */
    let TempMultiplierValue = global[`VARIABLE_${pack_mode}_MEKANISM_BASEVALUE`].TEPValue

    $MekanismConfig.general.evaporationTempMultiplier.set(TempMultiplierValue)
    $MekanismConfig.general.save()
})