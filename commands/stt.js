module.exports = {
  name: 'stt',
  description:"отправляет говно",

async execute (client, message, args) {
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);
}

}
