const Discord = require('discord.js');
const roblox = require('noblox.js')
module.exports = {
  name: "verify",
 

  code(client, message, args, moot) {
    let r = ["burger", "pizza", "good", "cheese", "apple", "pineapple", "orange", "bifes"]

   var random1 = r[Math.floor(Math.random() * r.length)]
   var random2 = r[Math.floor(Math.random() * r.length)]
   var random3 = r[Math.floor(Math.random() * r.length)]
   var random4 = r[Math.floor(Math.random() * r.length)]
   var random5 = r[Math.floor(Math.random() * r.length)]
   var random6 = r[Math.floor(Math.random() * r.length)]
   var random7 = r[Math.floor(Math.random() * r.length)]
   var random8 = r[Math.floor(Math.random() * r.length)]

   let rpass = random1 + " " + random2 + " " + random3 + " " + random4 + " " + random5 + " " + random6 + " " + random7 + " " + random8

    moot.findOne({
      didz: message.author.id,
    }, (err, res) =>{
      if(err) return console.log(err)
      if(!res){
       const bruh = new moot({
          didz: message.author.id,
          pass: rpass,
         
        })
        bruh.save().catch(err => console.log(err))
        return message.reply("Please set this text as your roblox status" + "\n" + "`" + bruh.pass + "`" )
      }
       let g = args.join(" ")
      let rusername = args[0]
      if (!rusername) return message.reply('please provide a proper username!')
      
      if (rusername) {
        roblox.getIdFromUsername(rusername).then(iid => {
          roblox.getPlayerInfo(iid).then(data =>{
            let test = data.status
            let testt = data.blurb
           if(res.verified == false){
             if(test == res.pass || testt == res.pass){
             
               console.log("hi")

             
             res.rid = iid
             res.user = rusername
             res.verified = true
             let embed = new Discord.MessageEmbed()
             .setColor("RED")
             .setTitle("NEW SUCCESSFULL VERIFICATION")
             .addField("User roblox name", rusername)
             .addField("User discord tag", message.author.tag)
  
             client.channels.cache.get("767488841769680896").send(embed)
             message.member.roles.add("699357527648895008")
             res.save().catch(err => console.log(err)).then(message.reply("Congrats you have verified your account!"))
    
             } else{
               message.channel.send("Please set this text as your roblox status" + "\n" + "`" + res.pass + "`" )
             }
             } else{
               message.channel.send('Do you want to change/re-verify your account?').then(msg => {
                 const filter = m => m.author.id == message.author.id;
            msg.channel.awaitMessages(filter, {
              max: 1,
            })
              .then((collected) => {
                if(collected.first().content.toLowerCase().includes("yes")){
                  res.user = "None"
                  res.verified = false
                  res.save()
                  message.reply('Your info has been reset... please reverify to verify your account!')
                   message.member.roles.remove("699357527648895008")
                } else message.channel.send('Reset canceled')

              });
               });
             }
           
          });
        });
      }
    
    })


  }
}