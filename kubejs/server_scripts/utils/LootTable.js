// priority: 32767

let lootMapList = []

function mainLootTableAddModifier(weight, quality, min, max) {
    this.weight = weight
    this.quality = quality
    this.min = min
    this.max = max
    this.hardmode = false

    this.items = []
    this.HDitems = []

    lootMapList.push(this)
}

mainLootTableAddModifier.prototype.isHardMode = function () {
    this.hardmode = true
    return this
}

mainLootTableAddModifier.prototype.item = function (item) {
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
