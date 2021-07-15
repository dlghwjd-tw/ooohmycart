// Maintenance Screen
var bodyEle = document.body
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
var mainWidthEle = document.getElementById('main_width')
var bannerEle = document.querySelector('[src=\'https://img4.shop2000.com.tw/110915/236445/banner.jpg\']')
var bannerHeight = bannerEle.clientHeight
bannerEle.style.display = 'none'
var container = document.createElement('div')
container.style.height = '350px'
container.style.textAlign = 'center'
container.style.overflow = 'hidden'
var banner = document.createElement('img')
banner.style.position = 'relative'
banner.style.margin = '0 auto'
var bannerDisplacement = (bannerHeight - 350) / 2
banner.style.top = `-${bannerDisplacement}px`
banner.src = 'https://img4.shop2000.com.tw/110915/236445/banner.jpg'
mainWidthEle.insertBefore(container, bannerEle)
container.append(banner)