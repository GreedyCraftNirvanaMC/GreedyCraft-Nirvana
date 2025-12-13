// priority: 500

let materialList = []

/**
 * 注册材料
 * @param {String} name 材料名字
 * @param {Internal.ItemTintFunction_ | Internal.BlockTintFunction_ | Color_} color 颜色
 * @constructor
 */
function registryMetals(name, color) {
	this.name = name
	this.color = color
	this.types = []
	this.beaconPayment = false

	materialList.push(this)
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
	materialList.forEach(material => {
		material.types.forEach(type => {

			if (type == "dirtydust") {
				if (!(material.name == "aqualite" || material.name == "cryonium" || material.name == "shadowium")) {
					event.create(`greedycraft:${material.name}_dirtydust`)
						.textures({
							"layer0": "greedycraft:item/dirtydust/color/layer/0",
							"layer1": "greedycraft:item/dirtydust/color/layer/1",
						})
						.color(0, material.color)
						.tag("greedycraft:dirtydust")
				} else {
					event.create(`greedycraft:${material.name}_dirtydust`)
						.textures({
							"layer0": `greedycraft:item/dirtydust/${material.name}/layer/0`,
							"layer1": "greedycraft:item/dirtydust/color/layer/1",
						})
						.tag("greedycraft:dirtydust")
				}
			} else if (type == "ingot") {
				let create = event.create(`greedycraft:${material.name}_ingot`)
					create.texture(`greedycraft:item/ingot/${material.name}`)
					create.tag("greedycraft:ingot")

				if (material.beaconPayment) {
					create.tag("minecraft:beacon_payment_items")
				}
			} else {
				if (!(material.name == "aqualite" || material.name == "astral_metal" || material.name == "chromasteel" || material.name == "cosmilite" || material.name == "cryonium" || material.name == "electronium" || material.name == "manganese_steel" || material.name == "protonium" || material.name == "shadowium" || material.name == "terra_alloy")) {
					event.create(`greedycraft:${material.name}_${type}`)
						.texture(`greedycraft:item/${type}/color/${type}`)
						.color(0, material.color)
						.tag(`greedycraft:${type}`)
				} else {
					event.create(`greedycraft:${material.name}_${type}`)
						.texture(`greedycraft:item/${type}/${material.name}`)
						.tag(`greedycraft:${type}`)
				}
			}
		})
	})
})