// priority: 32767

/**
 * 以布尔值的形式返回配置文件中的值
 * 
 * @param {string} config_path - 配置文件路径
 * @param {string} config - 配置项
 * @returns {boolean} - 布尔值
 */
function ConfigFormBoolean(config_path, config) {
    let value = KJSutils.Analysis(config_path, config)
    if (value == "true") {
        return true
    }
    return false
}
