
const {
    Client,
    MessageEmbed,
    Collection,
    MessageAttachment
  } = require("discord.js");
  const Discord = require("discord.js");
  const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
  client.setMaxListeners(250)
const rp = require('request-promise');
const request = require("request");
  const mongoose = require("mongoose");
  const roblox = require("noblox.js");

   
  
  mongoose
    .connect(
      `mongodb+srv://PHmcE5EAOaxaFGTb:PHmcE5EAOaxaFGTb@cluster0.4so47.gcp.mongodb.net/test?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err));
    client.on("ready", () =>{
      console.log(client.user.tag + " " + client.user.id)
    })
     require("./functions")(Client);
  
  let Schema = new mongoose.Schema({
    timez:{
      type: String,
      default: Date.now()
    },
    server:{
      type: String,
      default: "666"
    },
    didz:{
      type: String,
      default: "6969696969696969"
    },
    verified:{
      type: Boolean,
      default: false
    },
    rid:{
      type: String,
      default: "none"
    },
    pass:{
      type: String,
      default: 'NO'
    },
    user:{
      type: String,
      default: 'None'
    },
    mreason:{
      type: Array,
      default: 'no reason'
    },
    mtime:{
      type: Array,
      default: Date.now()
    },
    

  })

  
  
  let mute
  try {
    mute = mongoose.model('mute')
  } catch (error) {
    mute = mongoose.model('mute', Schema)
  }
 
  
  module.exports = {
    client: client,
    moot: mute,
    
  };
  
  
  client.login("NzY2NzY5NjEwOTEzMzQ5NjMz.X4oL2Q.rzhq4Rwy2tQM0YAHkEWjn6kdJII")