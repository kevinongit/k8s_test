const os = require('os')
const http = require('http')

const port = 8000
let cnt = 0

http.createServer((req, res) => {
  /// don't increment the counter if the favicon.ico is being requested
  if (req.url.toLowerCase() === '/favicon.ico') {
    res.writeHead(200, {'Content-Type': 'image/x-icon'})
    res.end()
    // console.log('favicon requested')
    return
  }

  res.end(`Node Bonkour on ${os.hostname()} ${cnt++} \n`)
}).listen(port)

console.log(`Server running at http://localhost:${port}`)