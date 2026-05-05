// 此脚本用于注册阶段，根据全局变量 global.MAP_STAGES_RULE
// priority: 50

let packMode = KJSutils.Analysis("config/greedycraft/config.json", "$.packMode")

let allItems = Item.getList()
// 注册基础 Astages 阶段
AStages.addRestrictionForItem("greedycraft_stage/item/init", "init", ["greedycraft:placeholder"])
AStages.addRestrictionForItem("greedycraft_stage/item/init/init_start", "init_start", ["greedycraft:placeholder"])
AStages.addRestrictionForItem("greedycraft_stage/item/init/init_creative", "init_creative", ["greedycraft:placeholder", "greedycraft:passport"])

// 判断整合包模式是否为休闲模式
if (packMode != "casual") {
    // 从全局变量中提取阶段类型与阶段对象
    Object.entries(global.MAP_STAGES_RULE).forEach(([stageType, stageMap]) => {
        // 从阶段对象中提取阶段名称与数据
        Object.entries(stageMap).forEach(([stageName, stageData]) => {
            // 按类型分别注册
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
                    // 注册阶段
                    AStages.addRestrictionForItem(`greedycraft/stage/item/${stageName}`, stageName, restrictionItemList)
                        .setHideInJEI(false)
                        .setHideTooltip(true)
                    console.log(`reg item stage, ID: greedycraft/stage/item/${stageName}. item list: ${restrictionItemList}`)
                    break;
                }
                case "ore": {
                    // 从阶段数据里提取对应关系
                    Object.entries(stageData).forEach(([ore, block]) => {
                        // 判断是不是Tag，与 item 类型同理
                        if (ore.startsWith("#")) {
                            let tag = ore.substring(1)
                            Block.getTaggedIds(tag).forEach(blockID => {
                                // 根据对应关系注册阶段
                                AStages.addRestrictionForOre(`greedycraft/stage/ore/tag/${stageName}/id/${blockID}`, stageName, Block.getBlock(blockID).defaultBlockState(), Block.getBlock(block).defaultBlockState())
                                console.log(`reg ore stage: ${blockID} remodel block: ${block}`)
                            })
                        } else {
                            // 根据对应关系注册阶段
                            AStages.addRestrictionForOre(`greedycraft/stage/ore/${stageName}/id/${ore}`, stageName, Block.getBlock(ore).defaultBlockState(), Block.getBlock(block).defaultBlockState())
                            console.log(`reg ore stage: ${ore} remodel block: ${block}`)
                        }
                    })
                    break;
                }
                case "dimension": {
                    stageData.forEach(data => {
                        // 直接注册阶段
                        AStages.addRestrictionForDimension(`greedycraft/stage/dimension/${stageName}/id/${data}`, stageName, data)
                        console.log(`reg dimension stage: ${data}`)
                    })
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
                                // 注册阶段
                                console.log(`reg mod stage: ${itemID}`)
                            }
                        })
                    })
                    AStages.addRestrictionForItem(`greedycraft/stage/mod/${stageName}`, stageName, restrictionItemList)
                        .setHideInJEI(false)
                        .setHideTooltip(true)
                    break;
                }
                case "mob": {
                    stageData.forEach(data => {
                        // 直接注册阶段
                        AStages.addRestrictionForMob(`greedycraft/stage/mob/${stageName}/id/${data}`, stageName, data)
                        console.log(`reg mob stage: ${data}`)
                    })
                    break;
                }
                default:
                    console.error(`Reg Stage ${stageName}: Does not exist Type ${stageType}`)
            }
        })
    })
}
