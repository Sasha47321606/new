const Discord = require("discord.js");

const client = new Discord.Client();

client.login("NzI0MzQ4NjMxMTkyMzA1ODI3.Xu-70A.TJ296Elk4u5DTGvFjTjgUun7xwc");

client.on("message", (message) => {
	if(message.content == "!donate") {
		message.reply("VIP,CREATIVE,ADMIN,LORD,ANTI-GRIF,SOZDATEL,YOUTUBE,VLADEL,CONSOLE! :wave:");
	}
});
client.on("message", (message) => {
		if(message.content == "!author") {
		message.reply("Создатель бота это создатель сервера и группы Blackpled! :wave:");
	}
});