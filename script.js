document.addEventListener('DOMContentLoaded', () => {
    // Create Falling Petals
    const petalContainer = document.querySelector('.petal-animation');
    for (let i = 0; i < 15; i++) { // Adjust the number as needed
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.left = `${Math.random() * 100}vw`;
        petal.style.animationDelay = `${Math.random() * 5}s`;
        petal.style.animationDuration = `${5 + Math.random() * 5}s`; // Vary duration between 5-10 seconds
        petalContainer.appendChild(petal);
    }
});

function showMessage(text) {
    const messageBox = document.getElementById('message');
    if (messageBox) {
        messageBox.textContent = text;

        // Apply alignment based on the specific message text
        if (text.includes('pride')) {
            messageBox.style.textAlign = 'left';
        } else if (text.includes('stubbornness')) {
            messageBox.style.textAlign = 'center';
        } else if (text.includes('positivity')) {
            messageBox.style.textAlign = 'right';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const starContainer = document.querySelector('.star-animation');
    for (let i = 0; i < 40; i++) { // Adjust number for desired density
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        star.style.top = `${Math.random() * 100}vh`; // Random vertical position
        star.style.animationDelay = `${Math.random() * 10}s`; // Varied timing for organic feel
        starContainer.appendChild(star);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const cloudContainer = document.querySelector('.cloud-animation');
    for (let i = 0; i < 5; i++) { // Adjust for number of clouds
        const cloud = document.createElement('img');
        cloud.src = 'images/cloud.png'; // Replace with your cloud image path
        cloud.classList.add('cloud');
        cloud.style.top = `${Math.random() * 80}vh`; // Randomize vertical position
        cloud.style.left = `${Math.random() * 100}vw`; // Randomize horizontal start
        cloud.style.animationDuration = `${20 + Math.random() * 20}s`; // Vary speed
        cloudContainer.appendChild(cloud);
    }
});

// Generate Floating Particles (petals) moving left to right
function generateParticles() {
    const particlesContainer = document.querySelector('.particles');
    for (let i = 0; i < 20; i++) { // Adjust the number of particles as desired
        const particle = document.createElement('img');
        particle.src = 'images/petals.png';
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.left = `-${Math.random() * 10}vw`; // Start off-screen on the left
        particle.style.animationDelay = `${Math.random() * 10}s`; // Random delay for varied animation
        particle.style.animationDuration = `${10 + Math.random() * 10}s`; // Adjust duration
        particlesContainer.appendChild(particle);
    }
}

// Initialize particles on window load
window.onload = generateParticles;

document.querySelector('video').addEventListener('play', function () {
    if (this.requestFullscreen) {
        this.requestFullscreen();
    }
});

