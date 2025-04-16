const functions = {
  applicationcommandcount: () => ({
    info: {
      name: "$applicationCommandCount",
      description: "Returns the number of registered global slash commands.",
      args: "none",
      alias: "none",
      category: "Core & Bot Info"
    }
  }),
  applicationcommandlist: () => ({
    info: {
      name: "$applicationCommandList",
      description: "Returns a semicolon-separated list of registered global slash command names.",
      args: "none",
      alias: "none",
      category: "Core & Bot Info"
    }
  }),
  applicationownerid: () => ({
    info: {
      name: "$applicationOwnerID",
      description: "Returns the user ID of the application owner.",
      args: "none",
      alias: "none",
      category: "Core & Bot Info"
    }
  }),
  botavatar: () => ({
    info: {
      name: "$botAvatar",
      description: "Returns the bot's avatar URL.",
      args: "none",
      alias: "none",
      category: "Core & Bot Info"
    }
  }),
  botguildscount: () => ({
    info: {
      name: "$botGuildsCount",
      description: "Returns the number of guilds the bot is in.",
      args: "none",
      alias: "none",
      category: "Core & Bot Info"
    }
  }),
  botid: () => ({
    info: {
      name: "$botID",
      description: "Returns the bot's user ID.",
      args: "none",
      alias: "$clientID",
      category: "Core & Bot Info"
    }
  }),
  clientid: () => ({
    info: {
      name: "$clientID",
      description: "Returns the bot's user ID.",
      args: "none",
      alias: "$botID",
      category: "Core & Bot Info"
    }
  }),
  botinviteurl: () => ({
    info: {
      name: "$botInviteURL",
      description: "Generates the bot's invite URL with specified permissions using either a bitfield number or permission names.",
      args: "[permissionBitfield or permName1;permName2...?]",
      alias: "none",
      category: "Core & Bot Info"
    }
  }),
  botleave: () => ({
    info: {
      name: "$botLeave",
      description: "Makes the bot leave the specified guild.",
      args: "[guildID]",
      alias: "none",
      category: "Core & Bot Info"
    }
  }),
  botname: () => ({
    info: {
      name: "$botName",
      description: "Returns the bot's username.",
      args: "none",
      alias: "none",
      category: "Core & Bot Info"
    }
  }),
  botping: () => ({
    info: {
      name: "$botPing",
      description: "Returns websocket ping in milliseconds.",
      args: "none",
      alias: "$ping",
      category: "Core & Bot Info"
    }
  }),
  ping: () => ({
    info: {
      name: "$ping",
      description: "Returns websocket ping in milliseconds.",
      args: "none",
      alias: "$botPing",
      category: "Core & Bot Info"
    }
  }),
  botpresenceactivityname: () => ({
    info: {
      name: "$botPresenceActivityName",
      description: "Returns the name of the bot's current primary activity.",
      args: "none",
      alias: "none",
      category: "Core & Bot Info"
    }
  }),
  botpresenceactivitytype: () => ({
    info: {
      name: "$botPresenceActivityType",
      description: "Returns the type of the bot's current primary activity (like Playing, Watching, etc.).",
      args: "none",
      alias: "none",
      category: "Core & Bot Info"
    }
  }),
  botpresencestatus: () => ({
    info: {
      name: "$botPresenceStatus",
      description: "Returns the bot's current presence status (like online, idle, etc.).",
      args: "none",
      alias: "none",
      category: "Core & Bot Info"
    }
  }),
  bottags: () => ({
    info: {
      name: "$botTags",
      description: "Returns semicolon-separated application tags.",
      args: "none",
      alias: "none",
      category: "Core & Bot Info"
    }
  }),
  bottoken: () => ({
    info: {
      name: "$botToken",
      description: "Returns redacted bot token string.",
      args: "none",
      alias: "none",
      category: "Core & Bot Info"
    }
  }),
  bottyping: () => ({
    info: {
      name: "$botTyping",
      description: "Makes the bot start typing in the current or specified channel. Duration is limited.",
      args: "[channelID?]",
      alias: "none",
      category: "Core & Bot Info"
    }
  }),
  botuserscount: () => ({
    info: {
      name: "$botUsersCount",
      description: "Returns the total number of users the bot can see in its cache.",
      args: "none",
      alias: "none",
      category: "Core & Bot Info"
    }
  }),
  changebotavatar: () => ({
    info: {
      name: "$changeBotAvatar",
      description: "Changes bot avatar using the provided image URL.",
      args: "[imageURL]",
      alias: "none",
      category: "Core & Bot Info"
    }
  }),
  changebotstatus: () => ({
    info: {
      name: "$changeBotStatus",
      description: "Changes bot presence using the specified status, activity type, activity name, and optional stream URL for streaming status.",
      args: "[status;activityType;activityName;streamURL?]",
      alias: "none",
      category: "Core & Bot Info"
    }
  }),
  changebotusername: () => ({
    info: {
      name: "$changeBotUsername",
      description: "Changes bot username to the provided name.",
      args: "[newUsername]",
      alias: "none",
      category: "Core & Bot Info"
    }
  }),
  getclientdata: () => ({
    info: {
      name: "$getClientData",
      description: "Gets a client configuration property by its name. (May be specific to certain setups)",
      args: "[property]",
      alias: "none",
      category: "Core & Bot Info"
    }
  }),
  developers: () => ({
    info: {
      name: "$developers",
      description: "Returns the list of Solara developers (p61s, iv.aylo).",
      args: "none",
      alias: "none",
      category: "Core & Bot Info"
    }
  }),
  djsversion: () => ({
    info: {
      name: "$djsVersion",
      description: "Returns the installed discord.js version.",
      args: "none",
      alias: "none",
      category: "Core & Bot Info"
    }
  }),
  functioninfo: () => ({ // Ballerina Cappucina (i was bored ok?)
    info: {
      name: "$functionInfo",
      description: "Returns information about a specific function.", // It uses this api btw ;3
      args: "[function]", // Idk why the docs doesnt provide this
      alias: "none",
      category: "Core & Bot Info"
    }
  }),
  isverifiedbot: () => ({
    info: {
      name: "$isVerifiedBot",
      description: "Checks if the bot is verified (returns true or false).",
      args: "none",
      alias: "none",
      category: "Core & Bot Info"
    }
  }),
  nodeversion: () => ({
    info: {
      name: "$nodeVersion",
      description: "Returns the running Node.js version.",
      args: "none",
      alias: "none",
      category: "Core & Bot Info"
    }
  }),
  packageversion: () => ({
    info: {
      name: "$packageVersion",
      description: "Returns the current version of the Solara package.",
      args: "none",
      alias: "none",
      category: "Core & Bot Info"
    }
  }),
  shardcount: () => ({
    info: {
      name: "$shardCount",
      description: "Returns the total number of shards for the bot (usually 1 if not sharded).",
      args: "none",
      alias: "none",
      category: "Core & Bot Info"
    }
  }),
  shardid: () => ({
    info: {
      name: "$shardID",
      description: "Returns the ID of the current shard (usually 0 if not sharded).",
      args: "none",
      alias: "none",
      category: "Core & Bot Info"
    }
  }),
  uptime: () => ({
    info: {
      name: "$uptime",
      description: "Returns the bot's uptime in milliseconds.",
      args: "none",
      alias: "none",
      category: "Core & Bot Info"
    }
  }),
};

export default functions;
