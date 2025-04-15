export default function handler(req, res) {
  const { functionname } = req.query;

  const functions = {
    hi: () => ({
      a: "hi",
      data: {
        idk: "test"
      }
    }),
  };

  if (functions[functionname]) {
    res.status(200).json(functions[functionname]());
  } else {
    res.status(200).json({ error: "Function does not exist" });
  }
}
