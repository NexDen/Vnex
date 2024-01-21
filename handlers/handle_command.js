const { komut_log } = require("../message_logger.js")

async function handle_command(interaction){
    
    const command = interaction.client.commands.get(interaction.commandName)
            
    if (!command) {
        console.error(`${colors.Bright}${colors.BgRed}${colors.FgWhite}[KOMUT BULUNAMADI]${colors.Reset} /${interaction.commandName}`)
    }
    
    try {
        await command.execute(interaction)
        komut_log(interaction)
    } catch (err){
        console.error(err)
        try {
            await interaction.reply({
                content: "Komut çalıştırırken bir hata oluştu.",
                ephemeral: true
            })
        } catch (err) {
            await interaction.editReply({
                content: "Komut çalıştırırken bir hata oluştu.",
                ephemeral: true
            })
        }
    }
}

module.exports = {
    handle_command
}
