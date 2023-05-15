const os = require('os')
const http = require('http')

const port = 8000
let cnt = 0
const version = 'v2'

http.createServer((req, res) => {
  /// don't increment the counter if the favicon.ico is being requested
  if (req.url.toLowerCase() === '/favicon.ico') {
    res.writeHead(200, {'Content-Type': 'image/x-icon'})
    res.end()
    // console.log('favicon requested')
    return
  } else if (req.url.toLowerCase() === '/version') {
    res.end(`version : ${version}\n`)
    return
  } else if (req.url.toLowerCase() === '/die3') {
    console.log(`kill signal ignited`)
    setTimeout(() => {
      console.log('bye! zaijian..')
      process.exit(1)
    }, 3000);
    res.end(`Server ${os.hostname()} will be dead soon enough.\n`)
    return
  } else if (req.url.toLowerCase() === '/') {
    res.end(`Hello !! ${os.hostname()}, count = ${cnt++} \n`)

    return
  }

  res.end(`${req.url} is unknown.\n`)

}).listen(port)

console.log(`Server running at http://localhost:${port}`)