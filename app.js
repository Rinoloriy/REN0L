const Discord = require('discord.js');

const client = new Discord.Client({partials:["MESSAGE", "CHANNEL", "REACTION"]});

const prefix = "~";

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}

client.on('ready', () => {
	console.log('БОТ ЗАПУЩЕН, ПРЕФИКС "~"');
});
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/));
  const command = args.shift().toLowerCase();
	if (command === 'reactionrole') {
		client.commands.get('reactionrole').execute(Discord, client, args, message);
	} else if (command === 'createpool') {
		client.commands.get('createpool').execute(client, message, args);
	} else if (command === 'stt') {
		client.commands.get('stt').execute(client, message, args);
	} else if (command === 'reactionrole') {
		client.commands.get('reactionrole').execute(client, message, args);
	}

});

client.login(process.env.token);
