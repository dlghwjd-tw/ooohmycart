var bodyEle = document.body

// Maintenance Screen
var maintenanceScreen = document.createElement('div')
maintenanceScreen.style.position = 'absolute'
maintenanceScreen.style.height = '1vh'
maintenanceScreen.style.width = '1vw'
maintenanceScreen.style.textAlign = 'center'
maintenanceScreen.style.background = '#FFFFFF'
maintenanceScreen.innerHTML = '網站維護中...'
bodyEle.prepend(maintenanceScreen)

// Adjust menu buttons
var homeBtnEle = document.querySelector('[onclick="bt_onclick(\'/ooohmycarthk/home\',\'sub23\');"]')
homeBtnEle.parentNode.removeChild(homeBtnEle)
var homeBtnReplacement = document.createElement('div')
homeBtnReplacement.innerHTML = '首頁'
homeBtnReplacement.style.cursor = 'pointer'
homeBtnReplacement.onclick = 'bt_onclick(\'/ooohmycarthk/home\',\'sub23\');'
homeBtnEle.parentNode.append(homeBtnReplacement)