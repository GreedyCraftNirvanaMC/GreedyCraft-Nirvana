// 物品事件-修改 Tooltips 事件
// 此脚本用于给阶段物品添加阶段名 Tooltips
// priority: 50

let packMode = KJSutils.Analysis("config/greedycraft/config.json", "$.packMode")
let allItems = Item.getList()

let map = {}

Object.entries(global.MAP_STAGES_RULE).forEach(([stageType, stageMap]) => {
    Object.entries(stageMap).forEach(([stageName, stageData]) => {
        if (packMode != "casual") {
            switch (stageType) {
                case "item": {
                    stageData.forEach(data => {
                        if (data.startsWith("#")) {
                            let ids = Ingredient.of(data).itemIds
                            ids.forEach(id => {
                                if (map[id]) {
                                    map[id].push(stageName)
                                } else {
                                    map[id] = [stageName]
                                }
                            })
                        } else {
                            if (map[data]) {
                                map[data].push(stageName)
                            } else {
                                map[data] = [stageName]
                            }
                        }
                    })
                    break;
                }
                case "mod": {
                    stageData.forEach(data => {
                        allItems.forEach(item => {
                            if (item.id.startsWith(`${data}:`)) {
                                if (map[item.id.toString()]) {
                                    map[item.id.toString()].push(stageName)
                                } else {
                                    map[item.id.toString()] = [stageName]
                                }
                            }
                        })
                    })
                }
                break;
            }
        }
    })
})

ItemEvents.modifyTooltips(event => {
    Object.entries(map).forEach(([item, stage]) => {
        event.add(item, Component.literal(""))
        event.add(item, Component.translatable("greedycraft.tooltip.stage.text"))
        stage.forEach(stageName => {
            event.add(item, Component.literal(stageName))
        })
    })
})
