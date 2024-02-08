//header scroll background

const header = document.getElementById('header');

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 100) {
		header.style.backgroundColor = 'white';
        
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

//menu functions
function openMenu(){
  document.querySelector('nav').style.right = '0';
 }
 
 function closeMenu(){
  document.querySelector('nav').style.right = '-200%';
 };


//close menu on item click
document.querySelectorAll('.navlink').forEach(link=>{
  link.addEventListener('click', () => {
    closeMenu();
  })
})

 //certificates show more

 loadBtn = document.querySelector('.load-btn .btn');
if(loadBtn){
  loadBtn.onclick = ()=>{
  document.querySelectorAll('.certificates-container .hide').forEach(
    show=>{
      if(show.style.display=='flex'){
          show.style.display='none';
          loadBtn.innerHTML='show more';
          
      }
      else{
        show.style.display='flex';
        loadBtn.innerHTML='show less';
      }
   
    }
  )
  
};

}

 //about show more
loadBtn2 = document.querySelector('.load-btn2 .btn');
if(loadBtn2){
  loadBtn2.onclick = ()=>{
  document.querySelectorAll('.about-container .hide').forEach(
    show=>{
      if(show.style.display=='block'){
          show.style.display='none';
          loadBtn2.innerHTML='show more';
          
      }
      else{
        show.style.display='block';
        loadBtn2.innerHTML='show less';
      }
   
    }
  )
  
};

}

const menuLink = document.querySelectorAll('nav .navlink')
const section = document.querySelectorAll('section')

//active menu item on scroll

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY - 10;

  menuLink.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop + 80 && //80 is from 5rem section padding
      section.offsetTop + section.offsetHeight > fromTop + 80
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});







