console.log("hello javascript")


let element = document.getElementById('element');
let element2 = document.getElementById('element2');

var typed = new Typed('#element', {
    strings: ['Front-end developer', 'Bloger', 'Editor', 'C++ developer'],
    typeSpeed: 50,
});


var typed = new Typed('#element2', {
    strings: ['Sawan'],
    typeSpeed: 50,
});

ScrollReveal().reveal('.footeritem', { delay: 1000 });
// window.addEventListener('scroll', reveal);

// function reveal() {
//     var reveal = document.querySelectorAll('.reveal');
//     for (var i = 0; i < reveal.length; i++) {
//         var windowheight = window.innerHeight;
//         var revealtop = reveal[i].getBoundingClientRect().top;
//         var revealpoint = 150;
        
//         if(revealpoint < windowheight-revealpoint){
//             reveal[i].classList.add('.activereveal');
//         }
//         else{
//             reveal[i].classList.remove('.activereveal');

//         }
//     }
// }
