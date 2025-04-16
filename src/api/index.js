import functions from '../functions.js';

const rateLimits = new Map();

export default function handler(req, res) {
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

  const { functionname } = req.query;

  if (!functionname) {
    return res.status(400).send("Missing function name parameter.");
  }

  const func = functions[functionname.toLowerCase()];
  if (func) {
    res.status(200).json(func());
  } else {
    res.status(404).json({ error: "Function does not exist" });
  }
}
