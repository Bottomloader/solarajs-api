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
  botinviteurl: () => ({
    info: {
      name: "$botInviteURL",
      description: "Generates the bot's invite URL with specified permissions using either a bitfield number or permission names.",
      args: "[permissionBitfield or permName1;permName2...?]",
      alias: "none"
    }
  }),
  botleave: () => ({
    info: {
      name: "$botLeave",
      description: "Makes the bot leave the specified guild.",
      args: "[guildID]",
      alias: "none"
    }
  }),
  botname: () => ({
    info: {
      name: "$botName",
      description: "Returns the bot's username.",
      args: "none",
      alias: "none"
    }
  }),
  botping: () => ({
    info: {
      name: "$botPing",
      description: "Returns websocket ping in milliseconds.",
      args: "none",
      alias: "$ping"
    }
  }),
  ping: () => ({
    info: {
      name: "$ping",
      description: "Returns websocket ping in milliseconds.",
      args: "none",
      alias: "$botPing"
    }
  }),
  botpresenceactivityname: () => ({
    info: {
      name: "$botPresenceActivityName",
      description: "Returns the name of the bot's current primary activity.",
      args: "none",
      alias: "none"
    }
  }),
  botpresenceactivitytype: () => ({
    info: {
      name: "$botPresenceActivityType",
      description: "Returns the type of the bot's current primary activity (like Playing, Watching, etc.).",
      args: "none",
      alias: "none"
    }
  }),
  botpresencestatus: () => ({
    info: {
      name: "$botPresenceStatus",
      description: "Returns the bot's current presence status (like online, idle, etc.).",
      args: "none",
      alias: "none"
    }
  }),
  bottags: () => ({
    info: {
      name: "$botTags",
      description: "Returns semicolon-separated application tags.",
      args: "none",
      alias: "none"
    }
  }),
};

export default functions;
