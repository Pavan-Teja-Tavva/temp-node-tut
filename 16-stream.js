const { createReadStream } = require('fs')

const stream = createReadStream('./content/big.txt', {
    highWaterMark: 90000,
})

// default 64kb
//last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000})
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8'})

// when stream triggers for the data event it prints the result.
stream.on('data', (result) => {
    console.log(result)
})
