# solarajs-api
---

## Endpoint
The base url is
```
https://solarajs-api.vercel.app/api
```

#### GET ?functionname=
Returns info about a function.

**Example:**<br>
`https://solarajs-api.vercel.app/api/?functionname=clientid` will return
```
{"info":{"name":"$clientID","description":"Returns the bot's user ID.","args":"none","alias":"$botID"}}
```

#### GET /about
Returns more about the package.

**Example:**<br>
`https://solarajs-api.vercel.app/api/about` will return
```
{"info":{"name":"Solara.js","version":"0.0.1"}}
```
*This example is probably outdated!*

#### GET /exists/?functionname=
Returns more about the package.

**Example:**<br>
`https://solarajs-api.vercel.app/api/exists/?functionname=clientid` will return
```
{"message":true}
```

---
Contributions (pull requests) are **not welcome**. This is a personal work of myself and I will never accept prs.