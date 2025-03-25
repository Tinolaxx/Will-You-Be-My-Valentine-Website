function openLetter() {
    document.querySelector('.envelope').classList.add('opened'); 
    document.querySelector('.text').classList.add('fade-out');   
    setTimeout(() => {
        document.querySelector('.message').classList.add('show'); 
        document.querySelector('.envelope').classList.add('fade-out'); 
        document.querySelector('.final-image').classList.add('show');
        document.querySelector('.checkbox').classList.add('show');
        document.querySelector('.checkbox2').classList.add('show');
        document.querySelector('.yes').classList.add('show');
        document.querySelector('.no').classList.add('show');
        document.querySelector('.vinyl').classList.add('show');
        document.querySelector('.button').classList.add('show');
        document.querySelector('.flowers').classList.add('show');
    }, 500);
}

function yes() {
    alert('hihi see soon <3');
    setInterval(createHeart, 300);
}

function no() {
    const checkbox2 = document.querySelector('.checkbox2');
    checkbox2.src = 'Media/heart-button.png'; 
    document.querySelector('.no').classList.remove('show');
    document.querySelector('.no2').classList.add('show');
    setInterval(createHeart, 100);
    setTimeout(() => {
        alert('YAY! im so glad you didnt say no, ill see you soon <3');
    }, 100);
}

const button = document.querySelector('.button');
const music = document.getElementById('bg-music');
const vinyl = document.querySelector('.vinyl');
const marceline = document.querySelector('.marceline');
const marcelineguitar = document.querySelector('.marceline-guitar');
const rainicorn = document.querySelector('.rainicorn');
const flowers = document.querySelector('.flowers');

function createHeart() {
const heart = document.createElement('div');
heart.classList.add('heart');
heart.textContent = '❤';
heart.style.left = Math.random() * window.innerWidth + 'px';
heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
heart.style.animationDuration = (Math.random() * 3 + 2) + 's';

document.body.appendChild(heart);

setTimeout(() => {
heart.remove();
}, 5000);
  }

button.addEventListener('click', function() {
    if (music.paused) {
        music.play();
        button.textContent = 'Pause Music';
        vinyl.classList.add('rotating');

        marceline.classList.add('show');
        marcelineguitar.classList.add('show');
        rainicorn.classList.add('show');

    } else {
        music.pause();
        button.textContent = 'Play Music';
        vinyl.classList.remove('rotating'); 
        marceline.classList.remove('show');
        marcelineguitar.classList.remove('show');
        rainicorn.classList.remove('show');
    }});