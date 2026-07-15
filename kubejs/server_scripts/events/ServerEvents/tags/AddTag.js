// 服务器事件-Tags事件
// 此脚本用于给物品添加 Tag
// priority: 50

ServerEvents.tags("item", event => {
    // 规则表
    let rules = [
        { mods: ["rechiseled", "chisel"], keyword: "planks", tag: "c:blocks/planks" },
        { mods: ["rechiseled", "chisel"], keyword: "cobblestone", tag: "c:blocks/planks" },
        { mods: ["rechiseled", "chisel"], keyword: "end_stone", tag: "c:blocks/planks" },
        { keyword: "quartz_block", tag: "c:blocks/quartz_block" }
    ]

    Item.getList().forEach(item => {
        let id = item.getId().toString()
        let namespace = item.getMod()

        rules.forEach(rule => {
            let modMatch = !rule.mods || rule.mods.includes(namespace)
            let keywordMatch = id.includes(rule.keyword)

            if (modMatch && keywordMatch) {
                event.add(rule.tag, id)
            }
        })
    })
})
