const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');


hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});


document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 10) {
		header.style.backgroundColor = 'white';
        
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


const swiper = new Swiper(".promotion-slider", {
  
    direction: "horizontal",
    loop: true,
    grabCursor:true,
    spaceBetween:20,
    breakpoints: {
        0: {
          slidesPerView: 1,
  
        },
        500:{
          slidesPerView: 2,
        },
        990: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 4,
        },
        
      },
    pagination: {
        el: '.swiper-pagination',
      },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },

  });