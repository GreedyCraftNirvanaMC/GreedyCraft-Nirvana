let permissions = 4

let packMode = global.packMode

if (Platform.isClientEnvironment) {
    permissions = 2
} else {
    permissions = 4
}

ServerEvents.basicCommand("setPackModeToCasual", event => {
    let player = event.player
    if (player.hasPermissions(permissions)) {
        if (packMode == "casual") {
            let message = Component.translatable("greedycraft.commands.setpackmode.noupdate");
            player.tell(message)
            return 0
        }
        KJSutils.ModifyJsonValue("config/greedycraft/config.json", "$.packMode", "casual");
        event.server.runCommand("kubejs reload client-scripts")
        event.server.runCommand("kubejs reload server-scripts")
        let message = Component.translatable("greedycraft.commands.setpackmode").append(Component.translatable("greedycraft.packmode.casual"));
        player.tell(message)

        packMode = "casual"
    } else {
        player.tell(Component.translatable("greedycraft.commands.error.permissions"))
    }
});
ServerEvents.basicCommand("setPackModeToAdventure", event => {
    let player = event.player
    if (player.hasPermissions(permissions)) {
        if (packMode == "adventure") {
            let message = Component.translatable("greedycraft.commands.setpackmode.noupdate");
            player.tell(message)
            return 0
        }
        event.server.runCommand("kubejs reload client-scripts")
        event.server.runCommand("kubejs reload server-scripts")
        KJSutils.ModifyJsonValue("config/greedycraft/config.json", "$.packMode", "adventure");
        let message = Component.translatable("greedycraft.commands.setpackmode").append(Component.translatable("greedycraft.packmode.adventure"));
        player.tell(message)

        packMode = "adventure"
    } else {
        player.tell(Component.translatable("greedycraft.commands.error.permissions"))
    }
});
ServerEvents.basicCommand("setPackModeToExpert", event => {
    let player = event.player
    if (player.hasPermissions(permissions)) {
        if (packMode == "expert") {
            let message = Component.translatable("greedycraft.commands.setpackmode.noupdate");
            player.tell(message)
            return 0
        }
        event.server.runCommand("kubejs reload client-scripts")
        event.server.runCommand("kubejs reload server-scripts")
        KJSutils.ModifyJsonValue("config/greedycraft/config.json", "$.packMode", "expert");
        let message = Component.translatable("greedycraft.commands.setpackmode").append(Component.translatable("greedycraft.packmode.expert"));
        player.tell(message)

        packMode = "expert"
    } else {
        player.tell(Component.translatable("greedycraft.commands.error.permissions"))
    }
});