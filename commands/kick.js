const Discord = require('discord.js');

module.exports = {
  name: "kick",
  description: "feeling bored? ban someone :D",
  aliases: ['k'],
  usage: '<mention>',
  category: 'mod',

  async code(client, message, args) {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.reply(`You cannot use that command!`);
    }
    var user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
      if(!user) return message.reply('that doesnt look like a valid user to me >:C')
    let a = user.tag
    let reason = args.slice(1).join(' ')
    if(!reason) {
      reason = "no reason"
    }

    if(user.roles.highest.position > message.member.roles.highest.position && message.author.id !== message.guild.owner.id){
       message.react('❎')
       return message.reply('you cannot kick that HOOMAN! as he/she has a higher role(s) than your current highest role(s).')
       
     } 
let bot = message.guild.members.cache.get(client.user.id)

      if(user.roles.highest.position > bot.roles.highest.position) {
         message.react('❎')
       return message.reply('I cannot kick that user as that user has role(s) which are higher than my current role(s)')
      }
     let uembed = new Discord.MessageEmbed()
       .setColor("RED")
       .setTitle("You have been kicked from " + message.guild.name)
       .setTimestamp()
       await user.send(uembed)
       let av = user.user.displayAvatarURL()
   
     await user
       .kick({
            reason: reason,
          })
          .then(() => {
          let bembed = new Discord.MessageEmbed()
       .setColor("RED")
       .setTitle(`Successfully kicked ${user.user.tag}`)
       .setThumbnail(av)
       .setTimestamp()
           message.channel.send(bembed);
           message.delete()
          })
          .catch(err => {
            message.reply('I was unable to kick the member');
            message.react('❎')
            console.error(err);
          });
        
  }
}