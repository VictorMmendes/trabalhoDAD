const electron = require('electron');
const { app, BrowserWindow, ipcMain } = electron;

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 500,
    'min-width': 900,
    'min-height': 500,
    'accept-first-mouse': true,
    'title-bar-style': 'hidden',
    frame: false
  });

  mainWindow.loadURL(`file://${__dirname}/html/index.html`);

  mainWindow.on('closed', function() {
    mainWindow = null;
  });

  ipcMain.on('janela:fechar', () => {
    mainWindow.close();
  });

  ipcMain.on('janela:maximizar', () => {
    if (mainWindow.isMaximized())
      mainWindow.restore();
    else
      mainWindow.maximize();
  });

  ipcMain.on('janela:minimizar', () => {
    mainWindow.minimize();
  });

});
