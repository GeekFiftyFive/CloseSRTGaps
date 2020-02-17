const fs = require('fs');
const parser = require('subtitles-parser');
const {app, BrowserWindow} = require('electron');

if(process.argv.length < 3) {
    console.error('Usage: node index.js <filename>');
    process.exit(1);
}

// Electron
function createWindow () {
    // Create the browser window.
    let win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true
      }
    })
  
    // and load the index.html of the app.
    win.loadFile('index.html')
  }
  
  app.whenReady().then(createWindow)

const fileName = process.argv[2];

let srt = fs.readFileSync(fileName, 'utf-8');
let subs = parser.fromSrt(srt);

let previousEnd = null;

subs.forEach(sub => {
    if(previousEnd) sub.startTime = previousEnd;
    previousEnd = sub.endTime;
});

process.stdout.write(parser.toSrt(subs));
