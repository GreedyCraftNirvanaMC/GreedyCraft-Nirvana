ServerEvents.basicCommand("setPackModeToCasual", event => {
    let player = event.player
    if (player.hasPermissions(2)) {
        FilesJS.replaceInFile("config/packmode/packmode.txt", getPackMode(), "casual");
        let message = Component.translatable("greedycraft.commands.setpackmode")
            .append(Component.translatable("greedycraft.packmode.casual"));
        player.tell(message)
    } else {
        player.tell(Component.translatable("greedycraft.commands.error.permissions"))
    }
});
ServerEvents.basicCommand("setPackModeToAdventure", event => {
    let player = event.player
    if (player.hasPermissions(2)) {
        FilesJS.replaceInFile("config/packmode/packmode.txt", getPackMode(), "adventure");
        let message = Component.translatable("greedycraft.commands.setpackmode")
            .append(Component.translatable("greedycraft.packmode.adventure"));
        player.tell(message)
    } else {
        player.tell(Component.translatable("greedycraft.commands.error.permissions"))
    }
});
ServerEvents.basicCommand("setPackModeToExpert", event => {
    let player = event.player
    if (player.hasPermissions(2)) {
        FilesJS.replaceInFile("config/packmode/packmode.txt", getPackMode(), "expert");
        let message = Component.translatable("greedycraft.commands.setpackmode")
            .append(Component.translatable("greedycraft.packmode.expert"));
        player.tell(message)
    } else {
        player.tell(Component.translatable("greedycraft.commands.error.permissions"))
    }
});