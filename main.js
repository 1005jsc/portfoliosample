'use strict';

//1. navbar 스크롤 됨에 따라 투명해짐
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {

  if(window.scrollY > navbarHeight){
    
    navbar.classList.add('navbar--dark');
  }else{
    navbar.classList.remove('navbar--dark');
  }
});

//2. navbar li 누르면 해당위치로 이동
const contactMe = document.querySelector('.home__contact');
contactMe.addEventListener('click', () => {
  console.log('click confirmed')
  window.scrollTo(0,5500)
});

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', e => {
  const target = e.target;
  const link = target.dataset.link;
  if(link == null) {
    return;
  }
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior: "smooth"});
  console.log(link);
});


//3. 스크롤 됨에 따라 Home의 게시물이 투명해짐 

const home = document.querySelector('.home__container');
const homesec = document.querySelector('#home')
const homesecHeight = homesec.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY/homesecHeight;
});


//4. arrow__up

//1. 스크롤 되면 화면 밑에 나오게끔 하기 

const arrowUp = document.querySelector('.arrow__up');
document.addEventListener('scroll', () => {
  if(window.scrollY > 800){
    arrowUp.classList.add('arrow--show');
  }else{
    arrowUp.classList.remove('arrow--show');
  }
});


//2. 누르면 제일 윗쪽으로 다시 올라가게끔 하기 

arrowUp.addEventListener('click', () => {
  window.scrollTo(0,0);
});


