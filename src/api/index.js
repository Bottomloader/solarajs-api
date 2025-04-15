export default function handler(req, res) {
  const { functionname } = req.query;

  const functions = {
    applicationcommandcount: () => ({
      info: {
        name: "$applicationCommandCount",
        description: "Returns the number of registered global slash commands.",
        args: "none"
      }
    }),
    applicationcommandlist: () => ({
      info: {
        name: "$applicationCommandList",
        description: "Returns a semicolon-separated list of registered global slash command names.",
        args: "none"
      }
    }),
    applicationownerid: () => ({
      info: {
        name: "$applicationOwnerID",
        description: "Returns the user ID of the application owner.",
        args: "none"
      }
    }),
  };

  if (functions[functionname.toLowerCase()]) {
    res.status(200).json(functions[functionname.toLowerCase()]());
  } else {
    res.status(200).json({ error: "Function does not exist" });
  }
}
