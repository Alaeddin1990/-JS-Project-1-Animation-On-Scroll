let scetions = document.querySelectorAll("section")

window.onscroll = function () {
    scetions.forEach(function (sec) {
        let top = window.scrollY
        let offsetTop = sec.offsetTop
        let hight =  sec.offsetHeight
        if (top >= offsetTop && top < offsetTop + hight ) {
            sec.classList.add('show-anmtion')
        } else {sec.classList.remove('show-anmtion')}
    })
}

    // () ${}  []













// let scetions3 = document.querySelector(".sec-3 ")
// let scetionsh1 = document.querySelector(".sec-3 h1")

// window.onscroll = function () {
//         if (window.scrollY >= scetions3.offsetTop - 10) {
//             scetionsh1.style.cssText = "transform: translateX(0px); , color : red ;"
//         }
    
    
// }