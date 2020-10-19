const Discord = require('discord.js')
const {client, moot} = require('../index');
const fs = require("fs-extra");
const prefix = ","
client.commands = new Discord.Collection();
const commandFiles = fs
  .readdirSync("./commands")
  .filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`../commands/${file}`);

  client.commands.set(command.name, command);
}

client.on("message",  message => {
  
 
  if(message.author.bot) return;
  
    
       if (
        !message.content.toLowerCase().startsWith(prefix) ||
       message.author.bot ||
        message.content.toLowerCase().startsWith(prefix + " ")
      )              
        return;
        
      
      
      const args = message.content
        .slice(prefix.length)
        .trim()
        .split(" ");
      const commandName = args.shift().toLowerCase();

      
      
    
      const command =
        client.commands.get(commandName) ||
        client.commands.find(
          cmd => cmd.aliases && cmd.aliases.includes(commandName)
        );

      if (!command) return;


      try {

        command.code(client, message, args, moot);
       
      } catch (err) {
        console.log(err);
      }
    });
  
