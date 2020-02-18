const fs = require('fs');
const {closeGaps} = require('./src/closeGaps');
const {app, BrowserWindow, ipcMain} = require('electron');

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
    win.loadFile('./app/index.html')
}

ipcMain.on('ondragstart', (event, filePath, userChosenPath) => {
    console.log(userChosenPath);
    let srt = fs.readFileSync(filePath, 'utf-8');
    fs.writeFileSync(userChosenPath, closeGaps(srt));
})

app.whenReady().then(createWindow)
