window.onload = function menuClick() {
let icone = document.querySelector('.menumobile');
let menu = document.querySelector('.menu nav ul');
    icone.addEventListener('click', ()=>{
        if(menu.style.display == 'flex'){
            menu.style.display = 'none';
        } else {
            menu.style.display = 'flex';
        }
    });
};

let posiSlide = 0;

let totalSliders = document.querySelectorAll('.slider--banner').length;
let slider = document.querySelector('.slider');
document.querySelector('.slider--width').style.width = `calc(100vw * ${totalSliders})`;
document.querySelector('.slider--controls').style.height = `${slider.clientHeight}px`;

function voltar() {
    posiSlide--;
    if(posiSlide < 0) {
        posiSlide = totalSliders -1;
    }
    atualizaMargin();
}
function prox() {
    posiSlide++;
    if(posiSlide > (totalSliders -1)) {
        posiSlide = 0;
    }
    atualizaMargin();
}

function atualizaMargin() {
    let novaMargem = (posiSlide * document.body.scrollWidth);
    document.querySelector('.slider--width').style.marginLeft = `-${novaMargem}px`;
}

function atualizaImagemBanner() {
    let bannerimg = document.querySelectorAll('.slider--banner');
    arrayImg = Array.from(bannerimg);
    let tela = window.screen.width;

    if (tela < 849) {
        arrayImg[0].style.backgroundImage = 'url(assets/hyperbanner1MENOR.jpg)';
        arrayImg[1].style.backgroundImage = 'url(assets/hyperbanner2MENOR.jpg)';
    } else {
        arrayImg[0].style.backgroundImage = 'url(assets/hyperbanner1.jpg)';
        arrayImg[1].style.backgroundImage = 'url(assets/hyperbanner2.jpg)';
    }
}

function autoSlider(){
    setInterval(() => prox(), 7000);
    setInterval(() => atualizaImagemBanner(), 1000);
}
autoSlider();

/*bibilioteca de animação*/
AOS.init();