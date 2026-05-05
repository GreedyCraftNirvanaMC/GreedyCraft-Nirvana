// priority: 32767

// 函数：用于返回布尔值的配置文件值，要求提供配置文件路径和配置项两个形参，返回布尔值
function ConfigFormBoolean(config_path, config) {
    let value = KJSutils.Analysis(config_path, config)
    if (value == "true") {
        return true
    }
    return false
}
