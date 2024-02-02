var colors = require("./colors.js")
global.colors = colors
try {
    try {
        require("./config.json")
    } catch (err) {
        console.error(`${colors.Bright}${colors.Blink}${colors.BgRed}${colors.FgWhite}[ERROR]${colors.Reset} config.json not found.`)
        process.exit(1)
    }
    var { token } = require("./config.json")
} catch (err) {
    console.error(`${colors.Bright}${colors.Blink}${colors.BgRed}${colors.FgWhite}[ERROR]${colors.Reset} Invalid token specified.`)
    process.exit(1)
}
var { Client, Collection, GatewayIntentBits } = require("discord.js")

const fs = require("node:fs")
const path = require("node:path")

if (!fs.existsSync("./commands")) {
    console.error(`${colors.Bright}${colors.Blink}${colors.BgRed}${colors.FgWhite}[ERROR]${colors.Reset} No commands folder found, creating.`)
    fs.mkdirSync("./commands")
}

const debug = false;


const client = new Client({
    intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
})

global.client = client
global.debug = debug

client.once('ready', () => { 
    console.log(`${colors.Bright}Connected to ${colors.Reset}${colors.FgYellow}${client.user.username}!${colors.Reset}`)
    client.user.setPresence({ activities: [{ name: 'discord.js v14'}], status: 'online' });
});

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

if (commandFiles.length === 0) {
    console.log(`${colors.Bright}${colors.Blink}${colors.BgRed}${colors.FgWhite}[WARNING]${colors.Reset} No commands found.`);
}
else {
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        // Set a new item in the Collection with the key as the command name and the value as the exported module
        if ('data' in command && 'execute' in command) {
            client.commands.set(command.data.name, command);
        } else if (!('data' in command) && !('execute' in command)){
            console.log(`${colors.Bright}${colors.Blink}${colors.BgRed}${colors.FgWhite}[WARNING]${colors.Reset} Command ${filePath} doesn't contain a "data" property and an "execute" function.`);
        } else if (!("execute" in command)){
            console.log(`${colors.Bright}${colors.Blink}${colors.BgRed}${colors.FgWhite}[WARNING]${colors.Reset} Command ${filePath} doesn't contain an "execute" function.`);
        } else if (!("data" in command)){
            console.log(`${colors.Bright}${colors.Blink}${colors.BgRed}${colors.FgWhite}[WARNING]${colors.Reset} Command ${filePath} doesn't contain a "data" property.`);
        }
    }
}

client.on("error", error => {
    console.error(`${colors.Bright}${colors.BgRed}${colors.FgWhite}${colors.Blink}[ERROR]${colors.Reset} ${error}`)
})

const { edit_log } = require("./message_logger.js")

const { handle_string_select_menu, handle_role_select_menu, handle_mentionable_select_menu, handle_channel_select_menu } = require("./handlers/handle_select_menus.js")

const { handle_modal } = require("./handlers/handle_modal.js")

const { handle_button } = require("./handlers/handle_button.js")

const { handle_command } = require("./handlers/handle_command.js")

const { handle_member_add, handle_member_leave } = require("./handlers/handle_member.js")

const { handle_context_menu } = require("./handlers/handle_context_menus.js")

const { handle_messages } = require("./handlers/handle_messages.js")


client.on("interactionCreate", async interaction => {
    // console.log(interaction)
    
    if (interaction.isStringSelectMenu()) handle_string_select_menu(interaction)
    
    else if (interaction.isModalSubmit()) handle_modal(interaction)
    
    else if (interaction.isButton()) handle_button(interaction)
    
    if (interaction.isAnySelectMenu()){
        if (interaction.isRoleSelectMenu()) handle_role_select_menu(interaction)
        else if (interaction.isUserSelectMenu()) handle_mentionable_select_menu(interaction)
        else if (interaction.isChannelSelectMenu()) handle_channel_select_menu(interaction)
        else if (interaction.isMentionableSelectMenu()) handle_mentionable_select_menu(interaction)
    }
    else if (interaction.isContextMenuCommand()) handle_context_menu(interaction)

    else if (interaction.isChatInputCommand()) handle_command(interaction)
})

client.on("guildCreate", async guild => {
    var now = new Date(Date.now()).toLocaleTimeString("tr-TR")
    var guild_name = guild.name
    console.log(`${colors.Bright}${colors.FgRed}[ADDED TO SERVER] ${colors.FgYellow}${now} ${colors.FgGreen}${guild_name}`)
})

client.on("guildMemberAdd", async member => {
    handle_member_add(member)
})

client.on("guildMemberRemove", async member => {
    handle_member_leave(member)
})

client.on("messageCreate", async message =>{
    handle_messages(message)
})

client.on("messageUpdate", async (oldMessage, newMessage) =>{
    edit_log(oldMessage, newMessage)
})

client.login(token)