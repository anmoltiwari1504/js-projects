let clock = document.querySelector(".clock");
 
function showTime() {
  let date = new Date()
let hours = date.getHours();
let minutes = date.getMinutes();
let second = date.getSeconds();
 
hours = (hours < 10)? "0 "+ hours : hours;
minutes = (minutes < 10)? "0"+ minutes : minutes;
second = (second < 10)? '0' + second : second;
let time = hours + ":" + minutes + ":" + second
clock.innerHTML = time 
}
showTime()
setInterval(showTime , 1000)