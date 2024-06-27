const aoijs = require("aoi.js");

const bot = new aoijs.AoiClient({
  token: "MTE2MzkwOTg2MDUyMjQ2NzQ1MQ.GEJ4Pg.C_TgVmhGsT0VzAMKBo-WLVT2rWENBC-vhuVxhw",
  prefix: "!",
  intents: ["GUILDS", "GUILD_MESSAGES"]
});

bot.onMessage(); // Permite que o bot responda às mensagens

// Comando simples de exemplo
bot.command({
  name: "ping",
  code: `Pong! \`$ping\` ms`
});

// Eventos
bot.readyCommand({
  channel: "",
  code: `$log[Bot está online!]`
});
