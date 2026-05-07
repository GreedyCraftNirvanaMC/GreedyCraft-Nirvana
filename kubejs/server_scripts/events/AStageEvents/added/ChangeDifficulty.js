// 阶段事件-添加事件
// 此脚本用于玩家解锁阶段自动设置难度，根据全局变量 global.MAP_STAGE_DIFFICULTY 或 global.MAP_STAGE_DIFFICULTY_EXPERT
// priority: 50

let packMode = KJSutils.Analysis("config/greedycraft/config.json", "$.packMode")

let DIFFICULTY_MAP = global.MAP_STAGE_DIFFICULTY

if (packMode == "expert") {
    DIFFICULTY_MAP = global.MAP_STAGE_DIFFICULTY_EXPERT
}

AStageEvents.added(event => {
    let playerName = event.player.username
    let server = event.server

    if (DIFFICULTY_MAP[event.stage]) {
        server.runCommandSilent(`ps_difficulty set ${playerName} ${DIFFICULTY_MAP[event.stage]}`)
    }
})
