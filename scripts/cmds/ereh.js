const fs = require('fs');
module.exports = {
  config: {
    name: "ereh",
    version: "1.0",
    author: "JARiF",
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "no prefix",
    category: "no prefix",
  },
  onStart: async function(){},
  onChat: async function({ event, message, getLang }) {
    if (event.body && event.body.toLowerCase() === "ereh") {
      return message.reply({
        body: "Ereh",
        attachment: fs.createReadStream("ereh.mp3"),
      });
    }
  }
};