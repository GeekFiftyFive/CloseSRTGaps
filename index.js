const fs = require('fs');
const {closeGaps} = require('./src/closeGaps');
const {app, BrowserWindow} = require('electron');

if(process.argv.length < 3) {
    console.error('Usage: node index.js <filename>');
    process.exit(1);
}

const fileName = process.argv[2];

let srt = fs.readFileSync(fileName, 'utf-8');

process.stdout.write(closeGaps(srt));
