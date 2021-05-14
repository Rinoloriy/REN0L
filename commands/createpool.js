module.exports = {
  name: 'stt',
  description:"отправляет сообщения",
execute async(client, message, args) {

  if (!message.member.roles.find("name", "@everyone")) {
  		message.channel.send('Недостаточно прав');
  		return;
  	}

      if (!args[0]) return message.channel.send('Использование: createpool <вопрос>!');

      const embed = new Discord.RichEmbed()
          .setColor("#cc33ff")
          .setDescription(args.join(' '))
          .setTitle(`Голосование создано ${message.author.username}`);

      let msg = await message.channel.send(embed)
          .then(function (msg) {
              msg.react("❎");
              msg.react("✅");
              message.delete({timeout: 1000});
              }).catch(function(error) {
              console.log(error);
          });
    }

}
