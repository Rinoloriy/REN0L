module.exports = {
  name: 'reactionrole',
  description:"Устанавливает роль по реакции",

  async execute(message, args, Discord, client) {
  const channel = '842409612665159692';
 const dota = message.guild.roles.cache.find(role => role.name === '842484973386727485');
  const csgo = message.guild.roles.cache.find(role => role.name === '842752300941836369');
  const r6s = message.guild.roles.cache.find(role => role.name === '842484991580831824');
  const valorant = message.guild.roles.cache.find(role => role.name === '842490577504305202');
  const brawlstars = message.guild.roles.cache.find(role => role.name === '842490502149701683');
  const hoi = message.guild.roles.cache.find(role => role.name === '842752353676951612');
  const stellaris = message.guild.roles.cache.find(role => role.name === '842752403253362739');
  const pubg = message.guild.roles.cache.find(role => role.name === '842490498127495189');
  const lol = message.guild.roles.cache.find(role => role.name === '842769992935538699');
    
  const dotaimg = '842771650880864256';
  const csgoimg = '842771650880864256';
  const r6simg = '842771650880864256';
  const valorantimg = '842771650880864256';
  const brawlstarsimg = '842771650880864256';
  const hoiimg = '842771650880864256';
  const stellarisimg = '842771650880864256';
  const pubgimg = '842771650880864256';
  const lolimg = '842771650880864256';


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
