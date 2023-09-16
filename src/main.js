const Discord = require("discord.js")
const bot = new Discord.Client({intents: 3243773})
const config = require("./config")

bot.login(config.token)

bot.on("ready", async () => {

    console.log(`${bot.user.tag} est bien en ligne`)
})