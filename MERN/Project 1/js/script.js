// 1. Hover Effect on Navigation Links
const navLinks = document.querySelectorAll('header ul li a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#ff6666'; // Lighter red on hover
    });
    link.addEventListener('mouseout', () => {
        link.style.color = '#fff'; // Reset to white
    });
});

// 2. Smooth Scroll for Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 3. Search Bar Animation
const searchInputs = document.querySelectorAll('input[type="text"]');

searchInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.style.transform = 'scale(1.05)'; // Slightly grow when focused
        input.style.transition = 'transform 0.3s ease';
    });
    input.addEventListener('blur', () => {
        input.style.transform = 'scale(1)'; // Reset scale when focus is lost
    });
});

// 4. Fade-in on Scroll Animation
const fadeInElements = document.querySelectorAll('section, main img');

const fadeInOnScroll = () => {
    fadeInElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
            element.classList.add('fade-in');
        }
    });
};

window.addEventListener('scroll', fadeInOnScroll);
fadeInOnScroll(); // Trigger on page load

// 5. Image Animation on Page Load (Zomato Logo)
const zomatoLogo = document.querySelector('main img');
zomatoLogo.style.opacity = 0;
zomatoLogo.style.transform = 'scale(0.8)';
window.addEventListener('load', () => {
    zomatoLogo.style.transition = 'all 1s ease-in-out';
    zomatoLogo.style.opacity = 1;
    zomatoLogo.style.transform = 'scale(1)';
});
