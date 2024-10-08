//PLAY BUTTON KI ANIMATION
window.onload = function() {
    const container = document.querySelector('.holder');
    setTimeout(() => {
       container.classList.add('show');
    }, 200);
 };
 //PLAY BUTTON KI FUNCTIONING
 const playb = document.getElementById('sliding')
 playb.addEventListener('click', function() {
    window.location.href = 'selector.html'
 })

 //MOVING STARS KI JS
const canvas = document.getElementById('galaxy');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const maxStars = 120;
const speed = 0.7;

class Star {
    constructor(x, y, radius, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.velocity = velocity;
    }

    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }

    draw() {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
    }
}

function createStars() {
    for (let i = 0; i < maxStars; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 3 + 1;
        const velocity = {
            x: (Math.random() - 0.5) * speed,
            y: (Math.random() - 0.5) * speed
        };
        stars.push(new Star(x, y, radius, velocity));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
        star.update();
        star.draw();
    });
    requestAnimationFrame(animate);
}

createStars();
animate();