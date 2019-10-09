const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  message.delete();
  message.channel.send("```md\n Команды :\n - qrcode <ссылка> : создаёт qr-code по заданной ссылке.\n - cl <число> : очищает чат на заданное количество.\n - createpool <вопрос> : создаёт голосование.\n - stt <текст> : написать от имени бота.\n - time : показывает время по МСК.\n - latency : показывает задержку команд(Debug).\n - help : список команд.\n ------------- \n P.S в начале каждой команды надо писать '~'\n Пример: ~help ```")
}
module.exports.help = {
  name: "help"
}  
