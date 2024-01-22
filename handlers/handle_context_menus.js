const { ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require("discord.js")
const colors = require("../colors.js")
client = global.client

async function handle_context_menu(interaction) {

    /*
    global.target_user = interaction.targetMember 
    */
    
    return console.log(`${colors.Bright}${colors.Blink}${colors.BgRed}${colors.FgWhite}[UYARI]${colors.Reset} The context menu handler has not been implemented.`)

}

module.exports = {
    handle_context_menu
}