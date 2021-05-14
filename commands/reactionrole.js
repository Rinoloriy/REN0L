module.exports = {
    name: 'reactionrole',
    description: "Роль за реакцию",
    async execute(message, args, Discord, client) {
        const channel = '842409612665159692';

        const dota2role = '842484973386727485';
        const csgorole = '842752300941836369';

        const dota2em = '842481768871100476';
        const csgoem = '842759269690245140';

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Выбери роль!')
            .setDescription('Нажми на эмоцию и получи роль!');

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(dota2em);
        messageEmbed.react(csgoem);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === dota2em) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(dota2role);
                }
                if (reaction.emoji.name === csgoem) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(csgorole);
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
                if (reaction.emoji.name === dota2em) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(dota2role);
                }
                if (reaction.emoji.name === csgoem) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(csgorole);
                }
            } else {
                return;
            }
        });
    }

}
