// ===========================
// Mobile Menu Toggle
// ===========================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Update ARIA attribute for accessibility
        const isExpanded = navMenu.classList.contains('active');
        hamburger.setAttribute('aria-expanded', isExpanded);
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
});

// ===========================
// Countdown Timer
// ===========================
let countdownInterval;

function updateCountdown() {
    // Set the target date (30 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);
    targetDate.setHours(20, 0, 0, 0); // 8:00 PM

    const now = new Date().getTime();
    const difference = targetDate - now;

    // If countdown is finished, clear interval and show message
    if (difference < 0) {
        clearInterval(countdownInterval);
        const countdownElement = document.getElementById('countdown');
        if (countdownElement) {
            countdownElement.innerHTML = '<p class="countdown-finished">¡El sorteo ha comenzado!</p>';
        }
        return;
    }

    // Calculate time units
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Update the DOM with null checks
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
}

// Update countdown every second
updateCountdown();
countdownInterval = setInterval(updateCountdown, 1000);

// ===========================
// FAQ Accordion
// ===========================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    if (question) {
        // Set initial ARIA attribute
        question.setAttribute('aria-expanded', 'false');
        
        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    const otherQuestion = otherItem.querySelector('.faq-question');
                    if (otherQuestion) {
                        otherQuestion.setAttribute('aria-expanded', 'false');
                    }
                }
            });
            
            // Toggle current item
            const isActive = item.classList.toggle('active');
            question.setAttribute('aria-expanded', isActive);
        });
    }
});

// ===========================
// Smooth Scroll
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Header Background on Scroll
// ===========================
const header = document.getElementById('header');
let lastScrollTime = 0;
const scrollThrottle = 100; // milliseconds

function handleHeaderScroll() {
    const now = Date.now();
    if (now - lastScrollTime < scrollThrottle) return;
    lastScrollTime = now;
    
    if (header) {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(10, 10, 10, 0.98)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
            header.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)';
        }
    }
}

window.addEventListener('scroll', handleHeaderScroll);

// ===========================
// Scroll to Top Button
// ===========================
const scrollTopBtn = document.getElementById('scrollTop');
let lastScrollTopTime = 0;

function handleScrollTopVisibility() {
    const now = Date.now();
    if (now - lastScrollTopTime < scrollThrottle) return;
    lastScrollTopTime = now;
    
    if (scrollTopBtn) {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }
}

window.addEventListener('scroll', handleScrollTopVisibility);

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===========================
// Scroll Animations
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for scroll animations
const animateElements = document.querySelectorAll('.sorteo-card, .step-card, .ganador-card, .faq-item');
animateElements.forEach(element => {
    element.classList.add('fade-in-scroll');
    observer.observe(element);
});

// ===========================
// Progress Bar Animation
// ===========================
const progressBars = document.querySelectorAll('.progress-fill');

const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.style.width;
            entry.target.style.width = '0';
            setTimeout(() => {
                entry.target.style.width = width;
            }, 100);
            progressObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

progressBars.forEach(bar => {
    progressObserver.observe(bar);
});

// ===========================
// CTA Button Click Handlers
// ===========================
const ctaButtons = document.querySelectorAll('.btn-cta, .btn-primary, .btn-secondary');

ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Prevent default for demonstration
        e.preventDefault();
        
        // In production, this would redirect to purchase page or open a modal
        console.log('CTA button clicked - would redirect to purchase page');
    });
});

// ===========================
// Card Hover Effects Enhancement
// ===========================
// Hover effects are handled by CSS for better performance
// See css/styles.css lines 347-351 and 544-548

// ===========================
// Dynamic Year in Footer
// ===========================
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer-bottom p');
if (footerText) {
    // Use a more reliable method with data attribute or specific replacement
    const yearSpan = document.createElement('span');
    yearSpan.setAttribute('data-year', 'current');
    footerText.innerHTML = `&copy; ${currentYear} JANU - Todos los derechos reservados. | Diseñado con <i class="fas fa-heart"></i>`;
}

// ===========================
// Loading Animation (Optional)
// ===========================
// Removed fade-in effect to avoid flash and respect user preferences for reduced motion

// ===========================
// Prevent Default on Hash Links
// ===========================
const hashLinks = document.querySelectorAll('a[href="#"]');
hashLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

// ===========================
// Console Welcome Message
// ===========================
console.log('%c¡Bienvenido a JANU!', 'color: #FFD700; font-size: 24px; font-weight: bold;');
console.log('%cGana el auto de tus sueños con nuestros sorteos transparentes.', 'color: #FFFFFF; font-size: 14px;');
console.log('%c🎰 Visita nuestra página para más información', 'color: #FDB927; font-size: 12px;');

// ===========================
// Performance Monitoring (Optional)
// ===========================
if ('performance' in window) {
    window.addEventListener('load', () => {
        // Use modern Performance Timeline API
        const perfData = performance.getEntriesByType('navigation')[0];
        if (perfData) {
            const pageLoadTime = perfData.loadEventEnd - perfData.fetchStart;
            console.log(`⚡ Página cargada en ${Math.round(pageLoadTime)}ms`);
        }
    });
}
