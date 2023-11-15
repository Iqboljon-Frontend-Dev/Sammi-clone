const nightIcon = document.querySelector(".dark");
const lightIcon = document.querySelector(".light");

nightIcon.onclick = () => {
  nightIcon.classList.toggle("light-night");
  lightIcon.classList.toggle("night-light");

  let body = document.getElementsByTagName("body");
  body[0].classList.toggle("header-nav-night");

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

  let body = document.getElementsByTagName("body");
  body[0].classList.remove("header-nav-night");
  console.log(body[0]);
}

lightIcon.onclick = () => {
  nightIcon.classList.toggle("light-night");
  lightIcon.classList.toggle("night-light");

  let body = document.getElementsByTagName("body");
  body[0].classList.toggle("header-nav-night");

  localStorage.removeItem("night_Mode");
};
