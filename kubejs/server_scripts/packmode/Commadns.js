ServerEvents.basicCommand("setPackModeToCasual", event => {
    let player = event.player
    if (player.hasPermissions(2)) {
        FilesJS.replaceInFile("config/packmode/packmode.txt", getPackMode(), "casual");
        player.tell(Component.translatable("greedycraft.commands.setpackmode") + Component.translatable("greedycraft.packmode.casual"))
    } else {
        player.tell(Component.translatable("greedycraft.commands.error.permissions"))
    }
});
ServerEvents.basicCommand("setPackModeToAdventure", event => {
    let player = event.player
    if (player.hasPermissions(2)) {
        FilesJS.replaceInFile("config/packmode/packmode.txt", getPackMode(), "adventure");
        player.tell(Component.translatable("greedycraft.commands.setpackmode") + Component.translatable("greedycraft.packmode.adventure"))
    } else {
        player.tell(Component.translatable("greedycraft.commands.error.permissions"))
    }
});
ServerEvents.basicCommand("setPackModeToExpert", event => {
    let player = event.player
    if (player.hasPermissions(2)) {
        FilesJS.replaceInFile("config/packmode/packmode.txt", getPackMode(), "expert");
        player.tell(Component.translatable("greedycraft.commands.setpackmode") + Component.translatable("greedycraft.packmode.expert"))
    } else {
        player.tell(Component.translatable("greedycraft.commands.error.permissions"))
    }
});