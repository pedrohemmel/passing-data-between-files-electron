const { app, BrowserWindow, ipcMain } = require('electron')

var mainWindow

const createWindow = async (widthScreen, heightScreen) => {
 mainWindow = new BrowserWindow({
    width: widthScreen,
    height: heightScreen,
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
    }
 })

 await mainWindow.loadFile('src/pages/flow/index.html')

 ipcMain.on('update-size-of-screen', function(event, data) {
    if (data.width === '' || data.height === '') {
        mainWindow.setSize(800, 600)
    } else {
        mainWindow.setSize(Number(data.width), Number(data.height))
    }
   
})
}

//Generating the screen
app.whenReady().then(() => {
    createWindow(800, 600)
})
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow(800, 600)
    }
})