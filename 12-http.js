const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }

    // to extract certain request of url use '.url
    if (req.url === '/about') {
        res.end('Here is our short history')
    }

    // if user request doesn't matches use default
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page</p>
        <a href = "/">back home</a>
    `)
})

server.listen(5000)