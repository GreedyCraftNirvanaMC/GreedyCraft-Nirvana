// priority: 32767

// 函数：生成随机整数。要求提供最小值和最大值两个形参
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 函数：返回玩家周围的随机坐标，要求提供 Player 对象和半径
function randomSpawnAroundPlayer(player, radius) {
    let angle = Math.random() * Math.PI * 2
    let distance = Math.random() * radius

    let x = player.x + Math.cos(angle) * distance
    let z = player.z + Math.sin(angle) * distance
    let y = player.y

    let pos = [x, y, z]

    return pos
}
