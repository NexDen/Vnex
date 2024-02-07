const client = global.client
var colors = global.colors
var config = global.config

async function handle_button(interaction) {
    await interaction.deferUpdate()
    return console.log(`${colors.BgRed}${colors.Blink}${colors.FgWhite}[${config.warningMessages.baseWarning}]${colors.Reset} ${config.warningMessages.buttonHandlerNotImplemented}`)
}

module.exports = {
    handle_button
}