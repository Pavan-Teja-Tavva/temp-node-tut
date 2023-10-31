 // on - listen for an event
 // emit - emit an event
 // EventEmitter receives key as the class, to customise we need to extend the class
 const EventEmitter = require('events')

 // instance of a class
 const customEmitter = new EventEmitter()

 // on and emit should have the same methods since the common name indicates they comprise of single event

 //points
    // we can emit an event and also we can have as many functions
    // we would want in on().
    // emit() should come after the on().
    // we can pass arguments when we are emitting events.
 customEmitter.on('response', (name, id) => {
    console.log(`data received user ${name} with id: ${id}`)
 })

 customEmitter.on('response', () => {
    console.log(`some other logic here`)
 })

 customEmitter.emit('response', 'john', 34)