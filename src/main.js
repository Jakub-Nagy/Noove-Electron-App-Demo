const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    icon:'src/assets/noove-icon.png',
    frame: false,
    width: 3840,
    height: 2160,
    webPreferences: {
      preload: path.join(__dirname, 'src/preload.js')
    }
  })

  win.loadFile('src/signin.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
