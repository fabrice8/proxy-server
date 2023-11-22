const proxy = require('cors-anywhere')

// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || '0.0.0.0'
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 9876

proxy
.createServer({
  originWhitelist: [],
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2']
})
.listen( port, host, () => console.log(`Running CORS Proxy on ${host}:${port}`) )