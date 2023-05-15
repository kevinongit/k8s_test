const os = require('os')
const http = require('http')
const chalk = require('chalk')

const port = 8000
let cnt = 0
const version = 'v3'

http.createServer((req, res) => {
  /// don't increment the counter if the favicon.ico is being requested
  if (req.url.toLowerCase() === '/favicon.ico') {
    res.writeHead(200, {'Content-Type': 'image/x-icon'})
    res.end()
    // console.log('favicon requested')
    return
  } else if (req.url.toLowerCase() === '/version') {
    res.end(`version : ${version}\n`)
    console.log(chalk.green(`version(${version}) requested`))
    return
  } else if (req.url.toLowerCase() === '/die3') {
    console.log(chalk.red(`${os.hostname()} : kill signal ignited`))
    setTimeout(() => {
      console.log('bye! zaijian..')
      process.exit(1)
    }, 3000);
    res.end(`Server ${os.hostname()} will be dead soon.\n`)
    return
  } else if (req.url.toLowerCase() === '/') {
    console.log(chalk.blue(`%c ${os.hostname()} : %c Hello !! ${os.hostname()}, count = ${cnt++} \n`))
    
    res.end(`Hello !! ${os.hostname()}, count = ${cnt++} \n`)

    return
  }

  res.end(`${req.url} is unknown.\n`)

}).listen(port)

console.log(`Server running at http://localhost:${port}`)