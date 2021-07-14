var bodyEle = document.body

// Maintenance Screen
if (webStatus == 'underMaintenance') {
    var maintenanceScreen = document.createElement('div')
    maintenanceScreen.style.zIndex = '100'
    maintenanceScreen.style.position = 'fixed'
    maintenanceScreen.style.display = 'block'
    maintenanceScreen.style.fontSize = '100px'
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
homeBtnReplacement.style.fontSize = '24px'
homeBtnReplacement.style.cursor = 'pointer'
homeBtnReplacement.style.margin = '0 10px 0 230px'
homeBtnReplacement.style.padding = '3px'
homeBtnReplacement.style.border = '3px solid'
homeBtnReplacement.style.borderRadius = '10px'
homeBtnReplacement.onclick = 'bt_onclick(\'/ooohmycarthk/home\',\'sub23\');'
homeBtnEle.parentNode.append(homeBtnReplacement)