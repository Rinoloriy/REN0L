module.exports = {
  name: 'reactionrole',
  description:"Устанавливает роль по реакции",

  async execute(message, args, Discord, client) {
  var channel = '842409612665159692';
  var dota = message.guild.roles.cache.find(role => role.name === "dota2");
  var csgo = message.guild.roles.cache.find(role => role.name === "csgo");
  var r6s = message.guild.roles.cache.find(role => role.name === "r6s");
  var valorant = message.guild.roles.cache.find(role => role.name === "valorant");
  var brawlstars = message.guild.roles.cache.find(role => role.name === "brawlstars");
  var hoi = message.guild.roles.cache.find(role => role.name === "hoi");
  var stellaris = message.guild.roles.cache.find(role => role.name === "stellaris");
  var pubg = message.guild.roles.cache.find(role => role.name === "pubg");
  var lol = message.guild.roles.cache.find(role => role.name === "lol");

  var dotaimg = '842771650880864256';
  var csgoimg = '842771650880864256';
  var r6simg = '842771650880864256';
  var valorantimg = '842771650880864256';
  var brawlstarsimg = '842771650880864256';
  var hoiimg = '842771650880864256';
  var stellarisimg = '842771650880864256';
  var pubgimg = '842771650880864256';
  var lolimg = '842771650880864256';


  let embed = new discord.MessageEmbed()
    .setColor('#e62cd3')
    .setTitle('Выбор роли')
    .setDescription('Выберите игру для который вы хотите открыть каналы!');

    let MessageEmbed = await message.channel.send(embed);
    MessageEmbed.react(dotaimg);
    MessageEmbed.react(csgoimg);
    MessageEmbed.react(r6simg);
    MessageEmbed.react(valorantimg);
    MessageEmbed.react(brawlstarsimg);
    MessageEmbed.react(stellarisimg);
    MessageEmbed.react(pubgimg);
    MessageEmbed.react(lolimg);

    client.on('messageReactionAdd', async (reaction, user) => {
      if(reaction.message.partial) await reaction.message.fetch();
      if(reaction.partial) await reaction.fetch();
      if(user.bot) return;
      if(!reaction.message.guild) return;
      if(reaction.message.channel.id === channel) {
        if (reaction.emoji.name === dotaimg) {
          await reaction.message.guild.members.cache.get(user.id).roles.add(dota);
        }
        if (reaction.emoji.name === csgoimg) {
          await reaction.message.guild.members.cache.get(user.id).roles.add(csgo);
        }
        if (reaction.emoji.name === r6simg) {
          await reaction.message.guild.members.cache.get(user.id).roles.add(r6s);
        }
        if (reaction.emoji.name === valorantimg) {
          await reaction.message.guild.members.cache.get(user.id).roles.add(valorant);
        }
        if (reaction.emoji.name === brawlstarsim) {
          await reaction.message.guild.members.cache.get(user.id).roles.add(brawlstars);
        }
        if (reaction.emoji.name === hoiimg) {
          await reaction.message.guild.members.cache.get(user.id).roles.add(hoi);
        }
        if (reaction.emoji.name === stellarisimg) {
          await reaction.message.guild.members.cache.get(user.id).roles.add(stellaris);
        }
        if (reaction.emoji.name === pubgimg) {
          await reaction.message.guild.members.cache.get(user.id).roles.add(pubg);
        }
        if (reaction.emoji.name === lolimg) {
          await reaction.message.guild.members.cache.get(user.id).roles.add(lol);
        }
      } else {
        return;
      }
    });
  }
}
