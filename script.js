// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);

        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Add a simple animation to the hero section
const hero = document.getElementById('hero');
hero.style.opacity = '0';

window.addEventListener('load', () => {
    let opacity = 0;
    const animationInterval = setInterval(() => {
        if (opacity < 1) {
            opacity += 0.02;
            hero.style.opacity = opacity;
        } else {
            clearInterval(animationInterval);
        }
    }, 10);
});
