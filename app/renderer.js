const {ipcRenderer, remote} = require('electron');
const path = require('path');
const dialog = remote.dialog;
var app = remote.app;
var dragFile= document.getElementById("drag-file");

dragFile.addEventListener('drop', function (e) {
    e.preventDefault();
    e.stopPropagation();

    let toLocalPath = path.resolve(app.getPath("desktop"));
    let userChosenPath = dialog.showSaveDialogSync({ defaultPath: toLocalPath + '/output.srt', filters: [{name: 'Subtitles (*.srt)', extensions: ['srt']}] });
  
    for (let f of e.dataTransfer.files) {
        console.log('The file(s) you dragged: ', f);
        ipcRenderer.send('ondragstart', f.path, userChosenPath);
    }
});

dragFile.addEventListener('dragover', function (e) {
    e.preventDefault();
    e.stopPropagation();
});