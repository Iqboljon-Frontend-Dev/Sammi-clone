const nightIcon = document.querySelector('.dark');
const lightIcon = document.querySelector('.light');

const header = document.getElementById('header');
const headerLogoImg = document.querySelector('.header-logo-image');
const Headermenu = document.querySelector('.menu');

const nav = document.getElementById('nav');

const body = document.getElementById('body');

const libraryInfo = document.querySelector('.library-info');
const additionalInfos = document.querySelector('.additional-infos');

Headermenu.onclick = () =>{
    nav.classList.toggle('show-hide-nav')
}

nightIcon.onclick = () =>{
    nightIcon.classList.toggle('light-night');
    lightIcon.classList.toggle('night-light');
    header.classList.toggle('header-nav-night');
    headerLogoImg.classList.toggle('header-logo-image2');

    nav.classList.toggle('header-nav-night')
   
    body.classList.toggle('body-night');

    libraryInfo.classList.toggle('header-nav-night')
    additionalInfos.classList.toggle('header-nav-night');

    let night = 'night';
    let night_JSON = JSON.stringify(night);
    localStorage.setItem('night_Mode', night_JSON);

};
let night_Check = localStorage.getItem('night_Mode');
let night_Check_Original = JSON.parse(night_Check);

if (night_Check_Original == 'night'){
    nightIcon.classList.toggle('light-night');
    lightIcon.classList.toggle('night-light');
    header.classList.toggle('header-nav-night');
    headerLogoImg.classList.toggle('header-logo-image2');

    nav.classList.toggle('header-nav-night')
   
    body.classList.toggle('body-night');

    libraryInfo.classList.toggle('header-nav-night')
    additionalInfos.classList.toggle('header-nav-night');
}

lightIcon.onclick = () =>{
    nightIcon.classList.toggle('light-night');
    lightIcon.classList.toggle('night-light');
    header.classList.toggle('header-nav-night');
    headerLogoImg.classList.toggle('header-logo-image2');

    nav.classList.toggle('header-nav-night')
  
    body.classList.toggle('body-night');

    libraryInfo.classList.toggle('header-nav-night')
    additionalInfos.classList.toggle('header-nav-night')

    localStorage.removeItem('night_Mode');
};

console.log(1);