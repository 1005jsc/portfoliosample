'use strict';


const contactMe = document.querySelector('.home__contact');
contactMe.addEventListener('click', () => {
  console.log('click confirmed')
  window.scrollTo(0,7000)
});

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', e => {
  const target = e.target;
  const link = target.dataset.link;
  if(link == null) {
    return;
  }
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior: "smooth"})




  console.log(link);
})