// ==Start splide slider
// initialize
const splide = new Splide('.splide', {
	type: 'loop',
	autoplay: true,
  interval: 3000,
});

document.addEventListener('DOMContentLoaded', () => {
	splide.mount();
});

// Handle custom arrows
document.querySelector('.custom__arrow--prev').addEventListener('click', function () {
	splide.go('-');
});

document.querySelector('.custom__arrow--next').addEventListener('click', function () {
	splide.go('+');
});
// ==End splide slider

// ==Start nav handler
let prevScrollpos = window.pageYOffset;

window.onscroll = () => {

  let currentScrollPos = window.pageYOffset;
  const nav = document.querySelector(".navbar");
  const scrollUpBtn = document.querySelector(".back-to-btn");

  if (window.innerWidth > 480) {

    if (currentScrollPos < 250) {
      scrollUpBtn.style.opacity = '0';
      scrollUpBtn.style.visibility = 'hidden';
    } else {
      scrollUpBtn.style.opacity = '1';
      scrollUpBtn.style.visibility = 'visible';
    }

    if (prevScrollpos > currentScrollPos) {
      nav.style.opacity = "1";
      nav.style.visibility = 'visible';
    } else {
      nav.style.opacity = "0";
      nav.style.visibility = 'hidden';
    }
    prevScrollpos = currentScrollPos;

  }

}
// ==Start nav handler

// ==Start handle nav visibility in mobile
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector(".navbar");

menuIcon.addEventListener('mouseup', () => {

  nav.classList.contains('active') ? nav.classList.remove('active') : nav.classList.add('active');
  menuIcon.classList.contains('active') ? menuIcon.classList.remove('active') : menuIcon.classList.add('active');
  menuIcon.classList.contains('active') ? menuIcon.classList.replace('fa-bars', 'fa-minus') : menuIcon.classList.replace('fa-minus', 'fa-bars');

})

const childsArr = Array.from(nav.children);

childsArr.map(child => {
  !child.classList.contains('search-box') && 
    child.addEventListener('mouseup', () => {
      menuIcon.classList.replace('fa-minus', 'fa-bars');
      menuIcon.classList.remove('active');
      nav.classList.remove('active');
    })
})

// ==End handle nav visibility in mobile

// ==Start handle loading screen
window.addEventListener('load', () => {
  const loadScreen = document.querySelector('.loading-screen');
  const body = document.body;

  setTimeout(() => {
    loadScreen.classList.remove('loading');
    body.classList.remove('loading');
  }, 3000)
})
// ==End handle loading screen