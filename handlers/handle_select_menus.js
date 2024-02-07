client = global.client
config = global.config
const colors = global.colors

async function handle_string_select_menu(interaction) {

    /*
    interaction.options.getString("select_menu_id")
    */

    await interaction.deferUpdate()
    return console.log(`${colors.Blink}${colors.Bright}${colors.BgRed}${colors.FgWhite}[${config.warningMessages.baseWarning}]${colors.Reset} ${config.warningMessages.stringSelectMenuHandlerNotImplemented}`)
}

async function handle_role_select_menu(interaction) {
    /*
    interaction.options.getRole("select_menu_id")
    */
    await interaction.deferUpdate()
    return console.log(`${colors.Blink}${colors.Bright}${colors.BgRed}${colors.FgWhite}[${config.warningMessages.baseWarning}]${colors.Reset} ${config.warningMessages.roleSelectMenuHandlerNotImplemented}`)
}

async function handle_channel_select_menu(interaction) {
    /*
    interaction.options.getChannel("select_menu_id")
    */
    await interaction.deferUpdate()
    return console.log(`${colors.Blink}${colors.Bright}${colors.BgRed}${colors.FgWhite}[${config.warningMessages.baseWarning}]${colors.Reset} ${config.warningMessages.channelSelectMenuHandlerNotImplemented}`)
}

async function handle_mentionable_select_menu(interaction) {
    /*
    interaction.values[n]
    */

    await interaction.deferUpdate()
    return console.log(`${colors.Blink}${colors.Bright}${colors.BgRed}${colors.FgWhite}[${config.warningMessages.baseWarning}]${colors.Reset} ${config.warningMessages.userSelectMenuHandlerNotImplemented}`)
}

module.exports = {
    handle_string_select_menu, handle_role_select_menu, handle_channel_select_menu, handle_mentionable_select_menu
}