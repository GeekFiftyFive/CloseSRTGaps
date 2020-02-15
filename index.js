const fs = require('fs');
const parseSRT = require('parse-srt');
const {toTimeCode} = require('./src/helpers/timecodeHelper');

if(process.argv.length < 3) {
    console.error('Usage: node index.js <filename>');
    process.exit(1);
}

const fileName = process.argv[2];

let srt = fs.readFileSync(fileName, 'utf-8');
let subs = parseSRT(srt);

let previousEnd = null;

function serialiseSub(sub) {
    return `${sub.id}\n${toTimeCode(sub.start)} --> ${toTimeCode(sub.end)}\n${sub.text}\n`;
}

subs.forEach(sub => {
    if(previousEnd) sub.start = previousEnd;
    previousEnd = sub.end;
    console.log(serialiseSub(sub));
});

console.log('');