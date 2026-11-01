const buttons = document.querySelector(".button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e);
  });
  
}