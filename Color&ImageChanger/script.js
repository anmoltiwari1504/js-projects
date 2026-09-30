const button1 = document.querySelector(".changeColor");

button1.addEventListener("click", function () {

  const randomColor = "#" + Math.floor(Math.random() * 16777215)
    .toString(16);

  document.body.style.backgroundColor = randomColor;

});

const image = document.querySelector('#image');
const button = document.querySelector('#changeImage')
button.addEventListener('click', function () {
  image.src = `https://picsum.photos/500/300?random=${Math.random()}`;
 
})