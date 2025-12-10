KJSutils.FMsetVariable("packLocalVersion", global.localPackVersionName)

if (global.checkVersionUpdate == "true") {
    let newVersionCode = KJSutils.Analysis("config/greedycraft/version.json", "$.versionCode")
    let newVersionName = KJSutils.Analysis("config/greedycraft/version.json", "$.versionName")

    if (global.localPackVersionCode < newVersionCode) {
        KJSutils.FMsetVariable("packUpdate", "true")
        KJSutils.FMsetVariable("packNewVersion", newVersionName)
        KJSutils.FMsetVariable("packNewVersionNumber", newVersionCode - global.localPackVersionCode)
    } else {
        KJSutils.FMsetVariable("packUpdate", "false")
    }
} else {
    KJSutils.FMsetVariable("packUpdate", "false")
}