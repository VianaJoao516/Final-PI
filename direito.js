// ================= MENU MOBILE INTERATIVO =================
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');

    // Toggle menu mobile
    menuToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', function (event) {
        if (!navbar.contains(event.target) && mobileMenu.classList.contains('active')) {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
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
document.querySelectorAll('.scroll-animate').forEach(section => {
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
document.querySelectorAll('.card, .card-animate, .disciplina-card').forEach(card => {
    cardObserver.observe(card);
});

// ================= EFEITO PARALLAX NO BANNER =================
const banner = document.getElementById('banner-img');
if (banner) {
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        const bannerOffset = banner.getBoundingClientRect().top + scrollPosition;

        if (scrollPosition > 0 && scrollPosition < bannerOffset + banner.offsetHeight) {
            const parallaxValue = scrollPosition * 0.5;
            banner.style.transform = `translateY(${parallaxValue * 0.1}px)`;
        }
    }, { passive: true });
}

// ================= ANIMAÇÃO DO NAVBAR AO SCROLL =================
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
    let scrollTop = window.scrollY;

    // Adicionar classe scrolled ao navbar
    if (scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScrollTop = scrollTop;
}, { passive: true });

// ================= EFEITO RIPPLE NOS BOTÕES =================
document.querySelectorAll('.botao, .botao1, .ripple-btn').forEach(button => {
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

// ================= SMOOTH SCROLL PARA LINKS INTERNOS =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ================= ANIMAÇÃO INICIAL DA PÁGINA =================
window.addEventListener('load', function () {
    // Adicionar pequeno delay para animação inicial
    setTimeout(() => {
        document.querySelectorAll('.scroll-animate, .card-animate').forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('animate-in');
            }, index * 50);
        });
    }, 100);
});
