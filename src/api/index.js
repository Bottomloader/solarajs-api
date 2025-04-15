export default function handler(req, res) {
  const { functionname } = req.query;

  const functions = {
    applicationcommandcount: () => ({
      info: {
        name: "$applicationCommandCount",
        description: "Returns the number of registered global slash commands.",
        args: "none",
        alias: "none"
      }
    }),
    applicationcommandlist: () => ({
      info: {
        name: "$applicationCommandList",
        description: "Returns a semicolon-separated list of registered global slash command names.",
        args: "none",
        alias: "none"
      }
    }),
    applicationownerid: () => ({
      info: {
        name: "$applicationOwnerID",
        description: "Returns the user ID of the application owner.",
        args: "none",
        alias: "none"
      }
    }),
    botavatar: () => ({
      info: {
        name: "$botAvatar",
        description: "Returns the bot's avatar URL.",
        args: "none",
        alias: "none"
      }
    }),
    botguildscount: () => ({
      info: {
        name: "$botGuildsCount",
        description: "Returns the number of guilds the bot is in.",
        args: "none",
        alias: "none"
      }
    }),
    botid: () => ({
      info: {
        name: "$botID",
        description: "Returns the bot's user ID.",
        args: "none",
        alias: "$clientID"
      }
    }),
    clientid: () => ({
      info: {
        name: "$clientID",
        description: "Returns the bot's user ID.",
        args: "none",
        alias: "$botID"
      }
    }),
  };

  if (functions[functionname.toLowerCase()]) {
    res.status(200).json(functions[functionname.toLowerCase()]());
  } else {
    res.status(200).json({ error: "Function does not exist" });
  }
}
