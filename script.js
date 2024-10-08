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

 //UNCLICKABLE BUTTON KI JS
//  const wrapper = document.querySelector('.wrap')
//  const untouch = document.getElementById('yuck')
//  const unreact = untouch.
// untouch.addEventListener('mouseover', () => {
//    const i = Math.floor(Math.random())*window.innerWidth
//    const j = Math.floor(Math.random())*window.innerHeight
//    untouch.style.left = i + 'px'
//    untouch.style.top = j + 'px'
// })