const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
const slide = document.getElementById('slide');
const imgs = ["./imgs/img1.jpeg", "./imgs/img2.webp", "./imgs/img3.jpeg", "./imgs/img4.jpeg", "./imgs/img5.jpeg"];
const count = document.getElementById('count');
let active = 0;

const changeSlide = (direction) =>{
    active += direction;
    if(active < 0) active = imgs.length -1;
    if(active >= imgs.length) active = 0;

    slide.src = imgs[active];
    count.innerHTML = active;
    console.log(active);
}

btnRight.onclick = () => changeSlide(1);
btnLeft.onclick = () => changeSlide(-1);


