// 物品事件-修改 Tooltips 事件
// 此脚本用于给阶段物品添加阶段名 Tooltips
// priority: 50

let packMode = KJSutils.Analysis("config/greedycraft/config.json", "$.packMode")

let map = {}

ItemEvents.modifyTooltips(event => {
    Object.entries(global.MAP_STAGES_RULE).forEach(([stageType, stageMap]) => {
        Object.entries(stageMap).forEach(([stageName, stageData]) => {
            if (packMode != "casual") {
                switch (stageType) {
                    case "item": {
                    }
                    case "mod": {
                    }
                }
            }
        })
    })
})
