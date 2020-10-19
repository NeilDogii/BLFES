const Discord = require('discord.js');
const ms = require("ms")
module.exports = {
  name: "mute",
  description: "eval",
  usage: 'eval [code]',
  category: 'owner only',
  
  
  code(client, message, args, moot) {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.reply(`You cannot use that command!`);
    }
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(m => m.tag == args[0])
    if(!user) return message.reply("Please provide a proper server member who you want to mute!")
    let role = message.guild.roles.cache.find(m => m.name.toLowerCase() == "muted")
    moot.findOne({
        didz: user.user.id

    },(err, res) =>{
        if(err) return console.log(err)
        if(!args[1]) return message.reply("Please provide the mute duration before muting the user!")

        let time = ms(args[1]) + Date.now()
        if(!time) return message.reply("Please provide a proper time")
        let mtime = ms(ms(args[1]), {long: true})

        let reason = args.slice(2).join(" ")
        if(!reason) reason = "No reason"

        if(!res){
            const newDoc = new moot({
                didz: user.user.id,
                timez: time,
                server: message.guild.id,
                mreason: reason + " | " + mtime,
                
        })
        let membed = new Discord.MessageEmbed()
       .setColor("RED")
        .addField(`${message.author.tag} has muted ${user.user.tag}`,` ${mtime} | ${reason} `)
       .setThumbnail(user.user.displayAvatarURL())
       .setTimestamp()

        newDoc.save().then(message.channel.send(membed))
        message.delete()
        let uembed = new Discord.MessageEmbed()
       .setColor("RED")
        .setTitle(`You has been muted for ${mtime} in ${message.guild.name}`)
       .setTimestamp()
        user.send(uembed)
         return user.roles.add(role)
    }
    

        res.timez = time
       res.mreason.push(reason + " | " + mtime)
      res.server = message.guild.id
        let membed = new Discord.MessageEmbed()
       .setColor("RED")
      .addField(`${message.author.tag} has muted ${user.user.tag}`,` ${mtime} | ${reason} `)
       .setThumbnail(user.user.displayAvatarURL())
       .setTimestamp()
       

        res.save().then(message.channel.send(membed))
        message.delete()
        let uembed = new Discord.MessageEmbed()
       .setColor("RED")
       .setTitle(`You have been muted for ${mtime} in ${message.guild.name}`)
       .setTimestamp()
        user.send(uembed)
        user.roles.add(role)

         let log = new Discord.MessageEmbed()
       .setColor("RED")
       .setTitle(`member has been muted`)
       .addField(`${message.author.tag} has muted ${user.user.tag}`,` ${mtime} | ${reason} `)
       .setTimestamp()
        user.roles.add(role)

       let chan = client.channels.cache.get("756551241957507182")
       if(chan){
         chan.send(log)
       }
       
        console.log(time + " , " + mtime + " , " + reason)

    })
    
  }
}