const popup = document.querySelector('.popup');
const continuar = document.querySelector(".continuar")
window.onload = function(){
    setTimeout(function(){
        popup.style.display = "block"

    }, 200)
    
}

continuar.addEventListener('click', () => {
    popup.style.display = "none"
})