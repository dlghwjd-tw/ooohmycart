var bodyEle = document.body
var webStatus

// Maintenance Screen
if (webStatus == 'underMaintenance') {
    var maintenanceScreen = document.createElement('div')
    maintenanceScreen.style.position = 'fixed'
    maintenanceScreen.style.height = '100vh'
    maintenanceScreen.style.width = '100vw'
    maintenanceScreen.style.textAlign = 'center'
    maintenanceScreen.style.background = '#FFFFFF'
    maintenanceScreen.innerHTML = '網站維護中...'
    bodyEle.prepend(maintenanceScreen)
}

// Adjust menu buttons
var homeBtnEle = document.querySelector('[onclick="bt_onclick(\'/ooohmycarthk/home\',\'sub23\');"]')
var homeBtnReplacement = document.createElement('div')
homeBtnReplacement.innerHTML = '首頁'
homeBtnReplacement.style.cursor = 'pointer'
homeBtnReplacement.onclick = 'bt_onclick(\'/ooohmycarthk/home\',\'sub23\');'
homeBtnEle.parentNode.append(homeBtnReplacement)
homeBtnEle.parentNode.removeChild(homeBtnEle)
