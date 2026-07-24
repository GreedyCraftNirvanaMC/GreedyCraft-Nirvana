// priority: 32767

global.materialList = []

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

	this.types = []
	this.beaconPayment = false

	global.materialList.push(this)
}

/**
 * 粉
 * 
 */
registryMetals.prototype.dust = function() {
	this.types.push("dust")
	return this
}

/**
 * 杆
 * 
 */
registryMetals.prototype.rod = function() {
	this.types.push("rod")
	return this
}

/**
 * 齿轮
 * 
 */
registryMetals.prototype.gear = function() {
	this.types.push("gear")
	return this
}

/**
 * 污浊粉
 * 
 */
registryMetals.prototype.dirtyDust = function() {
	this.types.push("dirtydust")
	return this
}

/**
 * 碎块
 * 
 */
registryMetals.prototype.clump = function() {
	this.types.push("clump")
	return this
}

/**
 * 碎片
 * 
 */
registryMetals.prototype.shard = function() {
	this.types.push("shard")
	return this
}

/**
 * 晶体
 * 
 */
registryMetals.prototype.crystal = function() {
	this.types.push("crystal")
	return this
}

/**
 * 锭
 * 
 */
registryMetals.prototype.ingot = function() {
	this.types.push("ingot")
	return this
}

/**
 * 粒
 * 
 */
registryMetals.prototype.nugget = function() {
	this.types.push("nugget")
	return this
}

/**
 * 粗矿
 * 
 */
registryMetals.prototype.rawOre = function() {
	this.types.push("rawore")
	return this
}

/**
 * 板
 * 
 */
registryMetals.prototype.plate = function() {
	this.types.push("plate")
	return this
}

/**
 * 矿物浆液
 * 
 */
registryMetals.prototype.slurry = function() {
	this.types.push("slurry")
	return this
}

/**
 * 是否能在信标中使用
 * 
 */
registryMetals.prototype.beaconPaymentItem = function() {
	this.beaconPayment = true
	return this
}

global.itemList = []

/**
 * 注册物品
 * 
 * @constructor
 * @param {string} name
 */
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

/**
 * 可用于解锁阶段
 * 
 * @param {string} stage
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
 */
registryItem.prototype.setTooltips = function (count) {
	this.tooltipCount = count
	return this
}

/**
 * 附魔光效
 * 
 */
registryItem.prototype.setGlow = function () {
	this.isGlow = true
	return this
}

/**
 * 可堆叠数量
 * 
 * @param {number} count
 */
registryItem.prototype.setMaxCount = function (count) {
	this.maxCount = count
	return this
}

/**
 * 可燃烧时间
 * 
 * @param {number} time
 */
registryItem.prototype.setBurnTime = function (time) {
	this.burnTime = time
	return this
}