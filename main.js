const Discord = require("discord.js")
const client = new Discord.Client();
const dotenv = require("dotenv").config();


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if(msg.author.username != 'DCS_Server_Status'){
        console.log(msg.guild.name)
        console.log(msg.author.username)
        if (msg.content === 'ping') {
            msg.reply('pong');
        }
    }

});

client.login(process.env.token);