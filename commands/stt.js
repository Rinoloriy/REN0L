module.exports = {
  name: 'stt',
  description:"отправляет говно",

execute(client, message, args) {
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);
}

}
