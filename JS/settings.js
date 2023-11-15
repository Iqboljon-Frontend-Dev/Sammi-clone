const nightIcon = document.querySelector(".dark");
const lightIcon = document.querySelector(".light");

const header = document.getElementById("header");
const headerLogoImg = document.querySelector(".header-logo-image");
const Headermenu = document.querySelector(".menu");

const nav = document.getElementById("nav");

const body = document.getElementById("body");
const navigationContents = document.querySelectorAll(".navigation-content");

const mainContainer = document.querySelector(".main-container");

const courses = document.querySelectorAll(".settings-container");
let navigations = document.querySelectorAll(".s-c-navigation");

const kirishBtn = document.querySelector(".kirish_Btn1");
let profileForm = document.querySelector(".profile-form");
profileForm.onsubmit = () => {
  alert("Qabul qilindi");
};
console.log(kirishBtn);
let kirishImg = document.querySelector(".kirish-img");
let confirm = localStorage.getItem("confirm");
let button = document.querySelector(".buttons");
kirishImg.onclick = () => {
  button.classList.toggle("buttons2");
};
let buttonSettings = document.getElementById("button");
buttonSettings.onclick = () => {
  location.replace("../index/settings.html");
};
button2.onclick = () => {
  localStorage.removeItem("confirm");
  location.replace("../index.html");
};
confirm = JSON.parse(confirm);
console.log(confirm);
if (confirm == "tasdiqlandi") {
  kirishBtn.classList.add("yoq");
  kirishImg.classList.add("bor");
} else {
  kirishBtn.classList.add("bor");
  kirishImg.classList.add("yoq");
}

for (let i = 0; i < courses.length; i++) {
  navigations[i].addEventListener("click", () => {
    for (let j = 0; j < courses.length; j++) {
      if (i == j) {
        courses[j].classList.add("bor");
        courses[j].classList.remove("yoq");
        navigations[j].classList.add("active");
        if (j == 1) {
          navigations2[1].classList.add("active");
          console.log("for 1 navigation2");
        }
        if (j == 2) {
          navigations3[2].classList.add("active");
          console.log("for 1 navigation3");
        }
      } else {
        courses[j].classList.add("yoq");
        courses[j].classList.remove("bor");
        navigations[j].classList.remove("active");
        navigations2[j].classList.remove("active");
        navigations3[j].classList.remove("active");
      }
    }
  });
}
const navigations2 = document.querySelectorAll(".s-c-navigation2");

let profileUserName = document.querySelector(".profileUserName");
let user_Name = localStorage.getItem("user_Name");
user_Name = JSON.parse(user_Name);
profileUserName.innerHTML = user_Name;

for (let i = 0; i < courses.length; i++) {
  navigations2[i].addEventListener("click", () => {
    for (let j = 0; j < courses.length; j++) {
      if (i == j) {
        courses[j].classList.add("bor");
        courses[j].classList.remove("yoq");
        navigations2[j].classList.add("active");
        if (j == 0) {
          navigations[0].classList.add("active");
          console.log("for 2 navigation1");
        }
        if (j == 2) {
          navigations3[2].classList.add("active");
          console.log("for 2 navigation3");
        }
      } else {
        courses[j].classList.add("yoq");
        courses[j].classList.remove("bor");
        navigations2[j].classList.remove("active");
        navigations[j].classList.remove("active");
        navigations3[j].classList.remove("active");
      }
    }
  });
}
const navigations3 = document.querySelectorAll(".s-c-navigation3");

for (let i = 0; i < courses.length; i++) {
  navigations3[i].addEventListener("click", () => {
    for (let j = 0; j < courses.length; j++) {
      if (i == j) {
        courses[j].classList.add("bor");
        courses[j].classList.remove("yoq");
        navigations3[j].classList.add("active");
        console.log(j);
        if (j == 0) {
          navigations[0].classList.add("active");
          console.log("for 3 navigation2");
        }
        if (j == 1) {
          navigations2[1].classList.add("active");
          console.log("for 3 navigation1");
        }
      } else {
        courses[j].classList.add("yoq");
        courses[j].classList.remove("bor");
        navigations3[j].classList.remove("active");
        navigations[j].classList.remove("active");
        navigations2[j].classList.remove("active");
      }
    }
  });
}

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

  let night = "night";
  let night_JSON = JSON.stringify(night);
  localStorage.setItem("night_Mode", night_JSON);

  mainContainer.classList.toggle("header-nav-night");
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

  mainContainer.classList.toggle("header-nav-night");
}
lightIcon.onclick = () => {
  nightIcon.classList.toggle("light-night");
  lightIcon.classList.toggle("night-light");
  header.classList.toggle("header-nav-night");
  headerLogoImg.classList.toggle("header-logo-image2");

  nav.classList.toggle("header-nav-night");

  body.classList.toggle("body-night");

  localStorage.removeItem("night_Mode");

  mainContainer.classList.toggle("header-nav-night");
};
