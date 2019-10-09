const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let kickMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!kickMember) return message.channel.send("Пользователь не найден").then(msg => msg.delete(2000)) ;

let reason = args.slice(1).join(" ");
if(!reason) reason = "Нету причины!";

kickMember.kick();
  
message.channel.send(`Произошёл кик... Помянем.`).then(msg => msg.delete(2000));

}

module.exports.help = {
  name: "kick"
}
