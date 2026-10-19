const passwordBox = document.querySelector("#Password");
const button = document.querySelector("button");
const copy = document.querySelector("#copy")
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789"


const allChar = upperCase + lowerCase + number

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
 
  while (length > password.length) {
    password += allChar[Math.floor(Math.random() * allChar.length)]
  }
  passwordBox.value = password; 
}


button.addEventListener("click", ()=> {
  createPassword();
})
console.log(passwordBox)
function copyPassword() {
  passwordBox.select();
  document.execCommand("copy")
}
copy.addEventListener("click", function () {
  copyPassword()
  alert("copied")
  
}
)
