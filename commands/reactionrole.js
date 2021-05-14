module.exports = {
    name: 'reactionrole',
    description: "Роль за реакцию",
    async execute(message, args, Discord, client) {
        const channel = '842409612665159692';
        const dota2role = message.guild.roles.cache.find(role => role.name === "dota2");
        const csgorole = message.guild.roles.cache.find(role => role.name === "csgo");

        const dota2em = client.emojis.get("842830675974815744");
        const csgoem = client.emojis.get("842830675974815744");

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
