# vNEX
- A Discord bot infrastructure made purely in discord.js.

  - Supports Context Commands and Modals.
  - Completely modular, everything is kept in their own separate files.
  - Keeps logs of all of the chats in all joined servers.
  - Has cool looking outputs.

- How To Use:
  - Create a Discord bot from [The Discord Developer Portal](https://discord.dev).
  - Put the bot's token and bot's client ID in the included config.json file.

    ```json
    {
      "token":"bots-token-here",
      "clientId":"bots-clientID-here"
      ...
    }
    ```
  - Run `npm i` in the main directory and when its done, run `node index.js` to run the bot!
  - If it works you should see this in the output:
    ```
    [WARNING] No commands found.
    :::     ::: ::::    ::: :::::::::: :::    ::: 
    :+:     :+: :+:+:   :+: :+:        :+:    :+: 
    +:+     +:+ :+:+:+  +:+ +:+         +:+  +:+  
    +#+     +:+ +#+ +:+ +#+ +#++:++#     +#++:+   
    +#+     +#+ +#+  +#+#+# +#+         +#+  +#+  
      #+#+#+#   #+#   #+#+# #+#        #+#    #+# 
        ###     ###    #### ########## ###    ### 
    Connected to {Your bot's username}!
    ```
  - Adding commands to the "commands" directory will make the warning go away.
  - Create an example file in the "commands" directory with the following code:
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
  - To make context menu commands, you can use this example file:
    ```js
      const { ContextMenuCommandBuilder, ApplicationCommandType } = require("discord.js")

      module.exports = {
          data: new ContextMenuCommandBuilder()
              .setName("Ping")
              .setType(ApplicationCommandType.User),
          async execute(interaction){
            return interaction.reply({
                content: `Pong!`,
                ephemeral: true
            })
        }
      }
      // This command can be run by clicking on a user and navigating to the "Apps" section, for example.
    ```
  - When ready, run `node deploy-commands.js` to deploy the command to your discord bot. (Because of Discord's caching, you may need to restart Discord on your end to see the new commands.)
  
- Refer to [The discord.js Guide](https://discordjs.guide) for further examples.
- (Knowledge of JavaScript not included.)
