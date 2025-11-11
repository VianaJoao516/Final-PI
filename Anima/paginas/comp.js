// ================= MENU MOBILE INTERATIVO =================
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLink = document.querySelectorAll('.nav-link');

    // Fechar menu ao clicar em um link
    navLink.forEach(link => {
        link.addEventListener('click', function () {
            menuToggle.checked = false;
        });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', function (event) {
        const navbar = document.querySelector('.navbar');
        if (!navbar.contains(event.target) && menuToggle.checked) {
            menuToggle.checked = false;
        }
    });
});

// ================= ANIMAÇÃO DE SCROLL =================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar todas as seções
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// ================= ANIMAÇÃO DOS CARDS =================
const cardObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
            }, index * 100);
            cardObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
});

// Observar cards
document.querySelectorAll('.card, .card1, .formacao').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px) scale(0.95)';
    card.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    cardObserver.observe(card);
});

// ================= EFEITO PARALLAX NO BANNER =================
const banner = document.querySelector('.banner-img');
if (banner) {
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        const bannerOffset = banner.getBoundingClientRect().top;

        if (bannerOffset < window.innerHeight) {
            const parallaxValue = scrollPosition * 0.5;
            banner.style.transform = `translateY(${parallaxValue * 0.1}px)`;
        }
    });
}

// ================= ANIMAÇÃO DO NAVBAR AO SCROLL =================
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
    let scrollTop = window.scrollY;

    // Adicionar sombra extra ao scroll
    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
    }

    lastScrollTop = scrollTop;
});

// ================= CONTADOR ANIMADO =================
function animateCounter(element, target, duration = 1500) {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ================= EFEITO RIPPLE NOS BOTÕES =================
document.querySelectorAll('.botao, .botao1').forEach(button => {
    button.addEventListener('click', function (e) {
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
