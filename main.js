const { Client, GatewayIntentBits } = require('discord.js')
require('dotenv').config()

const client = new Client({
    intents: [GatewayIntentBits.Guilds,
              GatewayIntentBits.GuildMembers
    ]
})

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.get(process.env.CHANNEL_ID)
    if (channel) {
        channel.send(`Bem-vindo ao servidor, ${member.user.username}`)
    }
})

client.login(process.env.DISCORD_TOKEN)