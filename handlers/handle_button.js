const client = global.client
var colors = require("../colors.js")

async function handle_button(interaction) {
    await interaction.deferUpdate()
    return console.log(`${colors.BgRed}${colors.Blink}${colors.FgWhite}[WARNING]${colors.Reset} The button handler has not been implemented.`)
}

module.exports = {
    handle_button
}