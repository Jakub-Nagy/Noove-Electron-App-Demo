var _a = require('electron'), app = _a.app, BrowserWindow = _a.BrowserWindow;
var path = require('path');
var search = require('./search');
function createWindow() {
    var win = new BrowserWindow({
        icon: 'src/frontend/assets/noove-icon.png'
    });
    win.loadFile('src/frontend/skills.html');
    search();
}
app.whenReady().then(function () {
    createWindow();
    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
