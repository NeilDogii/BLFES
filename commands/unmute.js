const Discord = require('discord.js');
const ms = require("ms")
module.exports = {
  name: "unmute",
  description: "eval",
  usage: 'eval [code]',
  category: 'owner only',
  
  
  code(client, message, args, moot) {
    if (!message.member.hasPermission("ADMINISTRATOR")  && !message.member.roles.cache.find(r  =>  r.name === "Community Moderation") && essage.member.roles.cache.find(r  =>  r.name === "ATFN Management")) {
      return message.reply(`You cannot use that command!`);
    }
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(m => m.tag == args[0])
    if(!user) return message.reply("Please provide a proper server member who you want to unmute!")
    let role = message.guild.roles.cache.find(m => m.name.toLowerCase() == "muted")
    moot.findOne({
        didz: user.user.id

    },(err, res) =>{
        if(err) return console.log(err)
       

        if(!res) {
           let uembed = new Discord.MessageEmbed()
       .setColor("RED")
       .setTitle(`${user.user.tag} has been unmuted`)
       .setTimestamp()
          message.channel.send(uembed)
        message.delete()
        return user.roles.remove(role)
        }
         
   

        res.timez = "no"
        let uembed = new Discord.MessageEmbed()
       .setColor("RED")
       .setTitle(`${user.user.tag} has been unmuted`)
       .setTimestamp()
        res.save().then(message.channel.send(uembed))
        message.delete()
        user.roles.remove(role)
       
    

    })
    
  }
}