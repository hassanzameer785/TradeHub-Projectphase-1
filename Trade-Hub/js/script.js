// JS/script.js

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 3 seconds
}

document.addEventListener("DOMContentLoaded", function () {
    addClickEventToCard("mobiles");
});

function addClickEventToCard(category) {
    var cards = document.querySelectorAll("." + category + "-card img");
    cards.forEach(function (card) {
        card.addEventListener("click", function () {
            openImageInNewTab(card.src);
        });
    });
}

function openImageInNewTab(imageSrc) {
    window.open(imageSrc, "_blank");
}

document.addEventListener("DOMContentLoaded", function () {
    addClickEventToCard("cars");
});

function addClickEventToCard(category) {
    var cards = document.querySelectorAll("." + category + "-card img");
    cards.forEach(function (card) {
        card.addEventListener("click", function () {
            openImageInNewTab(card.src);
        });
    });
}

function openImageInNewTab(imageSrc) {
    window.open(imageSrc, "_blank");
}
document.addEventListener("DOMContentLoaded", function () {
    addClickEventToCard("land_and_plots");
});

function addClickEventToCard(category) {
    var cards = document.querySelectorAll("." + category + "-card img");
    cards.forEach(function (card) {
        card.addEventListener("click", function () {
            openImageInNewTab(card.src);
        });
    });
}

function openImageInNewTab(imageSrc) {
    window.open(imageSrc, "_blank");
}


// sell button js

// main.js

document.addEventListener("DOMContentLoaded", function () {
    // Handle SignUp form submission
    const signUpForm = document.querySelector("#signupModal form");
    signUpForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission
        // Add your SignUp form handling logic here
        const fullName = signUpForm.querySelector('[name="fullName"]').value;
        const emailSignUp = signUpForm.querySelector('[name="emailSignUp"]').value;
        const passwordSignUp = signUpForm.querySelector('[name="passwordSignUp"]').value;
        const confirmPassword = signUpForm.querySelector('[name="confirmPassword"]').value;

        // Example: Log form data to the console
        console.log("SignUp Form Data:", {
            fullName,
            emailSignUp,
            passwordSignUp,
            confirmPassword,
        });

        // You can now send this data to the server using an AJAX request or other methods
    });

    // Handle Login form submission
    const loginForm = document.querySelector("#loginModal form");
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission
        // Add your Login form handling logic here
        const emailLogin = loginForm.querySelector('[name="emailLogin"]').value;
        const passwordLogin = loginForm.querySelector('[name="passwordLogin"]').value;

        // Example: Log form data to the console
        console.log("Login Form Data:", {
            emailLogin,
            passwordLogin,
        });

        // You can now send this data to the server using an AJAX request or other methods
    });
});
