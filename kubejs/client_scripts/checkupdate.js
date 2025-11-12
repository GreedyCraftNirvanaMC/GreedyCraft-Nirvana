let newVersionCode = KJSutils.Analysis("config/packversion/version.json", "$.versionCode")
let newVersionName = KJSutils.Analysis("config/packversion/version.json", "$.versionName")

KJSutils.FMsetVariable("packLocalVersion",global.localVersionName)

if (global.localVersionCode < newVersionCode) {
    KJSutils.FMsetVariable("packUpdate", "true")
    KJSutils.FMsetVariable("packNewVersion", newVersionName)
    KJSutils.FMsetVariable("packNewVersionNumber", newVersionCode - global.localVersionCode)
} else {
    KJSutils.FMsetVariable("packUpdate", "false")
}