const { command_log } = require("../message_logger.js")
const colors = global.colors
config = global.config
const util = require("util")
async function handle_command(interaction){
    
    const command = interaction.client.commands.get(interaction.commandName)
            
    if (!command) {
        console.error(`${colors.Bright}${colors.Blink}${colors.BgRed}${colors.FgWhite}[${config.warningMessages.baseWarning}]${colors.Reset}` + util.format(config.warningMessages.commandNotFound, interaction.commandName))
    }
    
    try {
        await command.execute(interaction)
        command_log(interaction)
    } catch (err){
        console.error(err)
        try {
            await interaction.reply({
                content: config.errorMessages.commandExecutionError,
                ephemeral: true
            })
        } catch (err) {
            await interaction.editReply({
                content: config.errorMessages.commandExecutionError,
                ephemeral: true
            })
        }
    }
}

module.exports = {
    handle_command
}
