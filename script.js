// Document Event Listener
document.addEventListener('click', e => {
    switch(e.target.className){
        case "main-menu":
            document.querySelector('div.side-menu').style.display = 'block'
        break
        case "explore":
            document.querySelector('div.explore-modal').style.display = 'block'
            document.querySelector('div.pop-overlay').style.display = 'block'
        break
        case "closeBtn":
            document.querySelector('img.closeBtn').parentElement.parentElement.style.display = 'none'
        break
        case "modalClose":
            e.target.parentElement.parentElement.style.display = 'none'
            document.querySelector('div.pop-overlay').style.display = 'none'
        break
    }
})

setInterval( () => {
    document.querySelector('h1.explore-head').innerHTML = 'Yɛma wo akwaaba'
}, 2000)

setInterval( () => {
    document.querySelector('h1.explore-head').innerHTML = 'Welcome To Ghana'
}, 3000)
