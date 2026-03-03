function updateClock() {
    const clockElement = document.getElementById('digital-clock');
    const dateElement = document.getElementById('date-display');
    
    if (!clockElement || !dateElement) return;

    const now = new Date();
    
    // Time format: HH:MM:SS
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    
    // Date format: Weekday, Month Day, Year
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    dateElement.textContent = now.toLocaleDateString('en-US', options);
}

// Initial call
updateClock();

// Update every second
setInterval(updateClock, 1000);

// Add subtle parallax effect on mouse move
document.addEventListener('mousemove', (e) => {
    const card = document.querySelector('.profile-card');
    if (!card) return;
    
    const x = (window.innerWidth / 2 - e.pageX) / 25;
    const y = (window.innerHeight / 2 - e.pageY) / 25;
    
    card.style.transform = `translateY(-8px) rotateX(${y}deg) rotateY(${-x}deg)`;
});

// Reset tilt on mouse out
document.addEventListener('mouseleave', () => {
    const card = document.querySelector('.profile-card');
    if (card) {
        card.style.transform = `translateY(0) rotateX(0deg) rotateY(0deg)`;
    }
});
