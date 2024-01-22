const { ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require("discord.js")
const colors = require("../colors.js")
client = global.client
const { command_log } = require("../message_logger.js")

async function handle_context_menu(interaction) {
    const command = interaction.client.commands.get(interaction.commandName)
            
    if (!command) {
        console.error(`${colors.Bright}${colors.Blink}${colors.BgRed}${colors.FgWhite}[COMMAND NOT FOUND]${colors.Reset} /${interaction.commandName}`)
    }
    
    try {
        await command.execute(interaction)
        command_log(interaction)
    } catch (err){
        console.error(err)
        try {
            await interaction.reply({
                content: "An error occured.",
                ephemeral: true
            })
        } catch (err) {
            await interaction.editReply({
                content: "An error occured.",
                ephemeral: true
            })
        }
    }
}

module.exports = {
    handle_context_menu
}