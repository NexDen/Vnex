const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');
const fs = require('node:fs');

const commands = [];
const commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
	try {
		
		if (commands.length === 0) {
			console.log("No commands found, clearing all commands.");
			rest.put(Routes.applicationCommands(clientId), { body: [] })
				.then(() => console.log('All commands have been cleared.'))
				.catch(console.error);
		}
		else {
			console.log(`Writing ${commands.length} command(s).`);
			const data = await rest.put(
				Routes.applicationCommands(clientId),
				{ body: commands },
			);
			console.log(`Successfully wrote ${data.length} command(s).`);
		}
	} catch (error) {
		console.error(error);
	}
})();