module.exports = {
    name: 'roleclaim',
    description: "дать по щам",
  execute(client) {
    const channelId = '842409612665159692';
    const getEmoji = (emojiName) =>
      client.emojis.cache.find((emoji) => emoji.name === emojiName)
      const emojis = {
        dota2:'dota2',
        csgo:'csgo',
      }

      const reactions = []

      let emojiText = 'Нажми тыкалку\n\n'
      for (const key in emojis) {
        const emoji = getEmoji(key)
        reactions.push(emoji)

        const role = emojis[key]
        emojitext += `${emoji} = ${role}\n`
      }
      const handleReaction = (reaction, user, add) => {
        if (user.id === '490119880297676802') {
          return
        }

        const emoji = reaction._emoji.name

        const { guild } = reaction.MessageEmbed
        const roleName = emojis[emoji]
        if (!roleName) {
          return
        }

        const role = guild.roles.cache.find(role => role.name === roleName)
        const member = guild.members.cache.find(member => member.id === user.id)

        if (add) {
          member.roles.add(role)
        } else {
          member.roles.remove(role)
        }
      }



      client.on('messageReactionAdd', (reaction, user) =>{
        if (reaction.message.channel.id === channelId) {
          handleReaction(reaction, user, true)
        }
      })

      client.on('messageReactionRemove', (reaction, user) =>{
        if (reaction.message.channel.id === channelId) {
          handleReaction(reaction, user, false)
        }
      })
  }

  }
