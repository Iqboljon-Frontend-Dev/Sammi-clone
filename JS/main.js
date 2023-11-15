const nightIcon = document.querySelector(".dark");
const lightIcon = document.querySelector(".light");

const header = document.getElementById("header");
const headerLogoImg = document.querySelector(".header-logo-image");
const Headermenu = document.querySelector(".menu");

const nav = document.getElementById("nav");

const body = document.getElementById("body");

const mernAlert = document.querySelector(".mern");
const mernCloseBtn = document.querySelector(".mern > .exitBtn");

const sammiCourses = document.querySelector(".sammi-courses");

const sammiServices = document.querySelector(".sammi-services");

const sammiServicesArows = document.querySelectorAll(".sammi-service-arrow");

const sammiServicesLogo = document.querySelectorAll(
  ".sammi-service-logo > svg"
);

const sammiNewCourses = document.querySelector(".new-sammi-courses");

const sammiPopularCourses = document.querySelector(".popular-courses");

const sammiInvation = document.querySelector(".invations");

const sammiForm = document.querySelector(".sammi-form");
const sammiFormC = document.querySelector(".sammi-form-c");
const sammiFormInput = document.querySelector(".sammi-form input");

const navigationContents = document.querySelectorAll(".navigation-content");
navigationContents[0].classList.add("hello");

const kirishBtn = document.querySelector(".kirish_Btn1");
let kirishImg = document.querySelector(".kirish-img");
let confirm = localStorage.getItem("confirm");
let button = document.querySelector(".buttons");
kirishImg.onclick = () => {
  button.classList.toggle("buttons2");
};
let buttonSettings = document.getElementById("button");
buttonSettings.onclick = () => {
  location.replace("./index/settings.html");
};
button2.onclick = () => {
  localStorage.removeItem("confirm");
  location.replace("index.html");
};
confirm = JSON.parse(confirm);
console.log(confirm);
if (confirm == "tasdiqlandi") {
  kirishBtn.classList.add("yoq");
  kirishImg.classList.add("bor");
} else {
  // kirishBtn.classList.add("bor");
  kirishImg.classList.add("yoq");
}

// kirishBtn.onclick = () => {
//   kirishBtn.classList.add("kirish_Btn2");
// };

sammiForm.addEventListener("submit", (i) => {
  i.preventDefault();
  sammiFormInput.disabled = true;
  sammiFormInput.style.cursor = "not-allowed";
});

mernCloseBtn.onclick = () => {
  mernAlert.remove();
};
Headermenu.onclick = () => {
  nav.classList.toggle("show-hide-nav");
};

nightIcon.onclick = () => {
  nightIcon.classList.toggle("light-night");
  lightIcon.classList.toggle("night-light");
  header.classList.toggle("header-nav-night");
  headerLogoImg.classList.toggle("header-logo-image2");

  nav.classList.toggle("header-nav-night");

  body.classList.toggle("body-night");

  mernAlert.classList.toggle("header-nav-night");

  sammiCourses.classList.toggle("header-nav-night");

  sammiServices.classList.toggle("header-nav-night");
  sammiServicesArows[0].classList.toggle("sammi-service-arrow2");
  sammiServicesArows[1].classList.toggle("sammi-service-arrow2");
  sammiServicesLogo[0].classList.toggle("sammi-service-arrow2");
  sammiServicesLogo[1].classList.toggle("sammi-service-arrow2");
  sammiServicesLogo[2].classList.toggle("sammi-service-arrow2");

  sammiNewCourses.classList.toggle("header-nav-night");

  sammiPopularCourses.classList.toggle("header-nav-night");

  sammiInvation.classList.toggle("header-nav-night");

  sammiFormC.classList.toggle("header-nav-night");

  let night = "night";
  let night_JSON = JSON.stringify(night);
  localStorage.setItem("night_Mode", night_JSON);

  let night_Check = localStorage.getItem("night_Mode");
  let night_Check_Original = JSON.parse(night_Check);
};
let night_Check = localStorage.getItem("night_Mode");
let night_Check_Original = JSON.parse(night_Check);

if (night_Check_Original == "night") {
  nightIcon.classList.toggle("light-night");
  lightIcon.classList.toggle("night-light");
  header.classList.toggle("header-nav-night");
  headerLogoImg.classList.toggle("header-logo-image2");

  nav.classList.toggle("header-nav-night");

  body.classList.toggle("body-night");

  mernAlert.classList.toggle("header-nav-night");

  sammiCourses.classList.toggle("header-nav-night");

  sammiServices.classList.toggle("header-nav-night");
  sammiServicesArows[0].classList.toggle("sammi-service-arrow2");
  sammiServicesArows[1].classList.toggle("sammi-service-arrow2");
  sammiServicesLogo[0].classList.toggle("sammi-service-arrow2");
  sammiServicesLogo[1].classList.toggle("sammi-service-arrow2");
  sammiServicesLogo[2].classList.toggle("sammi-service-arrow2");

  sammiNewCourses.classList.toggle("header-nav-night");

  sammiPopularCourses.classList.toggle("header-nav-night");

  sammiInvation.classList.toggle("header-nav-night");

  sammiFormC.classList.toggle("header-nav-night");
}
lightIcon.onclick = () => {
  nightIcon.classList.toggle("light-night");
  lightIcon.classList.toggle("night-light");
  header.classList.toggle("header-nav-night");
  headerLogoImg.classList.toggle("header-logo-image2");

  nav.classList.toggle("header-nav-night");

  body.classList.toggle("body-night");

  mernAlert.classList.toggle("header-nav-night");

  sammiCourses.classList.toggle("header-nav-night");

  sammiServices.classList.toggle("header-nav-night");
  sammiServicesArows[0].classList.toggle("sammi-service-arrow2");
  sammiServicesArows[1].classList.toggle("sammi-service-arrow2");
  sammiServicesLogo[0].classList.toggle("sammi-service-arrow2");
  sammiServicesLogo[1].classList.toggle("sammi-service-arrow2");
  sammiServicesLogo[2].classList.toggle("sammi-service-arrow2");

  sammiNewCourses.classList.toggle("header-nav-night");

  sammiPopularCourses.classList.toggle("header-nav-night");

  sammiInvation.classList.toggle("header-nav-night");

  sammiFormC.classList.toggle("header-nav-night");

  localStorage.removeItem("night_Mode");
};
