const { REST, Routes } = require('discord.js');
const config = require('./config.json');
const fs = require('node:fs');
const util = require('util');
const commands = [];
const commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(config.token);

(async () => {
	try {
		
		if (commands.length === 0) {
			console.log(config.informationMessages.noCommands);
			rest.put(Routes.applicationCommands(config.clientId), { body: [] })
			.then(() => console.log(config.informationMessages.commandWriteSuccess))
				.catch(console.error);
		}
		else {
			console.log(util.format(config.informationMessages.commandWrite, commands.length))
			const data = await rest.put(
				Routes.applicationCommands(config.clientId),
				{ body: commands },
			);
			console.log(util.format(config.informationMessages.commandWriteSuccess, data.length));

		}
	} catch (error) {
		console.error(error);
	}
})();