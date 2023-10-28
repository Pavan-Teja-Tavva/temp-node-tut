const { readFileSync, writeFileSync } = require('fs')
console.log(start)
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

//writefilesync takes two parameters:
// filepath, value
// if file doesn't exists, it creates new files; if it exists it replaces the content with it's value

writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
     { flag : 'a' }// to append new data as prev data to prev data
)
console.log('done with this task')
console.log('starting with the next one')
