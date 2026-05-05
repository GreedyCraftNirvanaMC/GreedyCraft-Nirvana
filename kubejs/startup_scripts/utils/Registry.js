// priority: 32767

// 函数：注册材料，无返回值，使用链式调用
global.materialList = []
global.itemList = []
function registryMetals(name, color) {
	this.name = name
	this.color = color
	this.types = []
	this.beaconPayment = false

	global.materialList.push(this)
}

registryMetals.prototype.dust = function () {
	this.types.push("dust")
	return this
}
registryMetals.prototype.rod = function () {
	this.types.push("rod")
	return this
}
registryMetals.prototype.gear = function () {
	this.types.push("gear")
	return this
}
registryMetals.prototype.dirtyDust = function () {
	this.types.push("dirtydust")
	return this
}
registryMetals.prototype.clump = function () {
	this.types.push("clump")
	return this
}
registryMetals.prototype.shard = function () {
	this.types.push("shard")
	return this
}
registryMetals.prototype.crystal = function () {
	this.types.push("crystal")
	return this
}
registryMetals.prototype.dirtySlurry = function () {
	this.types.push("dirtyslurry")
	return this
}
registryMetals.prototype.ingot = function () {
	this.types.push("ingot")
	return this
}
registryMetals.prototype.nugget = function () {
	this.types.push("nugget")
	return this
}
registryMetals.prototype.rawOre = function () {
	this.types.push("rawore")
	return this
}
registryMetals.prototype.plate = function () {
	this.types.push("plate")
	return this
}
registryMetals.prototype.slurry = function () {
	this.types.push("slurry")
	return this
}

registryMetals.prototype.beaconPaymentItem = function () {
	this.beaconPayment = true
	return this
}

StartupEvents.registry("item", event => {
	global.materialList.forEach(material => {
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

function registryItem(name) {
	this.name = name
	this.isStageUnlockItem = false
	this.stage = null
	this.tooltipCount = 0
	this.isGlow = false
	this.maxCount = 64
	this.burnTime = 0

	global.itemList.push(this)
}

registryItem.prototype.setStageUnlockItem = function (stage) {
	this.isStageUnlockItem = true
	this.stage = stage
	return this
}

registryItem.prototype.setTooltips = function (count) {
	this.tooltipCount = count
	return this
}

registryItem.prototype.setGlow = function () {
	this.isGlow = true
	return this
}

registryItem.prototype.setMaxCount = function (count) {
	this.maxCount = count
	return this
}

registryItem.prototype.setBurnTime = function (time) {
	this.burnTime = time
	return this
}

StartupEvents.registry("item", event => {
	global.itemList.forEach(normalItem => {
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
		console.log(`reg normal item: ${normalItem.name}`)
	})
})
