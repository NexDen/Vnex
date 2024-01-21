const client = global.client
var colors = require("../colors.js")

async function handle_button(interaction) {
    await interaction.deferUpdate()
    return console.log(`${colors.BgRed}${colors.FgWhite}[UYARI]${colors.Reset} Buton işleme kısmı eklenmemiş.`)
}

module.exports = {
    handle_button
}