const argv = require('yargs')
    .option('n', {
        alias: 'numero',
        type: 'number',
        describe: 'Number to be multiply by',
        demandOption: true
    })
    .option('p', {
        alias: 'print',
        type: 'boolean',
        describe: 'Print the result of the multiply',
        demandOption: false,
        default: false
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        describe: 'Set the limit to be multiply by',
        demandOption: false,
        default: 10
    })
    .check((argv, options) => {
        if (isNaN(argv.n)) {
            throw 'n must be a number.'
        }
        return true
    })
    .argv;

module.exports = argv;