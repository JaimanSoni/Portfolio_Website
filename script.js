window.onscroll = function(){ 
    scrollfunc()
}
function scrollfunc(){ 
    var title = document.getElementById('title')
    var y = window.scrollY
    console.log(y)
    if(y > 400){
        str = "JAIMAN SONI"
        title.innerText = str
    }
    else if(y < 400){
        title.innerText = "PORTFOLIO"
}
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


var count = 0
function openSideBar(){
    var element = document.getElementById('after-click')
    
    if (count % 2 == 0){
        // element.removeAttribute('style')
        // element.setAttribute('style', 'animation: sidebar 1s forwards; visibility: visible;')
        element.style.animation = null
        element.style.animation = 'sidebar 1s forwards'
        element.style.visibility = 'visible'
        count += 1
    }
    else{
        // element.removeAttribute('style')
        // element.setAttribute('style', 'animation: sidebarclose 1s forwards; visibility: visible;')
        element.style.animation = null
        element.style.animation = 'sidebarclose 1s forwards'
        element.style.visibility = 'visible'
        count += 1
    }
    
}

var cursor = document.getElementById('cursor')
const moveCursor = (e)=>{
    const x = e.clientX
    const y = e.clientY
    // cursor.style.animation = null
    cursor.style.transform = `translate3d(${x-5}px, ${y+5}px, 0)`
}


window.addEventListener('mousemove', moveCursor)
