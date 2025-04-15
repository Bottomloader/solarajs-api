export default function handler(req, res) {
  res.status(200).json({ info: { name: "Solara.js", version: "0.0.1" } });
}
