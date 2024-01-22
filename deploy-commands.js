const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./tokens.json');
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
			console.log("Komut bulunamadı, botun komutları temizleniyor.");
			rest.put(Routes.applicationCommands(clientId), { body: [] })
				.then(() => console.log('Bütün komutlar temizlendi.'))
				.catch(console.error);
		}
		else {
			console.log(`${commands.length} tane komut yazılıyor.`);
			const data = await rest.put(
				Routes.applicationCommands(clientId),
				{ body: commands },
			);
			console.log(`${data.length} tane komut yazıldı.`);
		}
	} catch (error) {
		console.error(error);
	}
})();