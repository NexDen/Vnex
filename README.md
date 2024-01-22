![Shamelessly stolen vnex logo, can take down upon request.](https://cdn.discordapp.com/attachments/1142287252446253138/1198826191927382077/vnlogo.png?ex=65c050e5&is=65addbe5&hm=720746000e169d41f4517c4eb89a826d5900b3ff3a886a2c5407a75e856ca50e&)
# VNEX
- A Discord bot infrastructure made purely in discord.js.

  - Supports Context Commands and Modals.
  - Completely modular, everything is kept in their own seperate files.
  - Keeps logs of all of the chats in all joined servers.
  - Has cool looking outputs.

- How To Use:
  - Create a Discord bot from [The Discord Developer Portal](https://discord.dev).
  - Put the bot's token and bot's client ID in a file called "config.json" in the main directory with the following syntax:

    ```json
    {
      "token":"bots-token-here",
      "clientId":"bots-clientID-here"
    } 
    ```
  - Run `npm i` in the main directory and run `node index.js` to run the bot!
  - If it works you should see this in the output:
    ``` 
    [WARNING] No commands found.
    Connected to (Your bot's username)!
    ```
  - Adding commands to the "commands" directory will make the warning go away.
  - Create an example file in the "commands" directory with the following syntax:
    ```js
    const { SlashCommandBuilder } = require("discord.js")

    module.exports = {
        data: new SlashCommandBuilder()
            .setName("ping")
            .setDescription("Pings the bot."),
        async execute (interaction){
          return interaction.reply({
              content: "Pong!",
              ephemeral: true
          })
      }
    }
    ```
  - You can change the command's name by modifying the `.setName` field and the command description by modifying the `.setDescription` field. (The filename doesnt have to match the command name.)
  - When the command gets called by someone, the `execute` function will run, so put everything that needs to get run in there.
  - When ready, run `node deploy-commands.js` to deploy the command to your discord bot. (This might take a few minutes if you are redeploying an already existing command.)
- (Knowledge of JavaScript not included.)