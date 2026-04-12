// priority: 10

// 修改、添加 ToolTips
let packMode = KJSutils.Analysis("config/greedycraft/config.json", "$.packMode")

ItemEvents.modifyTooltips(event => {
    Object.entries(global.stages).forEach(([stageType, stageMap]) => {
        Object.entries(stageMap).forEach(([stageName, stageData]) => {
            if (packMode != "casual") {
                switch (stageType) {
                    case "item": {
                        let tagItemList = []
                        let normalItemList = []
                        stageData.forEach(data => {
                            // 判断是否有 # 开头的数据，是则为Tag
                            if (data.startsWith("#")) {
                                // 从Tag中获取物品列表并合并到数组 tagItemList
                                let arr = Ingredient.of(data).itemIds.toArray()
                                for (let i = 0; i < arr.length; i++) {
                                    tagItemList.push(String(arr[i]))
                                }
                            } else {
                                // 直接添加物品到数组 normalItemList
                                normalItemList.push(data)
                            }
                        })
                        // 合并两个数组
                        let restrictionItemList = normalItemList.concat(tagItemList)
                        // 添加 tooltip
                        event.add(restrictionItemList, Component.literal(""))
                        event.add(restrictionItemList, Component.translatable("greedycraft.scoreboard.stage.text", stageName))
                        break;
                    }
                    case "mod": {
                        let restrictionItemList = []
                        stageData.forEach(data => {
                            allItems.forEach(item => {
                                // 获取该模组的所有物品
                                if (item.id.startsWith(`${data}:`)) {
                                    let itemID = item.id.toString()
                                    restrictionItemList.push(itemID)
                                }
                            })
                        })
                        event.add(restrictionItemList, Component.literal(""))
                        event.add(restrictionItemList, Component.translatable("greedycraft.scoreboard.stage.text", stageName))
                        break;
                    }
                }
            }
        })
    })
    event.add("deeperdarker:heart_of_the_deep", Component.translatable("deeperdarker.item.heart_of_the_deep.tooltip"))
})