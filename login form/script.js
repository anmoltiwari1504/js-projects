let formpop = document.querySelector(".form-popup");
let loginbtn = document.querySelector(".nav-btn");
let closebtn = document.querySelector(".form-popup .close-btn");
let bottombtn = document.querySelectorAll(".form-box .bottom-link a");
loginbtn.addEventListener("click", () => {
  document.body.classList.toggle("show-popup")
})
closebtn.addEventListener("click", () => loginbtn.click());
bottombtn.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    formpop.classList[link.id === "signup-link" ? 'add' : 'remove']("show-signup");
  })
});
  let tl  = gsap.timeline()
  tl.from(".list .ul-list li", {
  
    duration: 1.75,
    opacity: 0,
    stagger:0.15,

    
  })

gsap.form(".logo img", {
  x: -100,
  duration: 1,
  opacity: 0,
  stagger:1,
})