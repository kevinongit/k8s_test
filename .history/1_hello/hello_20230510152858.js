const os = require('os')
const http = require('http')
const chalk = require('chalk')

const port = 8000
let cnt = 0
const version = 'v3'
const note = 'from v3, we added chalk lib to colorize the text..'

http.createServer((req, res) => {
  /// don't increment the counter if the favicon.ico is being requested
  if (req.url.toLowerCase() === '/favicon.ico') {
    res.writeHead(200, {'Content-Type': 'image/x-icon'})
    res.end()
    // console.log('favicon requested')
    return
  } else if (req.url.toLowerCase() === '/version') {
    res.end(`version : ${version} (${note})\n`)
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
    const mesg = `Hello !! ${os.hostname()}, count = ${cnt++}`
    console.log(chalk.bold.blue.dim(mesg))
    
    res.end(mesg + '\n')

    return
  }

  console.log(chalk.bgRedBright(`${req.url} is unknown.`))
  res.end(`${req.url} is unknown.\n`)

}).listen(port)

console.log(`Server running at http://localhost:${port}`)