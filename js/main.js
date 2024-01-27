//menu functions
function openMenu(){
  document.querySelector('nav').style.right = '0';
  document.querySelector('nav').style.boxShadow= "0 0 0 100vw rgba(0,0,0,0.8)";
 }
 
 function closeMenu(){
  document.querySelector('nav').style.right = '-200%';
 };

 //certificates show more

 loadBtn = document.querySelector('.load-btn .btn');

if(loadBtn){
  loadBtn.onclick = ()=>{
  document.querySelectorAll('.certificates .certificates-container .hide').forEach(
    show=>{
      if(show.style.display=='block'){
           show.style.display='none';
            loadBtn.innerHTML='show more';
          
      }
      else{
        show.style.display='block';
         loadBtn.innerHTML='show less';
       

      }
   
    }
  )
  
};

}