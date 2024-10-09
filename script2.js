//MOVING BUTTON KI JS
const ind = document.getElementById('jaihind');
let intrvl;
ind.style.position = 'absolute';
 
//BUTTON KI NAYI POSITION
const moveButton = () => {
    const mw = window.innerWidth - ind.offsetWidth;
    const mh = window.innerHeight - ind.offsetHeight;
    const i = Math.floor(Math.random() * mw);
    const j = Math.floor(Math.random() * mh);
    ind.style.left = i + 'px';
    ind.style.top = j + 'px';
};
//NAYI POSITION PE BUTTON KO MOVE KIYA
ind.addEventListener('mouseover', () => {
    intrvl = setInterval(moveButton, 10);
});
//PURANI JS CLEAR
ind.addEventListener('mouseout', () => {
    clearInterval(intrvl);
});

//PAK BUTTON KI FUNCTIONING
const game = document.getElementById('yuck')
 game.addEventListener('click', function() {
    window.location.href = 'maingame.html'
 })