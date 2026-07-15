// priority: 32767

/** @type {mainLootTableAddModifier[]} */
let lootMapList = []

/**
 * 添加主战利品表修改器
 * 
 * @constructor
 * @param {number} weight - 权重
 * @param {number} quality - 质量
 * @param {number} min - 最小数量
 * @param {number} max - 最大数量
 */
function mainLootTableAddModifier(weight, quality, min, max) {
    this.weight = weight
    this.quality = quality
    this.min = min
    this.max = max
    this.hardmode = false

    /** @type {Array<string>} */
    this.items = []

    /** @type {Array<string>} */
    this.HDitems = []

    lootMapList.push(this)
}

/**
 * 困难模式才掉落
 * 
 * @returns {mainLootTableAddModifier}
 */
mainLootTableAddModifier.prototype.isHardMode = function() {
    this.hardmode = true
    return this
}

/**
 * 添加战利品
 * 
 * @param {string} item - 物品 ID
 * @returns {mainLootTableAddModifier}
 */
mainLootTableAddModifier.prototype.item = function(item) {
    if (!(this.hardmode)) {
        this.items.push(item)
    } else {
        this.HDitems.push(item)
    }
    return this
}

LootJS.lootTables(event => {
    global.VARIABLE_MAIN_LOOTTABLE_LIST.forEach(mainloots => {
        lootMapList.forEach(lootmap => {
            if (lootmap.hardmode) {
                event.getLootTable(mainloots).createPool(pool => {
                    pool.name("hardmode")
                    pool.when(conditions => {
                        conditions.matchPlayerCustom(matchPlayer => {
                            return matchPlayer.isAdvancementDone("greedycraft:stages/hardmode")
                        })
                    })
                    lootmap.HDitems.forEach(lootitem => {
                        pool.addEntry(LootEntry.of(lootitem).withWeight(lootmap.weight).withQuality(lootmap.quality).setCount([lootmap.min, lootmap.max]))
                    })
                })
            } else {
                let pool = event.getLootTable(mainloots).firstPool()
                lootmap.items.forEach(lootitem => {
                    pool.addEntry(LootEntry.of(lootitem).withWeight(lootmap.weight).withQuality(lootmap.quality).setCount([lootmap.min, lootmap.max]))
                })
            }
        })
    })
})
