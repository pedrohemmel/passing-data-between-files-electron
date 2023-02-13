const { ipcRenderer } = require('electron')

const widthText = document.getElementById('widthText')
const heightText = document.getElementById('heightText')

const newWidthText = document.getElementById('newWidthText')
const newHeightText = document.getElementById('newHeightText')

function didTapSubmit() {
    const data = {
        width: newWidthText.value,
        height: newHeightText.value
    }
    ipcRenderer.send('update-size-of-screen', data)

    if (!(data.width === '') && !(data.height === '')) {
        widthText.innerHTML = "Width = " + newWidthText.value
        heightText.innerHTML = "Height = " + newHeightText.value
    }
}