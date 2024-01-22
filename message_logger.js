var colors = global.colors
var fs = require("fs")

var MESSAGE = colors.Bright + colors.FgRed //41-37
var COMMAND = colors.Bright + colors.FgCyan //46-37
var TIME = colors.Bright + colors.FgYellow //33-37
var GUILD = colors.Bright + colors.FgGreen //32-37
var CHANNEL = colors.Bright + colors.FgBlue //34-37
var USER = colors.Bright + colors.FgMagenta //35-37
var COMMANDNAME = colors.Bright + colors.FgCyan //46-37
var RESET = colors.Reset

const client = global.client

async function message_log(message){
    var şuan = new Date(Date.now()).toLocaleTimeString("tr-TR")
    var tür = ""
    if (message.author.id === client.user.id){
        tür = COMMAND + "[COMMAND RESPONSE]" + RESET
    } 
    else if (message.attachments.size) { // direk message.attachments yazınca olmuyordu
        tür = MESSAGE + "[MESSAGE WITH ATTACHMENT]" + RESET
    } else {
        tür = MESSAGE + "[MESSAGE]" + RESET
    }
    var dir = `./LOGS/${message.guild.name} (${message.guild.id})`

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true })
    }
    console.log(`${tür} ${TIME}${şuan} ${GUILD}${message.guild} ${CHANNEL}#${message.channel.name} ${USER}${message.author.username}<@${message.author.id}>: ${MESSAGE}${message.content}${RESET}`)
    fs.appendFileSync(`./LOGS/${message.guild.name} (${message.guild.id})/#${message.channel.name} (${message.channel.id}).txt`, `\n${şuan} / ${message.author.username}<@${message.author.id}>: ${message.content}`, {flag: "a+"})
}

async function command_log(interaction){
    var şuan = new Date(Date.now()).toLocaleTimeString("tr-TR")
    var çıkış = `${COMMAND}[COMMAND]${RESET} ${TIME}${şuan} ${GUILD}${interaction.guild} ${CHANNEL}#${interaction.channel.name} ${USER}${interaction.user.username}<@${interaction.user.id}>: ${COMMANDNAME}/${interaction.commandName} ${RESET}`
    var args = ""
    interaction.options.data.forEach(option =>{
        args += `[${option.name}: ${option.value}] `
    })
    çıkış += args
    var dir = `./LOGS/${interaction.guild.name} (${interaction.guild.id})`
    
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true })
    }
    console.log(çıkış)
    fs.appendFileSync(`./LOGS/${interaction.guild.name} (${interaction.guild.id})/#${interaction.channel.name} (${interaction.channel.id}).txt`, `\n[COMMAND] ${şuan} / ${interaction.user.username}<@${interaction.user.id}>: /${interaction.commandName} ${args}`, {flag: "a+"})
}
async function edit_log(oldMessage, newMessage){
    var tür = ""
    var şuan = new Date(Date.now()).toLocaleTimeString("tr-TR")

    if (newMessage.embeds.length !== 0){return}
    
    if (oldMessage.author.username === client.user.username){
        tür = COMMAND + "[COMMAND RESPONSE EDIT]" + RESET
    }
    else {
        tür = MESSAGE + "[MESSAGE EDIT]" + RESET
    }
    var dir = `./LOGS/${oldMessage.guild.name} (${oldMessage.guild.id})`;

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true })
    }
    console.log(`${tür} ${TIME}${şuan} ${GUILD}${oldMessage.guild} ${CHANNEL}#${oldMessage.channel.name} ${USER}${oldMessage.author.username}<@${oldMessage.author.id}>: ${MESSAGE}${oldMessage.content} -> ${newMessage.content} ${RESET}`)
    fs.appendFileSync(`./LOGS/${oldMessage.guild.name} (${oldMessage.guild.id})/#${oldMessage.channel.name} (${oldMessage.channel.id}).txt`, `\n[MESSAGE EDIT] ${şuan} ${oldMessage.author.username}<@${oldMessage.author.id}>: ${oldMessage.content} -> ${newMessage.content}`, {flag: "a+"})
}
module.exports = {
    command_log , edit_log , message_log
}