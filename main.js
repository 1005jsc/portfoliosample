'use strict';

//1. JS: Navbar menu click (스크롤시 navbar가 투명해짐)
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {

  if(window.scrollY > navbarHeight){
    
    navbar.classList.add('navbar--dark');
  }else{
    navbar.classList.remove('navbar--dark');
  }
});

//2. JS: navbar (navbar li 누르면 해당navbar 위치로 이동)
//2.1 navbar li 누르면 하이라이트 될 수 있도록 
const contactMe = document.querySelector('.home__contact');
contactMe.addEventListener('click', () => {
  console.log('click confirmed')
  window.scrollTo(0,5500)
});

const navbarMenu = document.querySelector('.navbar__menu');
const navbarMenuItems = document.querySelectorAll('.navbar__menu__item');
navbarMenu.addEventListener('click', e => {
  const target = e.target;
  const link = target.dataset.link;

  if(link == null) {
    return;
  }
  navbarMenuItems.forEach((item) => {
    item.classList.remove('active')
  });

  target.classList.add('active');


  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior: "smooth"});
  
});


//3. JS: home transparent (스크롤 됨에 따라 navbar가 투명해짐) 

const home = document.querySelector('.home__container');
const homesec = document.querySelector('#home')
const homesecHeight = homesec.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY/homesecHeight;
});


//4. JS: Arrow Up (클릭하면 페이지 최상단으로 오르게하는 화살표 아이콘 만들기)

//1). 스크롤 되면 화면 밑에 나오게끔 하기 

const arrowUp = document.querySelector('.arrow__up');
document.addEventListener('scroll', () => {
  if(window.scrollY > 800){
    arrowUp.classList.add('arrow--show');
  }else{
    arrowUp.classList.remove('arrow--show');
  }
});


//2). 누르면 제일 윗쪽으로 다시 올라가게끔 하기 

arrowUp.addEventListener('click', () => {
  window.scrollTo(0,0);
});


//5. JS: work-distributer 
//5.1 my work 버튼을 누르면 active state 가 유지되게끔 바꾸기 


const workCategories = document.querySelector('.work__categories');
const projects = document.querySelectorAll('.work__projects');
const categoryButtons = document.querySelectorAll('.category__btn');

workCategories.addEventListener('click', e => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  const categoryButton = e.target;
  if(filter == null) {
    return;
  }; 
  categoryButtons.forEach((button) => {
    button.classList.remove('active');
  });

  console.log(filter);
  categoryButton.classList.add('active');

  projects.forEach((project)=>{
    const projectDataType = project.dataset.type;
    if(filter === '*' || filter==projectDataType){
      
      
      
      project.classList.remove('invisible'); 
      
    } else {
      project.classList.add('invisible');
    };
});
});

