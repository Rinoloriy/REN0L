const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed1 = new Discord.RichEmbed()
    .setDescription("`Информация по серверу`")
    .setThumbnail(sicon)
    .addField("Название Сервера ", message.guild.name)
    .addField("Участников ", message.guild.memberCount);
    message.delete();
    message.channel.send(serverembed1);
}

module.exports.help = {
  name:"serverinfo"
}
