const fs = require('fs');
const parseSRT = require('parse-srt');

if(process.argv.length < 3) {
    console.error('Usage: node index.js <filename>');
    process.exit(1);
}

const fileName = process.argv[2];

let srt = fs.readFileSync(fileName, 'utf-8');
console.log(parseSRT(srt));