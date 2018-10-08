const Discord = require('discord.js');
const ytdl = require('ytdl-core');

exports.run = async (bot, message, ges, ops) => {
  if (!message.member.voiceChannel) return message.channel.send('Присоеденитесь к голосовому каналу!').then(msg => msg.delete(2000));
  if (!message.guild.me.voiceChannel) return message.channel.send('Простите, бот не подключен к голосовому каналу.').then(msg => msg.delete(2000));
  if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send('Простите вы не подключены к каналу, где находится бот!').then(msg => msg.delete(2000));
  message.guild.me.voiceChannel.leave();
  message.channel.send('Покидаю канал...').then(msg => msg.delete(2000));
}
module.exports.help = {
  name: "leave"
}
