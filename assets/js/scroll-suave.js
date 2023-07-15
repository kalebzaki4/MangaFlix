const linkInterno = document.querySelector('[data-scroll="suave"] a[href^="#"]');

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