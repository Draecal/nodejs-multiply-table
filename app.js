const {createFile} = require('./helpers/multiply')
const argv = require('./config/yargs')
const colors = require('colors')

console.clear()

createFile(argv.n, argv.p, argv.l)
    .then(filename => console.log(colors.brightBlue(filename),
        colors.brightGreen(`created`)))
    .catch(err => console.log(err))