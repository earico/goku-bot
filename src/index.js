require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
})

client.on('ready', (c) => {
    console.log("Goku has arrived.");
})

client.on('messageCreate', (message) => {
    if (message.author.bot){return;}

    if (message.content.includes("strong")){
        message.channel.send("Did someone say strong...")
    }  
})

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()){return;}

    if (interaction.commandName == "hey"){
        interaction.reply("works?")
    }
})

client.login(process.env.TOKEN);