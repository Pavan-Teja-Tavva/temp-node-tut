const http = require('http')

// const server = http.createServer((req, res) => {
//    res.end('Welcome')
// })

// Using EEvent Emitter API
const server = http.createServer()

// emits request envent
// subscribe to it / listen for it / respond to it

//In this part, you attach an event listener to the server instance. 
//The event being listened to is the 'request' event. 
//Whenever an HTTP request is received by the server, 
//this event is triggered, and the provided callback function is executed.
//In the callback function, req represents the incoming HTTP request object, 
//and res represents the HTTP response object. In this case, 
//the code simply sends the response "Welcome" to the client by calling res.end('Welcome').

server.on('request', (req, res) => {
    res.end('Welcome')
})

server.listen(5000)