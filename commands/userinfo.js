const Discord = require('discord.js');

module.exports = {
  name: "userinfo",
  description: "shows the avatar and info about the mentioned user / command user",
  aliases: ['whois', 'userinformation'],
  usage: '<mention>',
  category: 'fun',

  code(client, message, args, moot) {
    
    var user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!user) {
      user = message.guild.members.cache.get(message.author.id)
    }
    moot.findOne({
        didz: user.user.id

    },(err, res) =>{
        if(err) return console.log(err)
        let name;
        if(!res) name = "None"
        if(res) name = res.user
        
   
   let embed = new Discord.MessageEmbed()
    .setColor(`RED`)
		.addField("Username", user.user.tag)
		.addField("ID", user.id)
    .addField("ROBLOX username", name || "Not verifed yet") 
		.addField("Status", user.presence.status)
		.addField("Account Created On", user.user.createdAt)
    .addField('Joined at:', user.joinedAt)
    .addField('Roles:', user.roles.cache.map(r => `${r}`), true)
		.setThumbnail(user.user.displayAvatarURL())
		message.channel.send(embed)
    
    });
    
}
  }