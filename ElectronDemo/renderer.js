// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
console.log('hello world!')
var ipc = require('electron').ipcRenderer;
/*document.body.addEventListener('click', () => {
  console.log('hello vscode!')
  
})*/
document.getElementById('maxbt').addEventListener('click', () => {
  console.log('hello vscode!')
  ipc.send('window-max');
  
})
document.getElementById('minbt').addEventListener('click', () => {
  console.log('hello vscode!')
  ipc.send('window-min');
  
})
document.getElementById('closebt').addEventListener('click', () => {
  console.log('hello vscode!')
  ipc.send('window-close');
  
})