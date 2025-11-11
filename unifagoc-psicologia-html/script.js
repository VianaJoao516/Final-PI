// ==================== MENU MOBILE ==================== 
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.querySelectorAll('.mobile-nav .nav-link');

    // Abrir/fechar menu
    menuToggle.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
        menuToggle.textContent = mobileMenu.classList.contains('active') ? '✕' : '☰';
    });

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileMenu.classList.remove('active');
            menuToggle.textContent = '☰';
        });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', function (event) {
        const navbar = document.querySelector('.navbar');
        if (!navbar.contains(event.target) && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            menuToggle.textContent = '☰';
        }
    });
});

// ==================== NAVBAR SHADOW AO SCROLL ====================
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ==================== ANIMAÇÃO DE SCROLL ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar todos os elementos com data-animate
document.querySelectorAll('[data-animate]').forEach(element => {
    observer.observe(element);
});

// ==================== ANIMAÇÃO DOS CARDS ====================
const cardObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('animate-in');
            }, index * 100);
            cardObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
});

// Observar cards
document.querySelectorAll('.service-card, .psychology-card').forEach(card => {
    cardObserver.observe(card);
});

// ==================== EFEITO HOVER NOS BOTÕES ====================
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-2px)';
    });

    button.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

// ==================== SMOOTH SCROLL PARA LINKS ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ==================== ANIMAÇÃO DE ENTRADA ====================
window.addEventListener('load', function () {
    // Animar elementos na página inicial
    document.querySelectorAll('[data-animate]').forEach((element, index) => {
        const delay = index * 100;
        setTimeout(() => {
            if (element.getBoundingClientRect().top < window.innerHeight) {
                element.classList.add('animate-in');
            }
        }, delay);
    });
});

// ==================== PARALLAX EFFECT ====================
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    
    // Aplicar efeito parallax em elementos específicos
    document.querySelectorAll('[data-parallax]').forEach(element => {
        const parallaxValue = scrollPosition * 0.5;
        element.style.transform = `translateY(${parallaxValue * 0.1}px)`;
    });
});

// ==================== CONTADOR DE SCROLL ====================
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
    let scrollTop = window.scrollY;
    
    // Adicionar/remover classe baseado no scroll
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
    }
    
    lastScrollTop = scrollTop;
});

// ==================== ANIMAÇÃO DE ENTRADA DE PÁGINA ====================
document.addEventListener('DOMContentLoaded', function () {
    // Animar hero section
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroContent) {
        heroContent.style.animation = 'slideInLeft 0.6s ease-out forwards';
    }
    
    if (heroImage) {
        heroImage.style.animation = 'slideInRight 0.6s ease-out forwards';
    }
});

// ==================== FUNÇÃO DE CLIQUE EM BOTÕES ====================
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function (e) {
        // Criar efeito ripple
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// ==================== LAZY LOADING DE IMAGENS ====================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ==================== FUNÇÃO DE SCROLL PARA TOPO ====================
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Mostrar botão de scroll para topo quando necessário
window.addEventListener('scroll', function () {
    const scrollTopButton = document.getElementById('scrollTopButton');
    if (scrollTopButton) {
        if (window.scrollY > 300) {
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }
    }
});

// ==================== VALIDAÇÃO DE FORMULÁRIO ====================
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#ff6b6b';
            isValid = false;
        } else {
            input.style.borderColor = '#ccc';
        }
    });

    return isValid;
}

// ==================== INICIALIZAÇÃO ====================
console.log('Script carregado com sucesso!');