// const l = require('lodash')

// const items = [1, [2, [3, [4]]]]
// const newItems = l.flattenDeep(items)

// console.log(newItems)

const { readFile } = require('fs')

console.log('started a firrst task')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log()
        return
    }
    console.log(result)
    console.log('completed first task')
})
console.log('starting next task')
