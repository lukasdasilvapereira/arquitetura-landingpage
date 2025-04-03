const burger = document.querySelector('.burger');
const close = document.querySelector('.close');
const menu = document.querySelector('.menu');

function abrir() {
    menu.classList.add('ativo');
    close.classList.add('ativo');
    burger.style.visibility = 'hidden'; // Esconde sem remover espaço
}

function lose() {
    menu.classList.remove('ativo');
    close.classList.remove('ativo');

    // Faz o burger reaparecer corretamente apenas em telas pequenas
    if (window.innerWidth <= 906) {
        burger.style.visibility = 'visible';
    }
}
