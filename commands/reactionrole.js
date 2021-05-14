const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  const channel = '842409612665159692';
  const dota = message.guild.roles.cache.find(role => role.name === "dota 2");
  const csgo = message.guild.roles.cache.find(role => role.name === "csgo");
  const r6s = message.guild.roles.cache.find(role => role.name === "r6s");
  const valorant = message.guild.roles.cache.find(role => role.name === "valorant");
  const brawlstars = message.guild.roles.cache.find(role => role.name === "brawlstars");
  const hoi = message.guild.roles.cache.find(role => role.name === "hoi");
  const stellaris = message.guild.roles.cache.find(role => role.name === "stellaris");
  const pubg = message.guild.roles.cache.find(role => role.name === "pubg");
  const lol = message.guild.roles.cache.find(role => role.name === "lol");

  const dotaimg = '842771650880864256';
  const csgoimg = '842771650880864256';
  const r6simg = '842771650880864256';
  const valorantimg = '842771650880864256';
  const brawlstarsimg = '842771650880864256';
  const hoiimg = '842771650880864256';
  const stellarisimg = '842771650880864256';
  const pubgimg = '842771650880864256';
  const lolimg = '842771650880864256';

  let embed = new Discord.MessageEmbed()
    .setColor('#e62cd3')
    .setTitle('Выбор роли')
    .setDescription('Выберите игру для который вы хотите открыть каналы!');

    let MessageEmbed = await message.channel.send(embed);
    messageEmbed.react(dotaimg);
    messageEmbed.react(csgoimg);
    messageEmbed.react(r6simg);
    messageEmbed.react(valorantimg);
    messageEmbed.react(brawlstarsimg);
    messageEmbed.react(stellarisimg);
    messageEmbed.react(pubgimg);
    messageEmbed.react(lolimg);

    client.on('messageReactionAdd'), async(reaction, user) => {
      if(reaction.message.partial) await reaction.message.fetch();
      if(reaction.partial) await reaction.fetch();
      if(user.bot) return;
      if(!reaction.message.guild) return;
      if(reaction.message.channel.id === channel) {
        if (reaction.emoji.name === dotaimg) {
          await reaction.message.guild.members.cache.get(user.id).roles.add(dota)
        }
        if (reaction.emoji.name === csgoimg) {
          await reaction.message.guild.members.cache.get(user.id).roles.add(csgo)
        }
        if (reaction.emoji.name === r6simg) {
          await reaction.message.guild.members.cache.get(user.id).roles.add(r6s)
        }
        if (reaction.emoji.name === valorantimg) {
          await reaction.message.guild.members.cache.get(user.id).roles.add(valorant)
        }
        if (reaction.emoji.name === brawlstarsim) {
          await reaction.message.guild.members.cache.get(user.id).roles.add(brawlstars)
        }
        if (reaction.emoji.name === hoiimg) {
          await reaction.message.guild.members.cache.get(user.id).roles.add(hoi)
        }
        if (reaction.emoji.name === stellarisimg) {
          await reaction.message.guild.members.cache.get(user.id).roles.add(stellaris)
        }
        if (reaction.emoji.name === pubgimg) {
          await reaction.message.guild.members.cache.get(user.id).roles.add(pubg)
        }
        if (reaction.emoji.name === lolimg) {
          await reaction.message.guild.members.cache.get(user.id).roles.add(lol)
        }
      } else {
        return;
      }
    }
}
module.exports.help = {
  name:"reactionrole"
}
