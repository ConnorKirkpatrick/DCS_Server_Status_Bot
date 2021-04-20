const Discord = require("discord.js")
const client = new Discord.Client();
const dotenv = require("dotenv").config();

const help = require("./help")
const server = require("./server_monitor")

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if(msg.author.username !== 'DCS_Server_Status'){
        if(msg.content === "kirk-help"){
            help(msg)


        }
        if (msg.content === 'ping') {
            msg.reply('pong');
        }
    }

});

client.login(process.env.token);

let serverData = server((data) =>{
    console.log(data)
})

