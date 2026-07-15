// priority: 32767

/**
 * 生成随机整数
 * 
 * @param {number} min - 最小值
 * @param {number} max - 最大值
 * @returns {number} 随机整数
 */
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 返回玩家周围的随机坐标
 * 
 * @param {import("@package/net/minecraft/server/level").$ServerPlayer} player - 玩家对象
 * @param {number} radius - 半径
 * @returns {Array<number>} 随机坐标 [x, y, z]
 */
function randomSpawnAroundPlayer(player, radius) {
    let angle = Math.random() * Math.PI * 2
    let distance = Math.random() * radius

    let x = player.x + Math.cos(angle) * distance
    let z = player.z + Math.sin(angle) * distance
    let y = player.y

    let pos = [x, y, z]

    return pos
}
