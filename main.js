// /menu// 
let menu=document.querySelector('.topMenuRight');
let top_Icon=document.querySelector('.topMenuRight_icon');
function menuToggle(){
  menu.classList.toggle('active');
  top_Icon.classList.toggle('rotate');
  document.querySelector('.topMenu').classList.toggle('active');
  }



//slideshow// 
let slideIndex=0;
let sec=3000;

window.onload=function(){
  showSlides(slideIndex);}

setInterval(function(){
  showSlides(slideIndex);
    slideIndex++;
},sec);

function moveSlides(n){
  slideIndex=slideIndex+n;
  showSlides(slideIndex);
}

function currentSlides(n){
  slideIndex=n;
  showSlides(slideIndex);
}


function showSlides(n){
  let slides=document.getElementsByClassName('myslides');
  let size=document.getElementsByClassName('myslides').length;
  let dots=document.getElementsByClassName('dot');
  let hash=document.getElementsByClassName('hashTags');

  if ((n+1)>size) {
    n=0; slideIndex=0;
  }else if (n<0) {
    n=(size-1); slideIndex=(size-1);
  }

  for (let i = 0; i < size; i++) {
    slides[i].style.display='none';
    hash[i].style.display='none';
    }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active'); 
  }
    
  slides[n].style.display='block';
  hash[n].style.display='block';
  
  dots[n].classList.add('active');
}


//content//
let content_Icon=document.querySelector('.content_title_icon');
let about=document.querySelector('.content_about');

content_Icon.addEventListener('click',()=>{
  about.classList.toggle('active');
  content_Icon.classList.toggle('rotate');
})

//nightDaymode//
let nightDay_Mode=document.querySelector('.nightDay_Mode');
let modal=document.querySelector('.modal');
let all=document.querySelectorAll('*');

nightDay_Mode.addEventListener('click',()=>{
  modal.style.display='block';
})

function nightDay(){

  if (nightDay_Mode.textContent==='Night') {
    document.querySelector('#modal_Text').textContent="주간모드가 실행됩니다.";
    modal.style.display='none';
    for (let i = 0; i < all.length; i++) {
      all[i].classList.add('night');   
      }
      nightDay_Mode.textContent='Day';

    }

  else if (nightDay_Mode.textContent==='Day') {
    document.querySelector('#modal_Text').textContent="야간모드가 실행됩니다.";
    modal.style.display='none';
    for (let i = 0; i < all.length; i++) {
      all[i].classList.remove('night');   
  }
      nightDay_Mode.textContent='Night';}
      
}