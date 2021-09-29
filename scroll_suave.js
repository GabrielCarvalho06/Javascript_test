function subirTela() {
    window.scrollTo({
        top:0,
        left: 0,
        behavior: 'smooth'
    });
}
function decidirBotaoScroll () {
    if(window.scrollY == 0) {
        document.querySelector('.scrollbutton').style.display = 'none';
    }
    else {
        document.querySelector('.scrollbutton').style.display = 'block';
    }
}

window.addEventListener('scroll', decidirBotaoScroll);