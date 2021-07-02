var bodyEle = document.body

var maintainenceScreen = document.createElement('div')
maintainenceScreen.style.height = '1vh'
maintainenceScreen.style.width = '1vw'
maintainenceScreen.style.padding = '100%'
maintainenceScreen.style.background = '#FFFFFF'
maintainenceScreen.innerHTML = '網站維護中...'
bodyEle.prepend(maintainenceScreen)