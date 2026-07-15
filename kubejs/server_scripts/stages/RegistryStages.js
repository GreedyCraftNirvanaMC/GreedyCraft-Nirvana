// 此脚本用于注册阶段，根据全局变量 global.MAP_STAGES_RULE
// priority: 50

let packMode = KJSutils.Analysis("config/greedycraft/config.json", "$.packMode")

let allItems = Item.getList()
// 注册基础 Astages 阶段
AStages.addRestrictionForItem("greedycraft_stage/item/init", "init", ["greedycraft:placeholder"]).setHideInJEI(false).setHideTooltip(true)

AStages.addRestrictionForItem("greedycraft_stage/item/init/init_start", "init_start", ["greedycraft:placeholder"]).setHideInJEI(false).setHideTooltip(true)

AStages.addRestrictionForItem("greedycraft_stage/item/init/init_creative", "init_creative", ["greedycraft:placeholder", "greedycraft:passport"]).setHideInJEI(false).setHideTooltip(true)

AStages.addRestrictionForItem("greedycraft_stage/item/init/expert", "expert", [
    "greedycraft:adrenaline",
    "greedycraft:fake_philosopher_stone",
    "greedycraft:goodie_bag"
]).setHideInJEI(false).setHideTooltip(true)

AStages.addRestrictionForItem("greedycraft_stage/item/init/end", "end", ["greedycraft:placeholder"]).setHideInJEI(false).setHideTooltip(true)

// 判断整合包模式是否为休闲模式
if (packMode != "casual") {
    // 从全局变量中提取阶段类型与阶段对象
    Object.entries(global.MAP_STAGES_RULE).forEach(([stageType, stageMap]) => {
        // 从阶段对象中提取阶段名称与数据
        Object.entries(stageMap).forEach(([stageName, stageData]) => {
            // 按类型分别注册
            switch (stageType) {
                // item 类型
                case "item": {
                    // 遍历阶段对象数据
                    stageData.forEach(data => {
                        // 判断对象开头是否是 #
                        if (data.startsWith("#")) {
                            // 是则判断为 tag 并展开
                            Ingredient.of(data).itemIds.forEach(id => {
                                // 添加阶段
                                AStages.addRestrictionForItem(`greedycraft/stage/id/item/tag/${data}/${id}`, stageName, id)
                                    .setHideInJEI(false)
                                    .setHideTooltip(true)
                            })
                        } else {
                            // 不是 tag 则直接添加阶段
                            AStages.addRestrictionForItem(`greedycraft/stage/id/item/${data}/${stageName}`, stageName, data)
                                .setHideInJEI(false)
                                .setHideTooltip(true)
                        }
                    })
                    break;
                }
                // ore 类型
                case "ore": {
                    // 遍历阶段对象数据
                    Object.entries(stageData).forEach(([ore, block]) => {
                        // 判断对象开头是否是 #
                        if (ore.startsWith("#")) {
                            // 截断字符
                            let tag = ore.substring(1)
                            // 展开 tag
                            Block.getTaggedIds(tag).forEach(blockID => {
                                // 添加阶段
                                AStages.addRestrictionForOre(`greedycraft/stage/id/ore/tag/${blockID}/${stageName}`, stageName, Block.getBlock(blockID).defaultBlockState(), Block.getBlock(block).defaultBlockState())
                            })
                        } else {
                            // 直接添加阶段
                            AStages.addRestrictionForOre(`greedycraft/stage/id/ore/${ore}/${stageName}`, stageName, Block.getBlock(ore).defaultBlockState(), Block.getBlock(block).defaultBlockState())
                        }
                    })
                    break;
                }
                // dimension 类型
                case "dimension": {
                    // 遍历阶段对象数据
                    stageData.forEach(data => {
                        // 添加阶段
                        AStages.addRestrictionForDimension(`greedycraft/stage/id/dimension/${stageName}/${data}`, stageName, data)
                    })
                    break;
                }
                // mod 类型
                case "mod": {
                    // 遍历阶段对象数据
                    stageData.forEach(data => {
                        // 遍历所有物品
                        allItems.forEach(item => {
                            // 判断是否符合规则
                            if (item.id.startsWith(`${data}:`)) {
                                // 添加阶段
                                AStages.addRestrictionForItem(`greedycraft/stage/id/mod/${stageName}/${item.id.toString()}`, stageName, item.id.toString())
                                    .setHideInJEI(false)
                                    .setHideTooltip(true)
                            }
                        })
                    })
                    break;
                }
                // mob 类型
                case "mob": {
                    // 遍历阶段对象数据
                    stageData.forEach(data => {
                        // 添加阶段
                        AStages.addRestrictionForMob(`greedycraft/stage/id/mob/${stageName}/${data}`, stageName, data)
                    })
                    break;
                }
            }
        })
    })
}
