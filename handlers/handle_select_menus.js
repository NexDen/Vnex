client = global.client
const colors = global.colors


async function handle_string_select_menu(interaction) {

    /*
    interaction.options.getString("select_menu_id")
    */

    await interaction.deferUpdate()
    console.log(interaction.options.getString("select_menu_id"))
    return console.log(`${colors.Blink}${colors.Bright}${colors.BgRed}${colors.FgWhite}[WARNING]${colors.Reset} The String Select Menu handler has not been implemented.`)
}

async function handle_role_select_menu(interaction) {
    /*
    interaction.options.getRole("select_menu_id")
    */
    await interaction.deferUpdate()
    console.log(interaction.values)
    return console.log(`${colors.Blink}${colors.Bright}${colors.BgRed}${colors.FgWhite}[WARNING]${colors.Reset} The Role Select Menu handler has not been implemented.`)
}

async function handle_channel_select_menu(interaction) {
    /*
    interaction.options.getChannel("select_menu_id")
    */
    await interaction.deferUpdate()
    console.log(interaction.options.getChannel("select_menu_id"))
    return console.log(`${colors.Blink}${colors.Bright}${colors.BgRed}${colors.FgWhite}[WARNING]${colors.Reset} The Channel Select Menu handler has not been implemented.`)
}

async function handle_mentionable_select_menu(interaction) {
    /*
    interaction.values[n]
    */

    console.log(interaction.values)
    await interaction.deferUpdate()
    return console.log(`${colors.Blink}${colors.Bright}${colors.BgRed}${colors.FgWhite}[WARNING]${colors.Reset} The User Select Menu handler has not been implemented.`)
}

module.exports = {
    handle_string_select_menu, handle_role_select_menu, handle_channel_select_menu, handle_mentionable_select_menu
}