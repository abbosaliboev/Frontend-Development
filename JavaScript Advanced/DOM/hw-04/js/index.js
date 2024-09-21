const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
const slide = document.getElementById('slide');
const imgs = ["./imgs/img1.jpeg", "./imgs/img2.webp", "./imgs/img3.jpeg", "./imgs/img4.jpeg", "./imgs/img5.jpeg"];
const number = document.getElementById('number');
const count = document.getElementById('count');
const inputNumber = document.getElementById('input');
const button = document.getElementById('button');
let active = 0;

const changeSlide = (direction) =>{
    active += direction;
    if(active < 0) active = imgs.length -1;
    if(active >= imgs.length) active = 0;
    slide.src = imgs[active];
    count.innerHTML = active + 1;

}

btnRight.onclick = () => changeSlide(1);
btnLeft.onclick = () => changeSlide(-1);

const numbers = document.querySelectorAll('.number');
numbers.forEach((num, index) => {
    num.onclick = () => {
        active = index;
        slide.src = imgs[active];
        count.innerHTML = active + 1;
    };
});


const inputChange = () => {
    const value = parseInt(inputNumber.value); 
    if (!isNaN(value) && value >= 1 && value <= imgs.length) { 
        active = value - 1; 
        slide.src = imgs[active];
        count.innerHTML = active + 1; 
    } else {
        alert("Iltimos, 1 dan 5 gacha bo'lgan raqam kiriting!");
    }
};
