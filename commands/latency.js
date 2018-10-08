const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    let start = Date.now(); message.channel.send(message.channel.id).then(message => {
    let diff = (Date.now() - start);

        let embed = new Discord.RichEmbed()
        .setColor(0xff2f2f)
        .addField(" 📶 Задержка", `${diff}ms`, true)
        message.edit(embed);
    });

}

exports.help = {
    name: 'latency'
}
