/* ==================== 
   💕 UZAK MESAFE ROMANTIK WEB SITESI - JAVASCRIPT
   Ultra Premium Interactive Features
==================== */

// ==================== CONFIGURATION ====================
const CONFIG = {
    // KİŞİSELLEŞTİRME - Bu değerleri değiştirin
    startDate: new Date('2024-02-14'), // İlişki başlangıç tarihi
    meetingDate: new Date('2025-02-14'), // Bir sonraki buluşma tarihi
    cityA: 'İstanbul',
    cityB: 'Ankara',
    distance: 441, // km
    personName: 'Özgür', // İmza için
    
    // Typing effect text
    typingText: 'Her Kilometre, Her Saniye...',
    typingSpeed: 100,
    
    // Animation delays
    animationDelay: 100,
};

// ==================== UTILITY FUNCTIONS ====================
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Debounce function for performance
function debounce(func, wait = 20) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==================== NAVIGATION ====================
function initNavigation() {
    const navToggle = $('.nav-toggle');
    const navLinks = $('.nav-links');
    const nav = $('.main-nav');
    
    // Mobile menu toggle
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close menu on link click
        $$('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
    
    // Smooth scroll for all anchor links
    $$('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = $(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Nav background on scroll
    window.addEventListener('scroll', debounce(() => {
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(255, 255, 255, 0.98)';
            nav.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    }));
}

// ==================== TYPING EFFECT ====================
function initTypingEffect() {
    const typingElement = $('#typingText');
    if (!typingElement) return;
    
    const text = CONFIG.typingText;
    let i = 0;
    
    function type() {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
            setTimeout(type, CONFIG.typingSpeed);
        }
    }
    
    // Start typing after a delay
    setTimeout(type, 500);
}

// ==================== COUNTER ANIMATIONS ====================
function initCounters() {
    // Calculate days together
    const today = new Date();
    const daysTogether = Math.floor((today - CONFIG.startDate) / (1000 * 60 * 60 * 24));
    
    // Update the days counter target
    const daysCounter = $('#daysCounter');
    if (daysCounter) {
        daysCounter.setAttribute('data-target', daysTogether);
    }
    
    // Animate all counters
    const counters = $$('.counter[data-target]');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => counterObserver.observe(counter));
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ==================== FLOATING HEARTS ====================
function initFloatingHearts() {
    const container = $('#floatingHearts');
    if (!container) return;
    
    const hearts = ['❤️', '💕', '💗', '💖', '💝', '💘', '🩷'];
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
        heart.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
        container.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => heart.remove(), 6000);
    }
    
    // Create hearts periodically
    setInterval(createHeart, 500);
    
    // Initial hearts
    for (let i = 0; i < 5; i++) {
        setTimeout(createHeart, i * 200);
    }
}

// ==================== SCROLL ANIMATIONS ====================
function initScrollAnimations() {
    const animatedElements = $$('.timeline-item, .bucket-item, .stat-item');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * CONFIG.animationDelay);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(el => observer.observe(el));
}

// ==================== GALLERY ====================
function initGallery() {
    const filterBtns = $$('.filter-btn');
    const galleryItems = $$('.gallery-item');
    
    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.classList.remove('hide');
                    setTimeout(() => item.classList.add('show'), 10);
                } else {
                    item.classList.remove('show');
                    item.classList.add('hide');
                }
            });
        });
    });
    
    // Lightbox functionality
    const lightbox = $('#lightbox');
    const lightboxImage = $('.lightbox-image');
    const lightboxCaption = $('.lightbox-caption');
    const lightboxClose = $('.lightbox-close');
    const lightboxPrev = $('.lightbox-prev');
    const lightboxNext = $('.lightbox-next');
    
    let currentImageIndex = 0;
    let images = [];
    
    // Open lightbox
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            images = Array.from(galleryItems).filter(i => !i.classList.contains('hide'));
            currentImageIndex = images.indexOf(item);
            
            const img = item.querySelector('img');
            const title = item.querySelector('.photo-title')?.textContent || '';
            
            lightboxImage.src = img.src;
            lightboxCaption.textContent = title;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    
    // Navigate lightbox
    function showImage(index) {
        if (index < 0) index = images.length - 1;
        if (index >= images.length) index = 0;
        currentImageIndex = index;
        
        const item = images[index];
        const img = item.querySelector('img');
        const title = item.querySelector('.photo-title')?.textContent || '';
        
        lightboxImage.src = img.src;
        lightboxCaption.textContent = title;
    }
    
    lightboxPrev.addEventListener('click', () => showImage(currentImageIndex - 1));
    lightboxNext.addEventListener('click', () => showImage(currentImageIndex + 1));
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showImage(currentImageIndex - 1);
        if (e.key === 'ArrowRight') showImage(currentImageIndex + 1);
    });
}

// ==================== FLIP CARDS ====================
function initFlipCards() {
    const flipCards = $$('.flip-card');
    
    flipCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });
}

// ==================== COUNTDOWN TIMER ====================
function initCountdown() {
    const daysEl = $('#countdown-days');
    const hoursEl = $('#countdown-hours');
    const minutesEl = $('#countdown-minutes');
    const secondsEl = $('#countdown-seconds');
    
    if (!daysEl) return;
    
    function updateCountdown() {
        const now = new Date();
        const diff = CONFIG.meetingDate - now;
        
        if (diff <= 0) {
            // Meeting day reached!
            daysEl.textContent = '00';
            hoursEl.textContent = '00';
            minutesEl.textContent = '00';
            secondsEl.textContent = '00';
            
            // Trigger celebration
            triggerConfetti();
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ==================== REAL-TIME CLOCKS ====================
function initClocks() {
    const timeA = $('#timeA');
    const timeB = $('#timeB');
    
    if (!timeA || !timeB) return;
    
    function updateClocks() {
        const now = new Date();
        const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        
        // Both cities are in Turkey timezone (same)
        const turkeyTime = now.toLocaleTimeString('tr-TR', { 
            ...options, 
            timeZone: 'Europe/Istanbul' 
        });
        
        timeA.textContent = turkeyTime;
        timeB.textContent = turkeyTime;
    }
    
    updateClocks();
    setInterval(updateClocks, 1000);
}

// ==================== CONFETTI ====================
function triggerConfetti() {
    const container = $('#confetti-container');
    if (!container) return;
    
    const colors = ['#FF6B9D', '#FFC1E0', '#C44569', '#FED766', '#9D5C96', '#FFE66D'];
    const shapes = ['circle', 'square', 'heart'];
    
    for (let i = 0; i < 150; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = Math.random() * 10 + 5 + 'px';
            confetti.style.height = confetti.style.width;
            confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
            confetti.style.animationDelay = Math.random() * 2 + 's';
            
            if (Math.random() > 0.5) {
                confetti.style.borderRadius = '50%';
            }
            
            container.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 7000);
        }, i * 20);
    }
}

// ==================== SURPRISE BUTTON ====================
function initSurpriseButton() {
    const surpriseBtn = $('#surpriseBtn');
    
    if (surpriseBtn) {
        surpriseBtn.addEventListener('click', () => {
            triggerConfetti();
            createFinalHearts();
            showSurpriseMessage('Seni çok seviyorum! 💕💕💕');
        });
    }
}

function createFinalHearts() {
    const container = $('#finalHearts');
    if (!container) return;
    
    const hearts = ['❤️', '💕', '💗', '💖', '💝', '💘', '🩷', '💜', '💙'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('floating-heart');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
            heart.style.fontSize = (Math.random() * 2 + 1) + 'rem';
            container.appendChild(heart);
            
            setTimeout(() => heart.remove(), 5000);
        }, i * 50);
    }
}

// ==================== HIDDEN MESSAGES ====================
function initHiddenMessages() {
    const triggers = $$('.hidden-trigger');
    
    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const message = trigger.getAttribute('data-message');
            showSurpriseMessage(message);
        });
    });
}

function showSurpriseMessage(message) {
    const popup = $('#surprisePopup');
    const textEl = popup.querySelector('.surprise-text');
    
    textEl.textContent = message;
    popup.classList.add('show');
    
    setTimeout(() => {
        popup.classList.remove('show');
    }, 3000);
}

// ==================== CURSOR TRAIL ====================
function initCursorTrail() {
    // Only on desktop
    if (window.innerWidth < 768) return;
    
    let lastX = 0;
    let lastY = 0;
    let throttleTimer = false;
    
    document.addEventListener('mousemove', (e) => {
        if (throttleTimer) return;
        
        // Check if moved enough distance
        const distance = Math.sqrt(Math.pow(e.pageX - lastX, 2) + Math.pow(e.pageY - lastY, 2));
        if (distance < 50) return;
        
        lastX = e.pageX;
        lastY = e.pageY;
        
        throttleTimer = true;
        setTimeout(() => { throttleTimer = false; }, 100);
        
        const heart = document.createElement('div');
        heart.classList.add('cursor-heart');
        heart.textContent = '💕';
        heart.style.left = e.pageX + 'px';
        heart.style.top = e.pageY + 'px';
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), 1000);
    });
}

// ==================== KONAMI CODE EASTER EGG ====================
function initKonamiCode() {
    let konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.key);
        
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            // Trigger special animation
            triggerConfetti();
            createFinalHearts();
            showSurpriseMessage('🎉 Gizli kodu buldun! Seni sonsuza dek seveceğim! 💕🎉');
            konamiCode = [];
        }
    });
}

// ==================== SHAKE SURPRISE (Mobile) ====================
function initShakeSurprise() {
    if (!('DeviceMotionEvent' in window)) return;
    
    let lastShake = 0;
    
    // Request permission for iOS 13+
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
        document.addEventListener('click', () => {
            DeviceMotionEvent.requestPermission()
                .then(permissionState => {
                    if (permissionState === 'granted') {
                        addShakeListener();
                    }
                })
                .catch(console.error);
        }, { once: true });
    } else {
        addShakeListener();
    }
    
    function addShakeListener() {
        window.addEventListener('devicemotion', (e) => {
            const acceleration = e.accelerationIncludingGravity;
            if (!acceleration) return;
            
            const now = Date.now();
            if (now - lastShake < 2000) return;
            
            if (Math.abs(acceleration.x) > 15 || Math.abs(acceleration.y) > 15) {
                lastShake = now;
                triggerConfetti();
                showSurpriseMessage('📱 Telefonu salladın! Seni seviyorum! 💕');
            }
        });
    }
}

// ==================== SCROLL TO TOP ====================
function initScrollToTop() {
    // Create scroll to top button
    const scrollBtn = document.createElement('button');
    scrollBtn.classList.add('scroll-to-top');
    scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollBtn.setAttribute('aria-label', 'Yukarı git');
    document.body.appendChild(scrollBtn);
    
    // Show/hide based on scroll
    window.addEventListener('scroll', debounce(() => {
        if (window.scrollY > 500) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    }));
    
    // Scroll to top on click
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==================== LAZY LOADING IMAGES ====================
function initLazyLoading() {
    const images = $$('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                    }
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// ==================== PRELOADER ====================
function initPreloader() {
    // Simple preloader - hide after page load
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    // Core functionality
    initNavigation();
    initTypingEffect();
    initCounters();
    initFloatingHearts();
    initScrollAnimations();
    initGallery();
    initFlipCards();
    initCountdown();
    initClocks();
    initSurpriseButton();
    initHiddenMessages();
    initScrollToTop();
    initLazyLoading();
    
    // Easter eggs
    initCursorTrail();
    initKonamiCode();
    initShakeSurprise();
    
    console.log('💕 Bu site sevgiyle yapıldı. Mutlu olmayı hak ediyorsunuz! 💕');
});

// ==================== EXPORT FOR CUSTOMIZATION ====================
window.RomanticSite = {
    CONFIG,
    triggerConfetti,
    showSurpriseMessage,
    createFinalHearts
};
