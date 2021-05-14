module.exports = {
    name: 'reactionrole',
    description: "Роль за реакцию",
    async execute(message, args, Discord, client) {
        const channel = '842409612665159692';
        const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "YOUR_ROLE");
        const blueTeamRole = message.guild.roles.cache.find(role => role.name === "YOUR_ROLE");

        const yellowTeamEmoji = 'YOUR_EMOJI';
        const blueTeamEmoji = 'YOUR_EMOJI';

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Выбери роль!')
            .setDescription('Нажми на эмоцию и получи роль!');

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(yellowTeamEmoji);
        messageEmbed.react(blueTeamEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellowTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blueTeamRole);
                }
            } else {
                return;
            }

        });

        client.on('messageReactionRemove', async (reaction, user) => {

            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;


            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blueTeamRole);
                }
            } else {
                return;
            }
        });
    }

}
