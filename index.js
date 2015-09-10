var app = require('app');
var BrowserWindow = require('browser-window');
app.on('ready', function() {
    var mainWindow = new BrowserWindow({
        title: 'sidebar-react-electron-boilerplate',
        width: 1400,
        height: 800
    });
    mainWindow.loadUrl('file://'+__dirname+'/index.html');
});
