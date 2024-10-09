//TEXT GAYAB KARNE KI JS
setTimeout(() => {
    const vanish = document.getElementById ('msg')
    vanish.style.display = 'none'
},3000)
//ELEMENTS LAANE KI JS
setTimeout(() => {
    const cnv = document.getElementById('cnvs')
    const btn1 = document.getElementById('b1')
    const btn2 = document.getElementById('b2')
    const btn3 = document.getElementById('b3')
    const btn4 = document.getElementById('b4')
    cnv.style.display = 'block'
    btn1.style.display = 'block'
    btn2.style.display = 'block'
    btn3.style.display = 'block'
    btn4.style.display = 'block'
},3000)
//CANVAS KA KAAM
const canvas = document.getElementById('cnvs');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth; 
canvas.height = window.innerHeight;

let animationFrameId;
let particles = [];

const colors = ['rgba(255, 0, 0, 0.8)',
    'rgba(255, 165, 0, 1)', 
    'rgba(255, 255, 0, 1)', 
    'rgba(139, 69, 19, 1)',    
    'rgba(128, 0, 128, 1)',
    'rgba(0, 255, 0, 1)',  
    'rgba(0, 191, 255, 1)',
    'rgba(255, 20, 147, 1)',
    'rgba(255, 255, 255, 1)'];

const size1 = 8;
const size2 = 15;
const size3 = 20;
const size4 = 25
const dist1 = 50;
const dist2 = 120;
const dist3 = 350;
const dist4 = 1000;
const pc1 = 250;
const pc2 = 500;
const pc3 = 1500;
const pc4 = 2500;

const sound1 = document.getElementById('mortar');
const sound2 = document.getElementById('missile');
const sound3 = document.getElementById('tsar');

function createParticles(x, y, maxExplosionSize, particleCount) {
    for (let i = 0; i < particleCount; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const angle = Math.random() * Math.PI * 2;
        const radius = maxExplosionSize;

        particles.push({
            originX: x,
            originY: y,
            x: x + Math.cos(angle) * radius,
            y: y + Math.sin(angle) * radius,
            particleRadius: Math.random()*7 + 2,
            color: color,
            speed: Math.random() * 10 + 1,
            direction: Math.random() * Math.PI * 2
        });
    }
}

function updateParticles(maxParticleDistance) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const remover = [];
    particles.forEach((particle, index) => {
        particle.x += Math.cos(particle.direction) * particle.speed; 
        particle.y += Math.sin(particle.direction) * particle.speed;

        const distanceFromOrigin = Math.sqrt(
            (particle.x - particle.originX) ** 2 +
            (particle.y - particle.originY) ** 2
        );

      
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.particleRadius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        if (distanceFromOrigin > Math.random()*40*maxParticleDistance) {
            remover.push(index); // Push index instead of particle
        }
    });

    // Remove particles after iterating
    particles = particles.filter((_, index) => !remover.includes(index));
    if (particles.length > 0) {
        animationFrameId = requestAnimationFrame(() => updateParticles(maxParticleDistance));
    } else {
        cancelAnimationFrame(animationFrameId);
    }
}
//MID BUTTON
document.getElementById('b1').addEventListener('click', () => {
    particles = []; 
    const rx = Math.random() * canvas.width;
    const ry = Math.random() * canvas.height;
    createParticles(rx, ry, size1, pc1);
    updateParticles(dist1); 
    sound1.currentTime = 0; 
    sound1.play();
});
//BIG BUTTON
document.getElementById('b2').addEventListener('click', () => {
    particles = [];
    const rx = Math.random() * canvas.width;
    const ry = Math.random() * canvas.height;
    createParticles(rx, ry, size2, pc2); 
    updateParticles(dist2);
    sound2.currentTime = 0;
    sound2.play();
});
//BIGGER BUTTON
document.getElementById('b3').addEventListener('click', () => {
    particles = [];
    const rx = Math.random() * canvas.width;
    const ry = Math.random() * canvas.height;
    createParticles(rx, ry, size3, pc3);
    updateParticles(dist3);
    sound3.currentTime = 0;
    sound3.play();
});
//BIGGEST BUTTON
document.getElementById('b4').addEventListener('click', () => {
    particles = [];
    const rx = Math.random() * canvas.width;
    const ry = Math.random() * canvas.height;
    createParticles(rx, ry, size4, pc4);
    updateParticles(dist4);
    sound3.currentTime = 0;
    sound3.play();
});