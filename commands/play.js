const Discord = require('discord.js');
const ytdl = require('ytdl-core');

exports.run = async (bot, message, ges, ops, msg) => {
    if (!message.member.voiceChannel) return message.channel.send('Присоеденитесь к голосовому каналу.').then(msg => msg.delete(2000));
    if (message.guild.me.voiceChannel) return message.channel.send('Бот уже в голосовом канале').then(msg => msg.delete(2000));
    if (!ges[0]) return message.channel.send('Введите ссылку').then(msg => msg.delete(2000));

    let validate = await ytdl.validateURL(ges[0]);
    if (!validate) return message.channel.send('Введите `действующую` ссылку!').then(msg => msg.delete(2000));

    let info = await ytdl.getInfo(ges[0]);
    let connection = await message.member.voiceChannel.join();
    let dispatcher = await connection.playStream(ytdl(ges[0], {
        filter: 'audioonly'
    }));

    message.channel.send(`Сейчас играет: ${info.title}`).then(msg => msg.delete(2000));
};
module.exports.help = {
  name: "play"
}
