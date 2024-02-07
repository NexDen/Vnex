const colors = global.colors
config = global.config

client = global.client

async function handle_modal(interaction) {
    
    /*
    interaction.fields.getTextInputValue('customId')
    */
    await interaction.deferUpdate()
    return console.log(`${colors.Blink}${colors.Bright}${colors.BgRed}${colors.FgWhite}[${config.warningMessages.baseWarning}]${colors.Reset} ${config.warningMessages.modalHandlerNotImplemented}`)


}
module.exports = {
    handle_modal
}