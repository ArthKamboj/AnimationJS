//TEXT GAYAB KARNE KI JS
setTimeout(() => {
    const vanish = document.getElementById ('msg')
    vanish.style.display = 'none'
},3000)
//ELEMENTS LAANE KI JS
setTimeout(() => {
    const delay = document.getElementById('appear')
    const cnv = document.getElementById('cnvs')
    const btn1 = document.getElementById('b1')
    const btn2 = document.getElementById('b2')
    const btn3 = document.getElementById('b3')
    delay.style.display = 'block'
    cnv.style.display = 'block'
    btn1.style.display = 'block'
    btn2.style.display = 'block'
    btn3.style.display = 'block'
},3000)
//CANVAS KA KAAM
const canvas = document.getElementById('cnvs');
const c = canvas.getContext('2d');
canvas.width = 550;
canvas.height = 550;

let animationFrameId;
let particles = [];

// MORTAR KE COLORS
const colors = ['rgba(255, 0, 0, 0.8)', // Red
                'rgba(255, 165, 0, 0.8)', // Orange
                'rgba(255, 255, 0, 0.8)', // Yellow
                'rgba(139, 69, 19, 0.8)', // Brown
                'rgba(0, 0, 0, 0.8)']; // Black

const size = 5; //EXPLOSION KA START SIZE
const dist = 55; // MAX DOORI
const sound = document.getElementById('explosionSound');
function createParticles(x, y) {
    const pcount = 70; // NO. OF PARTICLES
    for (let i = 0; i < pcount; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)]; // RANDOM COLOR

        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * size; 

        particles.push({
            originX: x, // ORIGINAL POSITION
            originY: y,
            x: x + Math.cos(angle) * radius, // START AREA ME EPARTICLE POSITION
            y: y + Math.sin(angle) * radius,
            particleRadius: Math.random() * 5 + 2,
            color: color,
            speed: Math.random() * 2 + 1,
            direction: Math.random() * Math.PI * 2
        })
    }
}

function updateParticles() {
    c.clearRect(0, 0, canvas.width, canvas.height); // CANVAS CLEAR
    particles.forEach((particle, index) => {
        particle.x += Math.cos(particle.direction) * particle.speed; // H-MOTION
        particle.y += Math.sin(particle.direction) * particle.speed; // V-MOTION

        // EXPLOSION CENTER SE DOORI
        const moved = Math.sqrt(
            (particle.x - particle.originX) ** 2 +
            (particle.y - particle.originY) ** 2
        );

        // PARTICLE BANAANE KI JS
        c.beginPath();
        c.arc(particle.x, particle.y, particle.particleRadius, 0, Math.PI * 2);
        c.fillStyle = particle.color;
        c.fill();

        // PARTICLE KE MOTION KI LIMIT
        if (moved > dist) {
            particles.splice(index, 1);
        }
    });

    // CONTINUE ANIMATION JABTAK PARTICLE ON SCREEN
    if (particles.length > 0) {
        animationFrameId = requestAnimationFrame(updateParticles);
    } else {
        cancelAnimationFrame(animationFrameId); // STOP WHEN NO PARTICLE ONSCREEN
    }
}

// MORTAR BUTTON CLICK KI JS
document.getElementById('b1').addEventListener('click', () => {
    particles = []; // PARTICLES RESET
    // NAYE PARTICLES KE LIYE RANDOM POSITION GENERATION
    const rX = Math.random() * canvas.width;
    const rY = Math.random() * canvas.height;
    createParticles(rX, rY);
    updateParticles();
    sound.currentTime = 0; // AWAJ RESET
    sound.play(); // AWAJ SHURU
});
