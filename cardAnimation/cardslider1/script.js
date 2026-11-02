const container = document.querySelector(".container");
const percent = document.querySelector("#percent");
 
let perval = 0;
let increment = setInterval(() => {
  perval++;
  percent.textContent = `${perval}%`;
  // console.log(perval)
  if (perval == 100) {
    clearInterval(increment)
    container.classList.remove("active")
  }
},100)