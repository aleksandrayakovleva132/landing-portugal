const animItems = document.querySelectorAll('.anim-item');

if(animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll)
  function animOnScroll(params) {
      for( let index = 0; index < animItems.length; index++) {
          const animItem = animItems[index] ;
          const animItemHeight = animItem.offsetHeight;
          const animaItemOffset = offset(animItem).top;

          const animStart = 1;
          const animEarlyStart = -2;


          let animItemPoint = window.innerHeight - animItemHeight / animStart;

          if (animItemHeight > window.innerHeight) {
              animItemPoint = window.innerHeight - animItemHeight / animStart;
          }

          if((pageYOffset > animaItemOffset - animItemPoint) && animaItemOffset < (animaItemOffset + animItemHeight)) {
              animItem.classList.add('anim-active');
          } else {
              if (!animItem.classList.contains('anim-no-hide')) {
                  animItem.classList.remove('anim-active');
              }
          }
      }
  }
  function offset(el) {
      const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop =  window.pageYOffset || document.documentElement.scrollTop;

      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
}

const animateBanner = document.querySelector('.animate-banner');
const animateHeroes = document.querySelectorAll('.animate-hero');
const animateDecorations = document.querySelectorAll('.animate-decoration');
const animateLateDecorations = document.querySelectorAll('.animate-late-decoration');

 function animateHeroBanner() {
         for( let index = 0; index < animateHeroes.length; index++) {
             const animateHero = animateHeroes[index];
             animateHero.classList.add('animate-hero--active');
         }
 }

if(animateBanner) {
function animateDecorationBanner() {
     for( let index = 0; index < animateDecorations.length; index++) {
         const animItem = animateDecorations[index];
         animItem.classList.add('active');
     }
}
function animateLateDecorationBanner() {
    for( let index = 0; index < animateLateDecorations.length; index++) {
        const animItem = animateLateDecorations[index];
        animItem.classList.add('active');
    }
}
}

function showYear() {
    var date = new Date();

    var year = date.getFullYear();

    document.getElementById("currentYear").innerText = year;
}
showYear();

setTimeout(animateLateDecorationBanner, 10);
setTimeout(animateDecorationBanner, 80);
setTimeout(animateHeroBanner, 250);

