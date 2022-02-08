/*function abrirmenu(){
    let menu = document.querySelector("nav")
    if(menu.classList.contains("fechado")){
        menu.classList.remove("fechado")
        menu.classList.add("aberto")
    } else {
        menu.classList.add("fechado")
        menu.classList.remove("aberto")
    }
}*/

function abrirmenu(){
    document.querySelector("nav").classList.toggle("aberto")
}