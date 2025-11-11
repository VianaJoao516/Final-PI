// =================================================================
// 1. Lógica do Menu Mobile (Hamburger)
// =================================================================

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinksMobile = document.querySelector('.nav-links-mobile');

    // Função para fechar o menu
    const closeMenu = () => {
        menuToggle.checked = false;
        navLinks.classList.remove('active');
        navLinksMobile.classList.remove('active');
    };

    // Adiciona um listener para o toggle do menu
    menuToggle.addEventListener('change', function() {
        if (this.checked) {
            // Abre o menu
            navLinks.classList.add('active');
            navLinksMobile.classList.add('active');
        } else {
            // Fecha o menu
            navLinks.classList.remove('active');
            navLinksMobile.classList.remove('active');
        }
    });

    // Fecha o menu ao clicar em um link (opcional, mas boa prática)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Fecha o menu ao clicar fora dele (para telas maiores que 768px)
    document.addEventListener('click', (event) => {
        if (window.innerWidth > 768) return; // Não aplica em desktop

        const isClickInsideNavbar = document.querySelector('.navbar').contains(event.target);
        const isMenuOpen = menuToggle.checked;

        if (isMenuOpen && !isClickInsideNavbar) {
            closeMenu();
        }
    });
});


// =================================================================
// 2. Lógica do Carrossel (Slideshow)
// =================================================================

let slideIndex = 1;

// Exibe o slide atual
function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("banner");
    const dots = document.getElementsByClassName("dot");

    if (slides.length === 0) return; // Garante que há slides

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Esconde todos os slides e remove a classe 'active' dos dots
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }

    // Exibe o slide atual e marca o dot correspondente
    slides[slideIndex - 1].classList.add('active');
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].classList.add('active');
    }
}

// Avança ou retrocede o slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Vai para um slide específico
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Inicializa o carrossel e o avanço automático
document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);

    // Adiciona a funcionalidade de clique aos botões de navegação
    document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
    document.querySelector('.next').addEventListener('click', () => plusSlides(1));

    // Adiciona a funcionalidade de clique aos dots
    document.querySelectorAll('.dots-container .dot').forEach((dot, index) => {
        dot.addEventListener('click', () => currentSlide(index + 1));
    });

    // Avanço automático a cada 5 segundos
    setInterval(() => {
        plusSlides(1);
    }, 5000);
});


// =================================================================
// 3. Animações de Scroll (Intersection Observer)
// =================================================================

document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.anima-container, .cta-unifagoc, .cursos-section, .card');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Para de observar após a animação
            }
        });
    }, {
        threshold: 0.1 // Começa a animar quando 10% do elemento estiver visível
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});
