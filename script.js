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

const images = [
    "img/home-1.jpg",
    "img/home-2.jpg",
    "img/home-3.jpg",
    "img/home-4.jpg"
];

let currentIndex = 0; // Índice da imagem atual

const numElement = document.querySelector(".num"); // Número da imagem
const prevArrow = document.querySelector(".fa-arrow-left"); // Seta esquerda
const nextArrow = document.querySelector(".fa-arrow-right"); // Seta direita

// Função para atualizar a imagem e a contagem
function updateImage() {
    document.body.style.backgroundImage = `url(${images[currentIndex]})`;
    numElement.innerHTML = `${String(currentIndex + 1).padStart(2, "0")}/<span class="lac">04</span>`;
}

// Event listeners para as setas
prevArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Volta ao último se estiver no primeiro
    updateImage();
});

nextArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length; // Volta ao primeiro se estiver no último
    updateImage();
});

// Atualiza a imagem inicial
updateImage();

