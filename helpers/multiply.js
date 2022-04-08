const fs = require('fs');
const colors = require('colors')

const createFile = async(n, p, l) => {

    let output = ''; let screen = ''

    for (i = 1; i <= l; i++) {
        output += `${n} x ${i} = ${n * i}\n`;
        screen += `${colors.yellow(n)} x ${colors.cyan(i)} = ${colors.magenta(n * i)}\n`;
    }

    if (p !== false) {
        console.log('========================='.cyan);
        console.log('MULTIPLIER'.cyan);
        console.log(`TABLE FROM ${n} To ${l}`.cyan);
        console.log('========================='.cyan);

        console.log(screen);
    } 

    let filename = `./output/tabla-${n}.txt`;
    try {
        fs.writeFileSync(filename, output);
        return filename;
    } catch(err) {
        throw err;
    }
    
}

module.exports = {
    createFile
}