// 物品事件-修改 Tooltips 事件
// 此脚本用于给阶段物品添加阶段名 Tooltips
// priority: 50

ItemEvents.modifyTooltips(event => {
    event.add("deeperdarker:heart_of_the_deep", Component.translatable("deeperdarker.item.heart_of_the_deep.tooltip"))
})
