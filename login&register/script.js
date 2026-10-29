// // ========================================
// // TOAST
// // ========================================

// function showToast(message, color) {

//     Toastify({
//         text: message,
//         duration: 2000,
//         gravity: "top",
//         position: "right",
//         backgroundColor: color
//     }).showToast();

// }


// // ========================================
// // REGISTER
// // ========================================

// const registerform = document.getElementById("registerform");

// if (registerform) {

//     registerform.addEventListener("submit", function (e) {

//         e.preventDefault();

//         const name =
//             document.getElementById("name").value.trim();

//         const email =
//             document.getElementById("email").value.trim();

//         const password =
//             document.getElementById("password").value.trim();


//         const user = {

//             name: name,
//             email: email,
//             password: password

//         };


//         localStorage.setItem(
//             "user",
//             JSON.stringify(user)
//         );


//         showToast(
//             "Registration Successful!",
//             "green"
//         );


//         setTimeout(function () {

//             window.location.href = "login.html";

//         }, 1000);

//     });

// }


// // ========================================
// // LOGIN
// // ========================================

// const loginform = document.getElementById("loginform");

// if (loginform) {

//     loginform.addEventListener("submit", function (e) {

//         e.preventDefault();


//         const email =
//             document.getElementById("email").value.trim();

//         const password =
//             document.getElementById("password").value.trim();


//         const saveduser =
//             JSON.parse(localStorage.getItem("user"));


//         // USER NOT FOUND
//         if (!saveduser) {

//             showToast(
//                 "User not found. Please register first!",
//                 "red"
//             );

//             return;
//         }


//         // CHECK EMAIL + PASSWORD
//         if (
//             email === saveduser.email &&
//             password === saveduser.password
//         ) {

//             // IMPORTANT
//             localStorage.setItem(
//                 "isLoggedIn",
//                 "true"
//           );
//           if (isLoggedIn === "true") {
//     loginNav.style.display = "none";
//     logoutNav.style.display = "block";
// }


//             // Save current user
//             localStorage.setItem(
//                 "currentUser",
//                 JSON.stringify({
//                     name: saveduser.name,
//                     email: saveduser.email
//                 })
//             );


//             showToast(
//                 "Login Successful!",
//                 "green"
//             );


//             setTimeout(function () {

//                 window.location.href = "index.html";

//             }, 1000);


//         } else {

//             showToast(
//                 "Invalid email or password!",
//                 "red"
//             );

//         }

//     });

// }


// // ========================================
// // NAVBAR AUTH STATE
// // ========================================

// const loginNav =
//     document.getElementById("loginNav");

// const logoutNav =
//     document.getElementById("logoutNav");

// const isLoggedIn =
//   localStorage.get
    
// logoutNav.addEventListener('click', function () {
//   logoutNav.style.display = 'none'
//   showToast("Logout Successfully" , 'blue')
// })

function showToast(message, color) {

    Toastify({
        text: message,
        duration: 2000,
        gravity: "bottom",
        position: "right",
        backgroundColor: color
    }).showToast();

}
  



// regex
const nameRegex = /^[A-Za-z ]{2,40}$/;

// Email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Strong Password
const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


// Register
  
const registerform = document.getElementById('registerform');

if (registerform) {
  registerform.addEventListener('submit', function (e) {
  e.preventDefault()
  const name = document.getElementById('name').value.trim()
  const email = document.getElementById('email').value.trim().toLowerCase()
  const password = document.getElementById('password').value.trim();


  //Name Validation 

  if (!nameRegex.test(name)) {
    showToast('Please enter a valid name', 'red');
    return 

  }
  //Email Validation

  if (!emailRegex.test(email)) {
    showToast('Please enter a valid email', 'red');
return 
}

  if (!passwordRegex.test(password)) {
    showToast('Password must contain 8+ characters, uppercase, lowercase, number and special character!', 'red')
    return 
  }

    const confirmPassword = document.getElementById('confirmPassword').value.trim()
if (password !== confirmPassword) {
  showToast('Password not matched', 'red')

  return 
}
  
  const user = {
    name: name,
    email: email,
    password: password,
    
    }
        // =========================
        // GET OLD USERS
        // =========================

        const users =
            JSON.parse(localStorage.getItem('users')) || [];

    
     const existingUser =users.find(user => user.email === email);

        if (existingUser) {

            showToast(
                'Email already registered!',
                'red'
            );

            return;
        }

        // =========================
        // ADD NEW USER
        // =========================

        users.push(user);
  localStorage.setItem('users', JSON.stringify(users))

  showToast("Register Successfull", 'green');

  setTimeout(() => {
    window.location.href = "login.html"
  }, 1000);


})

}



const loginform = document.getElementById('loginform');

if (loginform) {
  loginform.addEventListener('submit', function (e) {
    e.preventDefault()
    const email = document.getElementById('email').value.trim().toLowerCase();
    const password = document.getElementById('password').value.trim()
    // const savedUser = JSON.parse(localStorage.getItem('user'));


      const users =  JSON.parse(localStorage.getItem('users')) || [];
   
    const savedUser = users.find(user => user.email === email)

    if (!savedUser) {
      showToast('Oh, really? Have you registered?', 'red')
      return

    }
    //login check

    if (email === savedUser.email && password === savedUser.password) {
      localStorage.setItem('isLoggedIn', "true")

      
      localStorage.setItem("currentUser", JSON.stringify({ name: savedUser.name, email: savedUser.email }));
      showToast('Login successfull', 'green');

      setTimeout(() => {
        window.location.href = "index.html"
        
      }, 1000);
    }
    else {
      showToast('Enter Correct email and password', 'blue');

    }

  });  

}
function checkAuth() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  if (isLoggedIn !== true ) {
    window.location.href = "login.html"
  }
  }


   const loginNav = document.getElementById("loginNav");

const logoutNav = document.getElementById("logoutNav");

const isLoggedIn =localStorage.getItem("isLoggedIn");



if (loginNav && logoutNav) {
  checkAuth()
  if (isLoggedIn === "true") {
    loginNav.style.display = "none",
    logoutNav.style.display = "block";
  }
  else {
    loginNav.style.display = "block",
    logoutNav.style.display = 'none'
  }
}

const logoutBtn = document.getElementById("logoutBtn");


if (logoutBtn) {

    logoutBtn.addEventListener("click",function () {

            localStorage.removeItem(
                "isLoggedIn"
            );

            localStorage.removeItem(
                "currentUser"
            );

            showToast(
                "Logout Successful!",
                "blue"
            );


            setTimeout(function () {

                window.location.href =
                    "index.html";

            },1000);

        }
    );

}

function redirectedIfLogin() {
  const isLoggedIn = localStorage.getItem('isLoggedIn')
  if (isLoggedIn === 'true') {
    window.location.href = "index.html";
    
  }
}