const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

if(process.argv.length < 3) {
    console.error('Usage: node index.js <filename>');
    process.exit(1);
}

const fileName = process.argv[2];

console.log(fileName);