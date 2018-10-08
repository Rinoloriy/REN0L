const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  message.delete();
  const today = new Date()
  let Day = today.toString().split(" ")[0].concat("day");
let Month = today.toString().split(" ")[1]
let Year = today.toString().split(" ")[3]
  const embed = new Discord.RichEmbed()
      .setColor(`RANDOM`)
.addField("Сегодня", `\`${Day}\` \`${Month}\` \`${Year}\` \n\`Время(МСК):\` \`${today.toString().split(" ")[4]}\``)
message.channel.send({ embed })
}
module.exports.help = {
  name: "time"
}
