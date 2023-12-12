const nav = document.getElementById("navscroll");
const treshold =  80 ;


document.addEventListener('scroll', () => {

    let scrollY = window.scrollY;
    if(scrollY > treshold){
        nav.classList.add('scroll')
    } else{
        nav.classList.remove('scroll')
    }

});