const fs = require('fs');
const parser = require('subtitles-parser');

if(process.argv.length < 3) {
    console.error('Usage: node index.js <filename>');
    process.exit(1);
}

const fileName = process.argv[2];

let srt = fs.readFileSync(fileName, 'utf-8');
let subs = parser.fromSrt(srt);

let previousEnd = null;

subs.forEach(sub => {
    if(previousEnd) sub.startTime = previousEnd;
    previousEnd = sub.endTime;
});

process.stdout.write(parser.toSrt(subs));
