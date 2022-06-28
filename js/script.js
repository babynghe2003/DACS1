let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
   grabCursor:true,
   loop:true,
   centeredSlides:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".art-slider", {
   grabCursor:true,
   loop:true,
   centeredSlides:true,
   spaceBetween: 20,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
   },
});

let previewContainer = document.querySelector('.art-preview-container');
let previewBox = previewContainer.querySelectorAll('.art-preview');

document.querySelectorAll('.art .slide').forEach(art =>{
   art.onclick = () =>{
      previewContainer.style.display = 'flex';
      let name = art.getAttribute('data-name');
      previewBox.forEach(preveiw =>{
         let target = preveiw.getAttribute('data-target');
         if(name == target){
            preveiw.classList.add('active');
         }
      });
   };
});

document.querySelectorAll('.ls').forEach(ls =>{
   ls.onclick = () =>{
      document.getElementById('GgMap').src = ls.getAttribute('value'); 
   }
});

previewContainer.querySelector('#close-preview').onclick = () =>{
   previewContainer.style.display = 'none';
   previewBox.forEach(close =>{
      close.classList.remove('active');
   });
};

var swiper = new Swiper(".menu-slider", {
   grabCursor:true,
   loop:true,
   autoHeight:true,
   centeredSlides:true,
   spaceBetween: 20,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
});

var swiper = new Swiper(".blogs-slider", {
   grabCursor:true,
   loop:true,
   centeredSlides:true,
   autoHeight:true,
   spaceBetween: 20,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
   },
});

window.onscroll = function(e){
   let wY = window.scrollY;
   let Y1 = document.getElementById('order').getBoundingClientRect().top
   let Y2 = document.getElementById('order1').getBoundingClientRect().top
   console.log(Y1+" "+Y2+" "+wY   );

   if (Y1<screen.height/2){
      document.getElementById('order').classList.add('order-active')
   }else{
      document.getElementById('order').classList.remove('order-active')
   }

   if (Y2<screen.height/2){
      document.getElementById('order1').classList.add('order1-active')
   }else{
      document.getElementById('order1').classList.remove('order1-active')
   }
}