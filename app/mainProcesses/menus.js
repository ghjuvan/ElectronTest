"use strict";

const electron = require('electron');
const app = electron.app;
const BrowserWindow = require('browser-window');

exports.menu =
    [{
        label: "Application",
        submenu: [
            {label: "About Application", selector: "orderFrontStandardAboutPanel:"},
            {label: "Toggle Dev Tools", click: function () {
                BrowserWindow.getFocusedWindow().toggleDevTools();
            }},
            {type: "separator"},
            {
                label: "Quit", accelerator: "Command+Q", click: function () {
                app.quit();
            }
            }
        ]
    }, {
        label: "Edit",
        submenu: [
            {label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:"},
            {label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:"},
            {type: "separator"},
            {label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:"},
            {label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:"},
            {label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:"},
            {label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:"}
        ]
    }
    ];