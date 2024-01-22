const colors = global.colors

client = global.client

async function handle_modal(interaction) {
    
    /*
    interaction.fields.getTextInputValue('customId')
    */
    await interaction.deferUpdate()
    return console.log(`${colors.Blink}${colors.Bright}${colors.BgRed}${colors.FgWhite}[WARNING]${colors.Reset} The modal handler has not been implemented.`)


}
module.exports = {
    handle_modal
}