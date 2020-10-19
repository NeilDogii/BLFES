const Discord = require('discord.js');
const moment = require("moment")
module.exports = {
  name: "history",
  description: "feeling bored? ban someone :D",
  aliases: ['k'],
  usage: '<mention>',
  category: 'mod',

  code(client, message, args, moot) {
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!user) user = message.member
     moot.findOne({
      didz: user.user.id
     },
       function(err, res) {
         if(err) return console.log(err)
         if(!res) return message.reply("There are no moderations active right now!")
       let i = 1

         let embed = new Discord.MessageEmbed()
         .setColor("RED")
         .setTitle(`${user.user.tag}'s mute history'`)
         .setTitle(res.mreason.map(e =>i++ + ". " + e).join("\n"))
         .setTimestamp()
        
         message.channel.send(embed)

       });




  }
}