// Initialization of elements
const themeBtn = document.getElementById('theme-btn');
const countBtn = document.getElementById('count-btn');
const counterValue = document.getElementById('counter-value');

let localClickCount = parseInt(localStorage.getItem('portfolio_clicks')) || 0;

// Set initial value from memory
counterValue.textContent = `${localClickCount} click${localClickCount !== 1 ? 's' : ''} registered`;

// Micro interaction handler - Theme Toggle
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('retro-tint-active');
    
    // Provide tactile label adjustment depending on interface theme state
    if (document.body.classList.contains('retro-tint-active')) {
        themeBtn.textContent = "Reset Workspace Color";
    } else {
        themeBtn.textContent = "Toggle Retro Tint";
    }
});

// Micro interaction handler - Tracker Increment
countBtn.addEventListener('click', () => {
    localClickCount++;
    localStorage.setItem('portfolio_clicks', localClickCount);
    counterValue.textContent = `${localClickCount} click${localClickCount !== 1 ? 's' : ''} registered`;
    
    // Quick scale click punch animation effect
    countBtn.style.transform = "scale(0.85)";
    setTimeout(() => {
        countBtn.style.transform = "scale(1)";
    }, 100);
});