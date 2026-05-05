// priority: 32767

// 函数：延迟清理服务器掉落物，需要提供 event.server 形参
function cleanServerDroppedItem(server) {
    // 延迟 20 tick
    server.scheduleInTicks(20, e => {
        server.tell(Component.translatable("greedycraft.message.scheduleinticks.item_purger.1"))
        // 延迟 200 tick
        server.scheduleInTicks(200, e => {
            server.tell(Component.translatable("greedycraft.message.scheduleinticks.item_purger.2"))
            // 延迟100 tick
            server.scheduleInTicks(100, e => {
                server.runCommandSilent("kill @e[type=item]")
                server.tell(Component.translatable("greedycraft.message.scheduleinticks.item_purger.3"))
            })
        })
    })
}
