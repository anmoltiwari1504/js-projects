const form = document.querySelector('form');
form.addEventListener("submit", (e) => {
  e.preventDefault()
  console.log(e)


  
  const message = document.querySelector("#message").value.trim()
  const name = document.querySelector("#name").value.trim()
  const email = document.querySelector("#email").value.trim()
  const number = document.querySelector("#phone").value.trim()
  const error = document.querySelectorAll(".error");
  const subject = document.querySelector("#subject").value.trim()
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const numberRegex = /^[6-9][0-9]{9}$/;
    
  let cleanNumber = number.replace(/^0+/, "")
  let isValid = true;
  if (!name) {
    error[0].style.display = "block"
    isValid = false
  }
  else {
    error[0].style.display = "none"
  }
  if (!emailRegex.test(email)) {
    error[1].style.display = "block"
    isValid = false
  }
  else {
    error[1].style.display = "none"
  }
  if (!numberRegex.test(cleanNumber)) {
    error[2].style.display = "block"
    error[2].textContent = "Enter the valid 10 digit number "
    isValid = false
    console.log(numberRegex.test(number));
  }
  else {
    error[2].style.display = "none"
  }
  if (!subject) {
    error[3].style.display = "block"
    error[3].textContent = "Choose the subject"
    isValid = false
  }
  else {
    error[3].style.display = "none"
  }
  if (!message) {
    error[4].style.display = "block";
    error[4].textContent = "Enter the message"
    isValid = false;
  }
  else {
    error[4].style.display = "none"
  }
  if (!isValid) {
      
    Toastify({
      text: "Please fix the errors",
      duration: 3000,
      gravity: "bottom",
      position: "right",
      backgroundColor: "red",
    }).showToast();
      
    return;
  }

    
  const formdata = {
    name,
    email,
    number: cleanNumber,
    subject,
    message,
  }
  
  let alldata = JSON.parse(localStorage.getItem("studentform")) || [];
  alldata.push(formdata);
  localStorage.setItem("studentform", JSON.stringify(alldata));
  Toastify({
    text: "Form submitted successfully",
    duration: 3000,
    gravity: "top",
    position: "right",
    backgroundColor: "green",
  }).showToast();
  // store the data in google sheet
  fetch('https://script.google.com/macros/s/AKfycbxNLa8y_Xp_f4-cRB0nNEFlxXw_1VNyKsQCFWrfFNxdRVFNQVV_Fj2J0XQQ5UWuBVlURA/exec', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formdata),
    mode: "no-cors"
  })
    .then(res => res.text())
    .then(data => {
      console.log("Response:", data);

      Toastify({
        text: "Saved to Google Sheet ",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "green",
      }).showToast();

      form.reset();
    })
    .catch(err => {
      console.log(err);

      Toastify({
        text: "Error saving data ",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "red",
      }).showToast();
    })
})

form.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && e.target.tagName !== "TEXTAREA") {
    e.preventDefault();
    form.requestSubmit();
  }
});