// 物品事件-修改 Tooltips 事件
// 此脚本用于给阶段物品添加阶段名 Tooltips
// priority: 50

ItemEvents.modifyTooltips(event => {
    let allItems = Item.getList()
    let stageRuleMap = {}
    let packMode = KJSutilsCommon.getJsonStringValue("config/greedycraft/config.json", "packMode")

    // 从常量 global.MAP_STAGES_RULE 获取阶段规则
    Object.entries(global.MAP_STAGES_RULE).forEach(([stageType, stageMap]) => {
        Object.entries(stageMap).forEach(([stageName, stageData]) => {
            let packMode = KJSutilsCommon.getJsonStringValue("config/greedycraft/config.json", "packMode")

            // 判断整合包模式是否是休闲模式
            if (packMode != "casual") {
                // 根据阶段类型进行操作
                switch (stageType) {
                    // item 类型
                    case "item": {
                        stageData.forEach(data => {
                            // 判断阶段规则对象开头是不是 #
                            if (data.startsWith("#")) {
                                // 判断为 tag
                                let ids = Ingredient.of(data).itemIds
                                // 展开 tag 添加到 map 中
                                ids.forEach(id => {
                                    if (stageRuleMap[id]) {
                                        stageRuleMap[id].push(stageName)
                                    } else {
                                        stageRuleMap[id] = [stageName]
                                    }
                                })
                            } else {
                                // 直接添加到 map 中
                                if (stageRuleMap[data]) {
                                    stageRuleMap[data].push(stageName)
                                } else {
                                    stageRuleMap[data] = [stageName]
                                }
                            }
                        })
                        break;
                    }
                    // mod 类型
                    case "mod": {
                        stageData.forEach(data => {
                            // 遍历所有物品
                            allItems.forEach(item => {
                                // 如果和规则匹配则加到 map 中
                                if (item.id.startsWith(`${data}:`)) {
                                    if (stageRuleMap[item.id.toString()]) {
                                        stageRuleMap[item.id.toString()].push(stageName)
                                    } else {
                                        stageRuleMap[item.id.toString()] = [stageName]
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

    // 根据 map 添加 tooltips
    Object.entries(stageRuleMap).forEach(([item, stage]) => {
        event.add(item, Component.literal(""))
        event.add(item, Component.translatable("greedycraft.tooltip.stage.text"))
        stage.forEach(stageName => {
            event.add(item, Component.literal(stageName))
        })
    })
})
