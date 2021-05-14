module.exports = {
    name: 'cl',
    description: "удалить сообщения",
   async  execute(message, args) {
        if (!args[0]) return message.reply("Напишите количство сообщений для удалений");

        if(isNaN(args[0])) return message.reply("Напишите натурально число");

        if(args[0] > 100) return message.reply("Нельзя удалить больше 100 сообщений");

        if(args[0] < 1) return message.reply("Сообщения не были удалены");

        await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
    });

 }
}
