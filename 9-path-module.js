const path = require('path')

console.log(path.sep)

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

// to get the base file
const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfloder', 'test.txt')
console.log(absolute)

 