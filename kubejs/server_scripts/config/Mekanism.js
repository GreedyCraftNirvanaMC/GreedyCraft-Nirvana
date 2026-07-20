let pack_mode = KJSutils.Analysis("config/greedycraft/config.json", "$.packMode").toUpperCase()

let $MekanismConfig = Java.loadClass("mekanism.common.config.MekanismConfig")

/** @type {number} */
let TempMultiplierValue = global[`VARIABLE_${packMode}_MEKANISM_BASEVALUE`].TEPValue

$MekanismConfig.general.evaporationTempMultiplier.set(TempMultiplierVaule)
$MekanismConfig.general.save()
