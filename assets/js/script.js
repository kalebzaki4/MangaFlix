const linkInterno = document.querySelector('[data-scroll="suave"] a[href^="#"]');

// pegar elementos do DOM
const mangaContainer = document.querySelector('.manga-container');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

// variaveis de controle
const mangaCount = mangaContainer.children.length;
let currentManga = 0;

// funcao para verificar limites e desabilitar botões
function checkLimits() {
  if (currentManga <= 0) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }
  if (currentManga >= mangaCount - 1) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

// funcao para mover para a proxima imagem
function nextManga() {
  currentManga++;
  mangaContainer.style.transform = `translateX(${-currentManga * 250}px)`;
  checkLimits();
}

// funcao para mover para a imagem anterior
function prevManga() {
  currentManga--;
  mangaContainer.style.transform = `translateX(${-currentManga * 250}px)`;
  checkLimits();
}

// verificar limites iniciais
checkLimits();

// adicionar event listeners aos botoes
nextButton.addEventListener('click', nextManga);
prevButton.addEventListener('click', prevManga);

const card2 = document.getElementById("img");

card2.addEventListener("mouseover", () => {
  nextButton.style.visibility = "visible";
});

card2.addEventListener("mouseout", () => {
  nextButton.style.visibility = "hidden";
});

// Adiciona um evento de clique ao botão prev-button
prevButton.addEventListener('click', () => {
  // Código para mover as imagens para a esquerda
});

// Adiciona um evento de clique ao botão next-button
nextButton.addEventListener('click', () => {
  // Código para mover as imagens para a direita
});

// Adiciona um evento de mouseover à div card2
card2.addEventListener('mouseover', () => {
  // Mostra o botão next-button com uma animação de fade-in
  nextButton.style.opacity = 1;
  nextButton.style.transition = 'opacity 0.5s ease-in-out';
});

// Adiciona um evento de mouseout à div card2
card2.addEventListener('mouseout', () => {
  // Esconde o botão next-button com uma animação de fade-out
  nextButton.style.opacity = 0;
  nextButton.style.transition = 'opacity 0.5s ease-in-out';
});



function ScrollTop(event) {
    event.preventDefault()

    const href = event.currentTarget.getAttribute('href');

    const ancora = document.querySelector(href);

    ancora.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
};

    linkInterno.addEventListener('click', ScrollTop);

    const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      siderbarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");
      const searchField = document.querySelector(".search-field");
      const searchIcon = document.querySelector(".search");

      searchToggle.addEventListener("click", () =>{
        searchToggle.classList.toggle("active");
        
      });

      document.getElementById("vejaMaisButton").addEventListener("click", function() {
        this.style.display = "none";
        document.querySelector(".mangaContainer").style.display = "flex";
        });


    