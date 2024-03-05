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

//hero titles
new TypeIt("#developer", {
  strings:[ "A Biomedical Engineer!","A Data Analyst!","A Software Developer!"],
  speed: 150,
  loop: true,
}).go();






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

//active menu item on scroll

const menuLink = document.querySelectorAll('nav .navlink')
const section = document.querySelectorAll('section')

function activeMenuLink(){
  let len = section.length;
  while(--len && window.scrollY +80 < section[len].offsetTop){}//80 is from 5rem section padding
  menuLink.forEach(sec=>sec.classList.remove("active"));
  menuLink[len].classList.add("active");
}
activeMenuLink()
window.addEventListener('scroll',activeMenuLink)



//website scroll animation
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    const id = entry.target.getAttribute("id");
    if(entry.isIntersecting){
      entry.target.classList.add("show-items");
    }else{
      entry.target.classList.remove("show-items")
    }
  });
});

const scaleItem = document.querySelectorAll(".scale-item");
scaleItem.forEach((el)=>observer.observe(el))

const slideInTop = document.querySelectorAll(".slide-in-top");
slideInTop.forEach((el)=>observer.observe(el))

const slideInBottom = document.querySelectorAll(".slide-in-bottom");
slideInBottom.forEach((el)=>observer.observe(el))










