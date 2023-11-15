export let firstTimeLoading = false;
const nightIcon = document.querySelector(".dark");
const lightIcon = document.querySelector(".light");

const header = document.getElementById("header");
const headerLogoImg = document.querySelector(".header-logo-image");
const Headermenu = document.querySelector(".menu");

const nav = document.getElementById("nav");

const body = document.getElementById("body");

const navigationContents = document.querySelectorAll(".navigation-content");

let kirishBtn = document.querySelector(".kirish_Btn1");
let kirishImg = document.querySelector(".kirish_img");
console.log(localStorage.getItem("confirm"));

for (let i = 0; i < navigationContents.length; i++) {
  navigationContents[i].classList.remove("active");
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
  body.classList.toggle("header-nav-night");

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
  body.classList.toggle("header-nav-night");
}
lightIcon.onclick = () => {
  nightIcon.classList.toggle("light-night");
  lightIcon.classList.toggle("night-light");
  header.classList.toggle("header-nav-night");
  headerLogoImg.classList.toggle("header-logo-image2");

  nav.classList.toggle("header-nav-night");

  body.classList.toggle("body-night");
  body.classList.toggle("header-nav-night");

  localStorage.removeItem("night_Mode");
};

const form_swritcher = document.querySelector(".form-switcher");
const form_swritcher2 = document.querySelector(".form-switcher2");

const signForm = document.querySelector(".sign-container-form");
const signForm2 = document.querySelector(".sign-container-form2");

form_swritcher.onclick = () => {
  signForm.classList.remove("bor");
  signForm.classList.add("yoq");
  signForm2.classList.remove("yoq");
  signForm2.classList.add("bor");
};
form_swritcher2.onclick = () => {
  signForm2.classList.remove("bor");
  signForm2.classList.add("yoq");
  signForm.classList.remove("yoq");
  signForm.classList.add("bor");
};

const form1 = document.querySelector(".sign-container-form");
const form2 = document.querySelector(".sign-container-form2");

const formInput1 = document.querySelector(".form-input1");
const formInput2 = document.querySelector(".form-input2");

const formWarningText = document.querySelectorAll(".warning");

form1.addEventListener("submit", (i) => {
  i.preventDefault();
  if (formInput1.value == "") {
    formInput1.classList.add("form-input1-1");
    formWarningText[0].classList.add("bor");
  } else {
    formInput1.classList.remove("form-input1-1");
    formWarningText[0].classList.remove("bor");
  }
  if (formInput2.value == "") {
    formInput2.classList.add("form-input2-2");
    formWarningText[1].classList.add("bor");
  } else {
    formInput2.classList.remove("form-input2-2");
    formWarningText[1].classList.remove("bor");
  }
});

let form2Input1 = document.querySelector(".form2-input1");
let form2Input2 = document.querySelector(".form2-input2");
let form2Input3 = document.querySelector(".form2-input3");

const form2WarningText = document.querySelectorAll(".form2-warning-text2-2");

const containerText = document.querySelector(".container-texts");
let userCount2 = localStorage.getItem("user_Count");
userCount2 = JSON.parse(userCount2);

form2WarningText[0].classList.add("yoq");
form2.addEventListener("submit", (i) => {
  var o = 0;
  i.preventDefault();
  if (form2Input1.value == "") {
    form2Input1.classList.add("form-input1-1");
    form2WarningText[0].classList.add("bor");
  } else {
    form2Input1.classList.remove("form-input1-1");
    form2WarningText[0].classList.remove("bor");
    o++;
  }
  if (form2Input2.value == "") {
    form2Input2.classList.add("form-input1-1");
    form2WarningText[1].classList.add("bor");
    containerText.classList.add("bor");
  } else {
    form2Input2.classList.remove("form-input1-1");
    form2WarningText[1].classList.remove("bor");
    containerText.classList.remove("bor");
    o++;
  }
  if (form2Input3.value == "") {
    form2Input3.classList.add("form-input1-1");
    form2WarningText[2].classList.add("bor");
    containerText.classList.add("bor");
  } else {
    form2Input3.classList.remove("form-input1-1");
    form2WarningText[2].classList.remove("bor");
    containerText.classList.remove("bor");
    o++;
  }
  if (form2Input2.value != form2Input3.value) {
    alert("Har ikki parol birhil bo'lsin!");
  } else {
    if (o == 3) {
      userCount2++;
      let userData = {};
      userData[`userEmail${userCount2}`] = form2Input1.value;
      userData[`userPassword${userCount2}`] = form2Input2.value;

      form2Input1 = JSON.stringify(form2Input1.value);
      localStorage.setItem("user_Name", form2Input1);

      let users_Original = localStorage.getItem("users");
      users_Original = JSON.parse(users_Original);
      users_Original.push(userData);

      console.log(userData);

      // form2Input1.value = "";
      // form2Input2.value = "";
      // form2Input3.value = "";

      console.log(users_Original);

      users_Original = JSON.stringify(users_Original);
      localStorage.setItem("users", users_Original);

      localStorage.setItem("user_Count", userCount2);

      alert("Ro'yhatdan o'ttingiz!");

      firstTimeLoading = false;

      signForm2.classList.remove("bor");
      signForm2.classList.add("yoq");
      signForm.classList.remove("yoq");
      signForm.classList.add("bor");
    }
  }
});

form1.addEventListener("submit", (k) => {
  k.preventDefault();

  if (formInput1.value == "" || formInput2.value == "") {
    alert("Formani To'ldiring!");
  }
  if (formInput1.value != "" && formInput2.value != "") {
    var usersData = localStorage.getItem("users");
    usersData = JSON.parse(usersData);
    for (let i = 0; i < usersData.length; i++) {
      let email = usersData[i][`userEmail${i + 1}`];
      let password = usersData[i][`userPassword${i + 1}`];

      if (formInput1.value == email && formInput2.value == password) {
        location.replace("./settings.html");

        let tasdiqlash = "tasdiqlandi";
        tasdiqlash = JSON.stringify(tasdiqlash);
        localStorage.setItem("confirm", tasdiqlash);
      }
    }
    setTimeout(() => {
      alert("Bunday foydalanuvchi topilmadi");
    }, 400);
  }
});
