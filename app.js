const prefix = "~";
const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
bot.commands = new Discord.Collection();



fs.readdir('./commands/', (err, files) => {
	if (err)
		console.error(err);
	let jsfiles = files.filter(f => f.split('.')
		.pop() === 'js');
	if (jsfiles.length <= 0) {
		console.log('Нет такой команды');
		return;
	}
	console.log(`Загружено ${files.length} Команд`);
	jsfiles.forEach(f => {
		let props = require(`./commands/${ f }`);
		props.fileName = f;
		bot.commands.set(props.help.name, props);
	});
});


bot.on('message', async message => {
  let msg = message.content.toLowerCase() || message.content.toUpperCase();
  if (!msg.startsWith(prefix)) return;
  if(message.author.bot) return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
  let ges = message.content.slice(prefix.length).trim().split(' ');
  let ops = {
	ownerID: 402419394128379925
   };



});



bot.on('ready', () => console.log('БОТ ЗАПУЩЕН, ПРЕФИКС "~"'));

bot.login(process.env.token);
