const Discord = require('discord.js');

module.exports = {
  name: "eval",
  description: "eval",
  usage: 'eval [code]',
  category: 'owner only',
  
  
  code(client, message, args, moot) {
    
   
    let prefix = ","
    if(message.author.id !== '430964083160776705'){
      return message.reply('mai daddy will be angely if uw use thiisss >:C')
    }
    
    const clean = text => {
  if (typeof text === "string")
    return text
      .replace(/`/g, "`" + String.fromCharCode(8203))
      .replace(/@/g, "@" + String.fromCharCode(8203));
  else return text;
};


  
      const argss = message.content
        .slice(prefix.length + 5)
        .trim()
        .split(" ");

      if (message.content.startsWith(prefix + "eval")) {
        
          try {
            const code = argss.join(" ");
            let evaled = eval(code);

            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);

            const embed = new Discord.MessageEmbed().setColor().setTitle(``);

            message.channel.send(clean(evaled), { code: "xl" });
            console.log(code);
          } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
          }
        
      }
    

    
  }
}