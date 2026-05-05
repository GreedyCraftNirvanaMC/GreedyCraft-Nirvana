// 服务器事件-Tags事件
// 此脚本用于给物品删除 Tag，应等待 Tag 添加完毕后再删除，故在 AddTag 脚本后加载
// priority: 40

ServerEvents.tags("item", event => {
    event.removeAll("twilightforest:portal/activator").add("greedycraft:twilight_gem")
    event.remove("c:dusts/iron", "enderio:powdered_iron")
    event.remove("c:dusts/gold", "enderio:powdered_gold")
    event.remove("c:dusts/quartz", "enderio:powdered_quartz")
})
