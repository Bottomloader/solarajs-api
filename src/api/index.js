export default function handler(req, res) {
  const { functionname } = req.query;

  const functions = {
    applicationCommandCount: () => ({
      info: {
        name: "$applicationCommandCount",
        description: "Returns the number of registered global slash commands.",
        args: "none"
      }
    }),
  };

  if (functions[functionname]) {
    res.status(200).json(functions[functionname]());
  } else {
    res.status(200).json({ error: "Function does not exist" });
  }
}
