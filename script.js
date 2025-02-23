// Set Birthday Date
const birthdayDate = new Date('2025-03-23T00:00:00');

// Create elegant background pattern
function createClassicPattern() {
    const stars = document.querySelector('.stars');
    const twinkles = document.querySelector('.twinkling');
    
    // Create stars
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        stars.appendChild(star);
    }
}

// Enhanced Countdown Timer with elegant animations
function updateCountdown() {
    const currentDate = new Date();
    const difference = birthdayDate - currentDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    updateElementWithAnimation('days', days);
    updateElementWithAnimation('hours', hours);
    updateElementWithAnimation('minutes', minutes);
    updateElementWithAnimation('seconds', seconds);
}

function updateElementWithAnimation(id, value) {
    const element = document.getElementById(id);
    const currentValue = element.textContent;
    const newValue = String(value).padStart(2, '0');

    if (currentValue !== newValue) {
        element.style.transform = 'scale(1.2) translateY(-5px)';
        element.style.opacity = '0.5';
        
        setTimeout(() => {
            element.textContent = newValue;
            element.style.transform = 'scale(1) translateY(0)';
            element.style.opacity = '1';
        }, 200);
    }
}

// Enhanced Music Player with visualizer
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');
const visualizer = document.querySelector('.music-visualizer');
let isPlaying = false;

// Add error handling for music
bgMusic.addEventListener('error', (e) => {
    console.error('Error loading music:', e);
    musicBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i><span>Music Error</span>';
    musicBtn.style.background = 'linear-gradient(45deg, #FF0000, #FF4500)';
    musicBtn.disabled = true;
});

// Add loading state
bgMusic.addEventListener('loadstart', () => {
    musicBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Loading...</span>';
});

// Add ready state
bgMusic.addEventListener('canplaythrough', () => {
    musicBtn.innerHTML = '<i class="fas fa-music"></i><span>Play Music</span>';
    musicBtn.disabled = false;
});

// Enhanced music toggle with smooth transitions
musicBtn.addEventListener('click', () => {
    if (!bgMusic.readyState >= 2) return; // Wait until music is ready
    
    if (isPlaying) {
        bgMusic.pause();
        musicBtn.innerHTML = '<i class="fas fa-music"></i><span>Play Music</span>';
        musicBtn.classList.remove('playing');
        visualizer.classList.remove('active');
        
        // Fade out
        let volume = bgMusic.volume;
        const fadeOut = setInterval(() => {
            volume = Math.max(0, volume - 0.1);
            bgMusic.volume = volume;
            if (volume <= 0) {
                clearInterval(fadeOut);
            }
        }, 100);
    } else {
        bgMusic.volume = 0;
        bgMusic.play();
        musicBtn.innerHTML = '<i class="fas fa-pause"></i><span>Pause Music</span>';
        musicBtn.classList.add('playing');
        visualizer.classList.add('active');
        
        // Fade in
        let volume = 0;
        const fadeIn = setInterval(() => {
            volume = Math.min(1, volume + 0.1);
            bgMusic.volume = volume;
            if (volume >= 1) {
                clearInterval(fadeIn);
            }
        }, 100);
    }
    
    // Add click effect
    musicBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        musicBtn.style.transform = 'scale(1)';
    }, 200);
    
    isPlaying = !isPlaying;
});

// Add music time update handler for visualizer effect
bgMusic.addEventListener('timeupdate', () => {
    if (isPlaying) {
        const bars = document.querySelectorAll('.visualizer-bar');
        bars.forEach(bar => {
            const randomHeight = Math.random() * 70 + 30; // Random height between 30% and 100%
            bar.style.height = `${randomHeight}%`;
        });
    }
});

// Elegant Gift Reveal with elegant transitions
const giftBtn = document.getElementById('giftBtn');
const giftReveal = document.getElementById('giftReveal');
let isGiftOpen = false;

// Initialize gift state
if (giftReveal) {
    giftReveal.style.display = 'none';
    giftReveal.style.opacity = '0';
    giftReveal.style.transform = 'translateY(20px)';
}

giftBtn.addEventListener('click', () => {
    isGiftOpen = !isGiftOpen;
    
    if (isGiftOpen) {
        // Button press effect
        giftBtn.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            giftBtn.style.transform = 'scale(1)';
            giftReveal.style.display = 'block';
            
            // Fade in effect
            setTimeout(() => {
                giftReveal.style.opacity = '1';
                giftReveal.style.transform = 'translateY(0)';
                giftBtn.innerHTML = '<div class="button-content"><span class="gift-text">Close Gift</span><span class="gift-emoji">📦</span></div>';
            }, 50);
        }, 200);
    } else {
        giftReveal.style.opacity = '0';
        giftReveal.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            giftReveal.style.display = 'none';
            giftBtn.innerHTML = '<div class="button-content"><span class="gift-text">Open Gift</span><span class="gift-emoji">🎁</span></div>';
        }, 500);
    }
});

// Create elegant floating elements
function createFloatingElement(type) {
    const container = document.querySelector('.floating-elements');
    const element = document.createElement('div');
    
    if (type === 'ornament') {
        element.className = 'floating-ornament';
        element.innerHTML = ['✦', '❈', '✵', '❋', '❊'][Math.floor(Math.random() * 5)];
    } else {
        element.className = 'balloon';
    }
    
    const startPosition = Math.random() * 100;
    element.style.left = `${startPosition}vw`;
    element.style.animationDuration = `${Math.random() * 3 + 4}s`;
    element.style.animationDelay = `${Math.random() * 2}s`;
    
    container.appendChild(element);
    
    // Remove element after animation
    setTimeout(() => {
        element.remove();
    }, 7000);
}

// Create decorative elements periodically
setInterval(() => {
    createFloatingElement('ornament');
}, 2000);

setInterval(() => {
    createFloatingElement('balloon');
}, 4000);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createClassicPattern();
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Add scroll reveal effects
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                sectionObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        section.classList.add('hidden');
        sectionObserver.observe(section);
    });
});

// Add dynamic style for new animations
const style = document.createElement('style');
style.textContent = `
    .floating-ornament {
        position: fixed;
        font-size: 2rem;
        color: var(--primary-color);
        pointer-events: none;
        animation: floatUp 7s linear forwards;
        z-index: 1;
    }
    
    @keyframes floatUp {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-20vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    .hidden {
        opacity: 0;
        transform: translateY(50px);
        transition: all 1s ease;
    }
    
    .revealed {
        opacity: 1;
        transform: translateY(0);
    }
    
    .star {
        position: absolute;
        width: 2px;
        height: 2px;
        background: var(--primary-color);
        border-radius: 50%;
        animation: twinkle 3s infinite;
    }
    
    @keyframes twinkle {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.3; }
    }
`;
document.head.appendChild(style);
