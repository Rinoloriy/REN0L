const Discord = require('discord.js');
const ytdl = require('ytdl-core');

exports.run = async (bot, message, ges, ops) => {
  if (!message.member.voiceChannel) return message.channel.send('Присоеденитесь к голосовому каналу!');
  if (!message.guild.me.voiceChannel) return message.channel.send('Простите, бот не подключен к голосовому каналу.');
  if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send('Простите вы не подключены к каналу, где находится бот!');
  message.guild.me.voiceChannel.leave();
  message.channel.send('Покидаю канал...');
}
module.exports.help = {
  name: "leave"
}
