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
                    stageData.forEach(data => {
                        if (data.startsWith("#")) {
                            Ingredient.of(data).itemIds.forEach(id => {
                                AStages.addRestrictionForItem(`greedycraft/stage/id/item/tag/${data}/${id}`, stageName, id)
                                    .setHideInJEI(false)
                                    .setHideTooltip(true)
                            })
                        } else {
                            AStages.addRestrictionForItem(`greedycraft/stage/id/item/${data}/${stageName}`, stageName, data)
                                .setHideInJEI(false)
                                .setHideTooltip(true)
                        }
                    })
                    break;
                }
                case "ore": {
                    Object.entries(stageData).forEach(([ore, block]) => {
                        if (ore.startsWith("#")) {
                            let tag = ore.substring(1)
                            Block.getTaggedIds(tag).forEach(blockID => {
                                AStages.addRestrictionForOre(`greedycraft/stage/id/ore/tag/${blockID}/${stageName}`, stageName, Block.getBlock(blockID).defaultBlockState(), Block.getBlock(block).defaultBlockState())
                            })
                        } else {
                            AStages.addRestrictionForOre(`greedycraft/stage/id/ore/${ore}/${stageName}`, stageName, Block.getBlock(ore).defaultBlockState(), Block.getBlock(block).defaultBlockState())
                        }
                    })
                    break;
                }
                case "dimension": {
                    stageData.forEach(data => {
                        AStages.addRestrictionForDimension(`greedycraft/stage/id/dimension/${stageName}/${data}`, stageName, data)
                    })
                    break;
                }
                case "mod": {
                    stageData.forEach(data => {
                        allItems.forEach(item => {
                            if (item.id.startsWith(`${data}:`)) {
                                AStages.addRestrictionForItem(`greedycraft/stage/id/mod/${stageName}/${item.id.toString()}`, stageName, item.id.toString())
                                    .setHideInJEI(false)
                                    .setHideTooltip(true)
                            }
                        })
                    })
                    break;
                }
                case "mob": {
                    stageData.forEach(data => {
                        AStages.addRestrictionForMob(`greedycraft/stage/id/mob/${stageName}/${data}`, stageName, data)
                    })
                    break;
                }
            }
        })
    })
}
