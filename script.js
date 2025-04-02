const burger = document.querySelector('.burger');
const close = document.querySelector('.close');
const item = document.querySelector('.menu');

function abrir() {
    item.classList.add('ativo'); // Mostra o menu
    burger.style.display = 'none'; // Esconde o ícone do menu (hambúrguer)
    close.classList.add('ativo'); // Exibe o botão de fechar (X)
}

function fechar() {
    item.classList.remove('ativo'); // Esconde o menu
    burger.style.display = 'block'; // Volta a exibir o ícone do menu (hambúrguer)
    close.classList.remove('ativo'); // Esconde o botão de fechar (X)
}
