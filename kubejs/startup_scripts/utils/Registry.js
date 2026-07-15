// priority: 32767

/** @type {registryMetals[]} */
let materialList = []

/** @type {registryItem[]} */
let itemList = []

global.materialList = materialList
global.itemList = itemList

/**
 * 注册材料
 * 
 * @constructor
 * @param {string} name
 * @param {number} color
 */
function registryMetals(name, color) {
	this.name = name
	this.color = color

	/** @type {Array<string>} */
	this.types = []
	this.beaconPayment = false

	materialList.push(this)
}

/**
 * 粉
 * 
 * @returns {registryMetals}
 */
registryMetals.prototype.dust = function() {
	this.types.push("dust")
	return this
}

/**
 * 杆
 * 
 * @returns {registryMetals}
 */
registryMetals.prototype.rod = function() {
	this.types.push("rod")
	return this
}

/**
 * 齿轮
 * 
 * @returns {registryMetals}
 */
registryMetals.prototype.gear = function() {
	this.types.push("gear")
	return this
}

/**
 * 污浊粉
 * 
 * @returns {registryMetals}
 */
registryMetals.prototype.dirtyDust = function() {
	this.types.push("dirtydust")
	return this
}

/**
 * 碎块
 * 
 * @returns {registryMetals}
 */
registryMetals.prototype.clump = function() {
	this.types.push("clump")
	return this
}

/**
 * 碎片
 * 
 * @returns {registryMetals}
 */
registryMetals.prototype.shard = function() {
	this.types.push("shard")
	return this
}

/**
 * 晶体
 * 
 * @returns {registryMetals}
 */
registryMetals.prototype.crystal = function() {
	this.types.push("crystal")
	return this
}

/**
 * 污浊浆液
 * 
 * @returns {registryMetals}
 */
registryMetals.prototype.dirtySlurry = function() {
	this.types.push("dirtyslurry")
	return this
}

/**
 * 锭
 * 
 * @returns {registryMetals}
 */
registryMetals.prototype.ingot = function() {
	this.types.push("ingot")
	return this
}

/**
 * 粒
 * 
 * @returns {registryMetals}
 */
registryMetals.prototype.nugget = function() {
	this.types.push("nugget")
	return this
}

/**
 * 粗矿
 * 
 * @returns {registryMetals}
 */
registryMetals.prototype.rawOre = function() {
	this.types.push("rawore")
	return this
}

/**
 * 板
 * 
 * @returns {registryMetals}
 */
registryMetals.prototype.plate = function() {
	this.types.push("plate")
	return this
}

/**
 * 矿物浆液
 * 
 * @returns {registryMetals}
 */
registryMetals.prototype.slurry = function() {
	this.types.push("slurry")
	return this
}

/**
 * 是否能在信标中使用
 * 
 * @returns {registryMetals}
 */
registryMetals.prototype.beaconPaymentItem = function() {
	this.beaconPayment = true
	return this
}

StartupEvents.registry("item", event => {
	materialList.forEach(material => {
		material.types.forEach(type => {
			if (type == "dirtydust") {
				if (material.name != "aqualite" && material.name != "cryonium" && material.name != "shadowium") {
					event.create(`greedycraft:${material.name}_dirtydust`)
						.textures({
							"layer0": "greedycraft:item/dirtydust/color/layer/0",
							"layer1": "greedycraft:item/dirtydust/color/layer/1",
						})
						.color(0, material.color)
						.tag("greedycraft:dirtydust")
						.tag(`greedycraft:material/${material.name}`)
						.tag("greedycraft:material")
				} else {
					event.create(`greedycraft:${material.name}_dirtydust`)
						.textures({
							"layer0": `greedycraft:item/dirtydust/${material.name}/layer/0`,
							"layer1": "greedycraft:item/dirtydust/color/layer/1",
						})
						.tag("greedycraft:dirtydust")
						.tag(`greedycraft:material/${material.name}`)
						.tag("greedycraft:material")
				}
			} else if (type == "ingot") {
				let create = event.create(`greedycraft:${material.name}_ingot`)
				create.texture(`greedycraft:item/ingot/${material.name}`)
				create.tag("greedycraft:ingot")
				create.tag(`greedycraft:material/${material.name}`)
				if (material.beaconPayment) {
					create.tag("minecraft:beacon_payment_items")
				}
				create.tag("greedycraft:material")
			} else {
				if (
					material.name != "aqualite" &&
					material.name != "astral_metal" &&
					material.name != "chromasteel" &&
					material.name != "cosmilite" &&
					material.name != "cryonium" &&
					material.name != "electronium" &&
					material.name != "manganese_steel" &&
					material.name != "protonium" &&
					material.name != "shadowium" &&
					material.name != "terra_alloy" &&
					material.name != "sculk" &&
					material.name != "fusion_matrix" &&
					material.name != "wyvern" &&
					material.name != "draconic" &&
					material.name != "chaotic"
				) {
					let create = event.create(`greedycraft:${material.name}_${type}`)
					create.texture(`greedycraft:item/${type}/color/${type}`)
					create.color(0, material.color)
					create.tag(`greedycraft:${type}`)
					create.tag(`greedycraft:material/${material.name}`)
					if (type == "rawore") {
						create.tag("greedycraft:ore")
					} else {
						create.tag("greedycraft:material")
					}
				} else {
					let create = event.create(`greedycraft:${material.name}_${type}`)
					create.texture(`greedycraft:item/${type}/${material.name}`)
					create.tag(`greedycraft:${type}`)
					create.tag(`greedycraft:material/${material.name}`)
					if (type == "rawore") {
						create.tag("greedycraft:ore")
					} else {
						create.tag("greedycraft:material")
					}
				}
			}
			console.log(`Registry Metals: greedycraft:${material.name}_${type}`)
		})
	})
})

/**
 * 注册物品
 * 
 * @constructor
 * @param {string} name
 */
function registryItem(name) {
	this.name = name
	this.isStageUnlockItem = false

	/** @type {string | null} */
	this.stage = null

	this.tooltipCount = 0
	this.isGlow = false
	this.maxCount = 64
	this.burnTime = 0

	global.itemList.push(this)
}

/**
 * 可用于解锁阶段
 * 
 * @param {string} stage
 * @returns {registryItem}
 */
registryItem.prototype.setStageUnlockItem = function (stage) {
	this.isStageUnlockItem = true
	this.stage = stage
	return this
}

/**
 * tooltip 行数
 * 
 * @param {number} count
 * @returns {registryItem}
 */
registryItem.prototype.setTooltips = function (count) {
	this.tooltipCount = count
	return this
}

/**
 * 附魔光效
 * 
 * @returns {registryItem}
 */
registryItem.prototype.setGlow = function () {
	this.isGlow = true
	return this
}

/**
 * 可堆叠数量
 * 
 * @param {number} count
 * @returns {registryItem}
 */
registryItem.prototype.setMaxCount = function (count) {
	this.maxCount = count
	return this
}

/**
 * 可燃烧时间
 * 
 * @param {number} time
 * @returns {registryItem}
 */
registryItem.prototype.setBurnTime = function (time) {
	this.burnTime = time
	return this
}

StartupEvents.registry("item", event => {
	itemList.forEach(normalItem => {
		let item = event.create(`greedycraft:${normalItem.name}`)
		if (normalItem.isStageUnlockItem) {
			item.tag(`greedycraft:unlock_stage/${normalItem.stage}`)
		}
		if (normalItem.tooltipCount > 0) {
			for (let i = 1; i <= normalItem.tooltipCount; i++) {
				item.tooltip(Component.translatable(`greedycraft.item.${normalItem.name}.tooltip.${i}.text`))
			}
		}
		if (normalItem.isGlow) {
			item.glow(true)
		}
		item.maxStackSize(normalItem.maxCount)
		item.burnTime(normalItem.burnTime)
		item.tag("greedycraft:item")
		console.log(`reg normal item: greedycraft:${normalItem.name}`)
	})
})
