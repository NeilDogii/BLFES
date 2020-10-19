const Discord = require('discord.js')
const {client, moot} = require('../index');
const fs = require("fs-extra");
const prefix = "%"
 //apex is gai
client.on("ready", ready =>{
 
  setInterval(() => {
    moot.findOne({
       timez: {$lt : Date.now()}
     },
       function(err, res) {
    if (err) {
     console.log(err)
    }
       if(!res) return;
        let guild = client.guilds.cache.get("767490698051977227")
       if(!guild) return;
       let user = client.guilds.cache.get("767490698051977227").members.cache.get(res.didz)
       if(!user) return;
       let role = client.guilds.cache.get("767490698051977227").roles.cache.find(m => m.name.toLowerCase() == "muted")
       if(!role) return;
       user.roles.remove(role)
       res.timez = "no"
       res.save().catch(err => console.log(err))
       
            })
 
      }, 5000)
   
})