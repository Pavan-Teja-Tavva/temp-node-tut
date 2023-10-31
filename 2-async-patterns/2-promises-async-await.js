const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async() => {
    try {
        const first = await readFile('./content/first.txt', 'utf8') //getText('./content/first.txt)
        const second = await readFile('./content/second.txt', 'utf8') //getText('./content/second.txt)
        await writeFile(
            './content/result-mind-grenade.txt',
            `THIS IS AWESOME : ${first} ${second}`,
            {flag : 'a'}
        )
        console.log(first, second)
    }
    catch (error) {
        console.log(error)
    }
}

console.log("start")
start()
console.log("done with the task")
// getText('./content/first.txt)
//  .then((result) => console.log(result))
// .catch((err) => console.log(err))






// we use util to function to not get wrap up with like util package to get rid of
// return promise readFile() if err

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err)
//             }
//             else {
//                 resolve(data)
//             }
//         })
//     })
// }