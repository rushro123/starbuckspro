const imgChange = document.querySelector('#img');
const img1 = document.querySelector('.bottom__img1');
const img2 = document.querySelector('.bottom__img2');
const img3 = document.querySelector('.bottom__img3');
const circle = document.querySelector('.circle');
const customShape = document.querySelector('.main__img');
const foot = document.querySelector('.foot');


function imgSlider1() {
  imgChange.src = "images/img1.png";
}
function imgSlider2() {
  imgChange.src = "images/img2.png";
}
function imgSlider3() {
  imgChange.src = "images/img3.png";
}

const backChange = (background) => {
  circle.style.backgroundColor = background;

}
var backChange1 = (background) => {
  customShape.style.backgroundColor = background;
  foot.style.backgroundColor = background;
}
function myFunction(x) {
  // If media query matches
  if (x.matches) {
    customShape.style.backgroundColor = '#017143';
    foot.style.backgroundColor = '#017143';
    img1.addEventListener('click', backChange1.bind(this, '#017143'));
    img2.addEventListener('click', backChange1.bind(this, '#eb7495'));
    img3.addEventListener('click', backChange1.bind(this, '#d752b1'));
  }
  else {
    img1.addEventListener('click', backChange1.bind(this, 'transparent'));
    img2.addEventListener('click', backChange1.bind(this, 'transparent'));
    img3.addEventListener('click', backChange1.bind(this, 'transparent'));
  }
}

let x = window.matchMedia("(max-width: 800px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
img1.addEventListener('click', imgSlider1);
img2.addEventListener('click', imgSlider2);
img3.addEventListener('click', imgSlider3);
//#eb7495
//#d752b1
img1.addEventListener('click', backChange.bind(this, '#017143'));
img2.addEventListener('click', backChange.bind(this, '#eb7495'));
img3.addEventListener('click', backChange.bind(this, '#d752b1'));

