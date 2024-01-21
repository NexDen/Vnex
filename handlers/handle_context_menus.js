const { ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require("discord.js")
const colors = require("../colors.js")
client = global.client

async function handle_context_menu(interaction) {

    /*
    global.target_user = interaction.targetMember 
    */
    
    return console.log(`${colors.Bright}${colors.BgRed}${colors.FgWhite}[UYARI]${colors.Reset} Context menu işleme kısmı eklenmemiş.`)

}

module.exports = {
    handle_context_menu
}