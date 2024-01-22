client = global.client
const colors = require("../colors.js")


async function handle_string_select_menu(interaction) {

    /*
    interaction.options.getString("select_menu_id")
    */

    await interaction.deferUpdate()
    console.log(interaction.options.getString("select_menu_id"))
    return console.log(`${colors.Bright}${colors.BgRed}${colors.FgWhite}[UYARI]${colors.Reset} String Select Menu işleme kısmı eklenmemiş.`)
}

async function handle_role_select_menu(interaction) {
    /*
    interaction.options.getRole("select_menu_id")
    */
    await interaction.deferUpdate()
    console.log(interaction.values)
    return console.log(`${colors.Bright}${colors.BgRed}${colors.FgWhite}[UYARI]${colors.Reset} Role Select Menu işleme kısmı eklenmemiş.`)
}

async function handle_channel_select_menu(interaction) {
    /*
    interaction.options.getChannel("select_menu_id")
    */
    await interaction.deferUpdate()
    console.log(interaction.options.getChannel("select_menu_id"))
    return console.log(`${colors.Bright}${colors.BgRed}${colors.FgWhite}[UYARI]${colors.Reset} Channel Select Menu işleme kısmı eklenmemiş.`)
}

async function handle_mentionable_select_menu(interaction) {
    /*
    interaction.values[n]
    */

    console.log(interaction.values)
    await interaction.deferUpdate()
    return console.log(`${colors.Blink}${colors.Bright}${colors.BgRed}${colors.FgWhite}[UYARI]${colors.Reset} User Select Menu işleme kısmı eklenmemiş.`)
}

module.exports = {
    handle_string_select_menu, handle_role_select_menu, handle_channel_select_menu, handle_mentionable_select_menu
}