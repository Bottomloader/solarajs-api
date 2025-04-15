export default async function handler(req, res) {
  const { 'dist-tags': { latest } } = await (await fetch("https://registry.npmjs.org/@getsolara/solara.js")).json();
  res.status(200).json({ info: { name: "Solara.js", version: latest } });
}
