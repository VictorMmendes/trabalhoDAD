const electron = require('electron');
const { app, BrowserWindow, ipcMain, globalShortcut } = electron;
const windowStateKeeper = require('electron-window-state');

let mainWindow;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  const mainWindowState = windowStateKeeper({
      defaultWidth: 1000,
     defaultHeight: 800
  });

  mainWindow = new BrowserWindow({
    width: mainWindowState.width,
    height: mainWindowState.height,
    x: mainWindowState.x,
    y:  mainWindowState.y,
    'min-width': 500,
    'min-height': 400,
    'accept-first-mouse': true,
    'title-bar-style': 'hidden',
    frame: false,
    show: false
  });

  mainWindowState.manage(mainWindow);
  mainWindow.loadURL(`file://${__dirname}/html/index.html`);

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

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

  globalShortcut.register('Control+N', () =>{
      mainWindow.webContents.send('nova:tarefa');
  });
});
