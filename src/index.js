require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');
const mongoose = require('mongoose');
const eventHandler = require('./handlers/eventHandler');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
})

eventHandler(client);

client.on('messageCreate', (message) => {
    if (message.author.bot){return;}

    if (message.content.includes("strong")){
        message.channel.send("Did someone say strong...")
    }
    
    else if (message.content.includes("has") && message.content.includes("cancer")){
        message.channel.send("I heard cancer's pretty strong...")
    }
})

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()){return;}

    if (interaction.commandName == "hey"){
        interaction.reply("works")
    }
})

client.login(process.env.TOKEN);