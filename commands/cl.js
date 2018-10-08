const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (isNaN(args[0])) return message.channel.send('`ВВЕДИТЕ ЧИСЛО`');
  if (args[0] > 100) return message.channel.send('`ВВЕДИТЕ ЧИСЛО МЕНЬШЕ 100`');
  if(!args[0]) return message.channel.send("`ВВЕДИТЕ ЧИСЛО`");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Удалено ${args[0]} сообщений.`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "cl"
}
