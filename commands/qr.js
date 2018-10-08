const qrcode = require("qrcode");
const tempy = require("tempy");
module.exports.run = async (bot, message, args) => {
    message.delete();
    const qrOutput = tempy.file({ extension: "png" });
    message.channel.startTyping();
    if (args.length > 0) {
        qrcode.toFile(qrOutput, args.join(" "), { margin: 1 }, (error) => {
            if (error) throw new Error(error);
            message.channel.stopTyping();
            message.channel.send({
                files: [{
                    attachment: qrOutput,
                    name: "qr.png"
                }]
            });
        });
    }else{
        message.channel.stopTyping();
        message.reply("Ты чо пёс?");
    }
}

module.exports.help = {
  name: "qrcode"
}
