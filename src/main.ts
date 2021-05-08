const { app, BrowserWindow } = require('electron')
const path = require('path')
let search = require('./search')

function createWindow () {
  const win = new BrowserWindow({
    icon:'src/frontend/assets/noove-icon.png'
  })

  win.loadFile('src/frontend/skills.html')
  search()
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