const rateLimits = new Map();

export default async function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const now = Date.now();
  const windowMs = 60 * 1000;
  const maxRequests = 5;

  if (!rateLimits.has(ip)) {
    rateLimits.set(ip, []);
  }

  const timestamps = rateLimits.get(ip);
  const recentRequests = timestamps.filter(timestamp => now - timestamp < windowMs);
  
  if (recentRequests.length >= maxRequests) {
    return res.status(429).json({ error: 'Too many requests, please try again later.' });
  }

  recentRequests.push(now);
  rateLimits.set(ip, recentRequests);

  const response = await fetch("https://registry.npmjs.org/@getsolara/solara.js");
  const { 'dist-tags': { latest } } = await response.json();

  res.status(200).json({ info: { name: "Solara.js", version: latest, docs: "https://solara.js.org/", }, });
}
