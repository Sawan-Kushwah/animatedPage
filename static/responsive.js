let bar = document.querySelector('.bar');
let cross = document.querySelector('.cross');
let navbar = document.querySelector('.navbar');
let hi = document.querySelectorAll(".hi");
  

bar.addEventListener('click' ,()=>{
   navbar.classList.add('nav-res')   
   navbar.classList.add('nav') 
   cross.classList.remove('deactive-bar')  
   bar.classList.add('deactive-bar')
})

cross.addEventListener('click',()=>{
    bar.classList.remove('deactive-bar')
    cross.classList.add('deactive-bar')  
    navbar.classList.remove('nav')
})

for (var i = 0; i < hi.length; i++) {
   hi[i].addEventListener("click", function() {
      this.classList.add("active");
   });
}