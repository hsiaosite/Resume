// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"], .cta-button[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animate elements on scroll
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.project-card, .timeline-item').forEach((el) => {
    scrollObserver.observe(el);
});

// Add a simple animation style
const style = document.createElement('style');
style.innerHTML = `
.project-card, .timeline-item {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.project-card.visible, .timeline-item.visible {
    opacity: 1;
    transform: translateY(0);
}
`;
document.head.appendChild(style);

