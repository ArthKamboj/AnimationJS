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
 