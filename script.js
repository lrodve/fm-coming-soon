const hero = document.querySelector(".hero");
const form = document.querySelector("form");
const email = document.querySelector("#input-email");
const errorText = document.querySelector(".error-text");

//media query for hero image
/* if (window.matchMedia("(min-width: 1024px)").matches) {
  hero.src = "./images/hero-desktop.jpg";
} else {
  hero.src = "./images/hero-mobile.jpg";
} */

//validate input form
form.addEventListener("submit", (event) => {
  if (email.value && email.validity.valid) {
    errorText.classList.remove("active");
    errorText.textContent = "";
  } else {
    console.log("error....");
    event.preventDefault();
    errorText.textContent = "Please provide a valid email";
    errorText.classList.add("active");
  }
});

email.addEventListener("input", () => {
  errorText.classList.remove("active");
  errorText.textContent = "";
});
