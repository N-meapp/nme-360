// change navbar color


window.addEventListener('scroll',()=>{
  const scrollFromTop = window.scrollY || window.pageYOffset;

  const navBar = document.getElementById('nav-bar')
console.log("Scroll distance from top:", scrollFromTop);

if(scrollFromTop>300){
  navBar.style.background = '#000000a8'
}else{
  navBar.style.background = 'none'

}


  
})




// handle navbar collapse

let flag = 0

function handleNavbar(){
  const navExpand = document.getElementById('nav-expand')
  const navTabs = document.getElementsByClassName('nav-tabs')
  const navMain = document.getElementById('nav-main-tab')
  const colapseOne = document.getElementById('colapse1')
  const colapseTwo = document.getElementById('colapse2')
  const colapseThree = document.getElementById('colapse3')


  
  console.log('started');

if(flag==0){

  navExpand.style.marginTop = '0px'
  colapseOne.style.transform = 'rotate(45deg)'
  colapseTwo.style.transform = 'rotate(-45deg)'
  colapseTwo.style.marginTop = '-0.20rem'
  colapseThree.style.width = '0px'
  colapseThree.style.height = '0px'

  flag=1




}else{

  navExpand.style.marginTop = '-1080px'
  colapseOne.style.transform = 'rotate(0deg)'
   colapseTwo.style.transform = 'rotate(0deg)'
   colapseTwo.style.marginTop = '0.13rem'
colapseThree.style.width = '2.5rem'
  colapseThree.style.height = '2px'


flag=0

}
 
}



function handleElement(){
  const elem1 = document.getElementById('element1')
  
  const elem4 = document.getElementById('element4')


  

  for(let i=0;i<4;i++){

    let n = 0
    let elem;
    let style;

    if(i==0){

    n = 80
    elem = elem1
    style = 'width'

    }else if(i==1){

      n = 192
    elem = elem2
    style = 'height'

    }else if(i==2){

      n = 80
      elem = elem3
      style = 'width'

    }else if(i==3){

      n = 40
      elem = elem4
      style = 'height'
      
    }
    
    
    for(let j = 0;j<n;j++){

      if(style=='width'){

        elem1.style.width = `${j}px`
      }else{
        elem.style.height = `${j}px`
      }

      // setInterval(()=>{
      // },2*j)



    }


  }
  
  

}

// text animation

// var tmax_optionsGlobal = {
//   repeat: -1,
//   repeatDelay: 0.65,
//   yoyo: true
// };

// CSSPlugin.useSVGTransformAttr = true;

// var tl = new TimelineMax(tmax_optionsGlobal),
//   path = "svg *",
//   stagger_val = 0.0125,
//   duration = 0.75;

// $.each($(path), function (i, el) {
//   tl.set($(this), {
//     x: "+=" + getRandom(-500, 500),
//     y: "+=" + getRandom(-500, 500),
//     rotation: "+=" + getRandom(-720, 720),
//     scale: 0,
//     opacity: 0
//   });
// });

// var stagger_opts_to = {
//   x: 0,
//   y: 0,
//   opacity: 1,
//   scale: 1,
//   rotation: 0,
//   ease: Power4.easeInOut
// };

// tl.staggerTo(path, duration, stagger_opts_to, stagger_val);

// var $svg = $("svg");
// $svg.hover(
//   function () {
//     tl.timeScale(0.15);
//   },
//   function () {
//     tl.timeScale(1);
//   }
// );

// function getRandom(min, max) {
//   return Math.random() * (max - min) + min;
// }







// about slider

// const element = document.querySelector('#sample');

// const elementHeight = element.offsetHeight;
// const scroll00 = element.offsetTop + elementHeight * 0.00;
// const scroll33 = element.offsetTop + elementHeight * 0.70;
// const scroll67 = element.offsetTop + elementHeight * 0.99;

// window.addEventListener('scroll', () => {

//   var element1 = document.querySelector('#slider1');
//   var element2 = document.querySelector('#slider2');
//   var element3 = document.querySelector('#slider3');

//     const scrollPosition = window.scrollY + window.innerHeight;

//     // Check if each scroll point has been reached
//     if (scrollPosition >=scroll00) {
//             element1.style.width = '70%'
//             element1.style.height = '30rem'
        
//             element3.style.width = '0px'
//             element3.style.height = '0px'
//             element2.style.width = '0px'
//             element2.style.height = '0px'
        
//     }
//     if (scrollPosition <= scroll67 && scrollPosition > scroll33) {
//       element2.style.width = '70%'
//       element2.style.height = '30rem'
  
//       element3.style.width = '0px'
//       element3.style.height = '0px'
//       element1.style.width = '0px'
//       element1.style.height = '0px'
//     }
//     if (scrollPosition > scroll67) {
//       element3.style.width = '70%'
//       element3.style.height = '40rem'
  
//       element1.style.width = '0px'
//       element1.style.height = '0px'
//       element2.style.width = '0px'
//       element2.style.height = '0px'
//     }
// });



// about us page 

const texts = document.querySelectorAll(".text");
let currentIndex = 0;

function showNextText() {
    // Remove "active" and add "exit" class to current text
    texts[currentIndex].classList.remove("active");
    texts[currentIndex].classList.add("exit");

    // Update index to the next text
    currentIndex = (currentIndex + 1) % texts.length;

    // Add "active" class to the next text
    texts[currentIndex].classList.remove("exit");
    texts[currentIndex].classList.add("active");
}

// Initialize the first text as active
texts[currentIndex].classList.add("active");

// Change text every 4 seconds
setInterval(showNextText, 4000);






// scrolling color change 





const targetDiv = document.querySelector('#divToShowHide');

// Add scroll event listener
// window.addEventListener('scroll', () => {
//   if (targetDiv) {

//     const rect = targetDiv.getBoundingClientRect();


//     const centerX = rect.left + rect.width / 2;
//     const centerY = rect.top + rect.height / 2;

//     console.log(`Center of the div: X = ${centerX}, Y = ${centerY}`);
//   }
// });

const textLines = document.querySelectorAll('.text-line');

// Add scroll event listener
window.addEventListener('scroll', () => {
  const triggerHeight = window.innerHeight / 1.5; // Trigger when line is within 2/3 of the screen

  textLines.forEach((line, index) => {
    const rect = line.getBoundingClientRect();

    if (rect.top < triggerHeight) {
      // Add the "active" class to show the text
      line.classList.add('active');
    } else {
      // Remove the "active" class to hide the text
      line.classList.remove('active');
    }
  });
});




// mouse hover effect



// modal starts here
var authAnimation

function openAuthModal() {
  const navbar = document.getElementById('nav-bar')
  const handburger = document.getElementById('handburger')

  navbar.style.width = 'fit-content'
  handburger.style.display = 'none'

    authAnimation = gsap.timeline({ defaults: { ease: "power2.inOut" }})
        .to("#authOverlay", {scaleY: 0.01, x: 1, opacity: 1, display: "flex", duration: 0.4})
        .to("#authOverlay", {scaleY: 1,duration: 0.6})
        .to("#authOverlay #second", {scaleY: 1, opacity: 1, duration: 0.6}, "-=0.4")
        .to("#authOverlay #third", {scaleY: 1, opacity: 1, duration: 0.4}, "-=0.2")
        .to("#authOverlay #fourth", {duration: 0.8}, "-=0.4")
}

function closeAuthModal() {

  const navbar = document.getElementById('nav-bar')
  const handburger = document.getElementById('handburger')          



  console.log('closing....');
  
  authAnimation.reverse().timeScale(-1.6)

    navbar.style.width = '100%'
  handburger.style.display = 'block'
}









// const letter = document.querySelector(".first-letter");

// let colors = ["#5ccded", "#b2d969", "#e9de7a", "#eba43e"];
// let index = 0;

// function animateLetter() {
//   letter.style.opacity = 0; 
//   setTimeout(() => {
//     letter.style.color = colors[index]; 
//     letter.style.opacity = 1; 
//     index = (index + 1) % colors.length; 
//   }, 500); 
// }

// setInterval(animateLetter, 1500); 


 // JavaScript for first letter scroll down and fade animation
 const firstLetter = document.querySelector(".first-letter");
 const colors = ["#4fc9edd6", "#abd562d6", "#e58f16e6", "#eba43ee8", "#d93e4dc4","#ffffff"];


 
 function animateFirstLetter() {
   // Start the scroll-down and fade-out animation
   firstLetter.style.transform = "translateY(40px)"; // Move down
   firstLetter.style.opacity = "0"; // Fade out
   
   // After the first animation is complete, reset to the top and fade back in
   setTimeout(() => {
     firstLetter.style.transform = "translateY(-70px)"; // Reset to above the view
     firstLetter.style.color = colors[Math.floor(Math.random() * colors.length)]; // Random color
     firstLetter.style.opacity = "0"; // Stay invisible during reset
   }, 1000); // Match the transition duration (1s)

   // Fade back in and scroll to the original position
   setTimeout(() => {
     firstLetter.style.transform = "translateY(0)"; // Reset to original position
     firstLetter.style.opacity = "1"; // Fade back in
   }, 1500); // Slight delay to match reset
 }

 // Repeat the animation every 3 seconds
 setInterval(animateFirstLetter, 3000);

 // Initialize the first animation
 animateFirstLetter();













// handle writting

const scrollableDiv = document.getElementById('scrollbar-id-2');

scrollableDiv.addEventListener('scroll', () => {

    const viewportHeight = window.innerHeight;
    const centerY = viewportHeight / 2;

    const span = document.querySelectorAll('.about-span'); // Replace with your specific selector

    for(let i=0;i<span.length;i++){
      const rect = span[i].getBoundingClientRect();
      
  
      // Calculate the vertical center of the span
      const spanCenterY = rect.top + rect.height / 2;
  
      // Check if the span is above the vertical center of the browser
      if (spanCenterY < centerY) {
          span[i].style.color='white'
      } else {
          span[i].style.color='#1c1c1c'
      }
    }
});




scrollableDiv.addEventListener("scroll", () => {
  const scrollTop = window.scrollY; // Current vertical scroll position
  const windowHeight = window.innerHeight; // Height of the viewport
  const documentHeight = document.documentElement.scrollHeight; // Total height of the content

  if (scrollTop + windowHeight >= documentHeight) {
    console.log("Scrollbar has reached the bottom!");
    // You can add your custom logic here
  }
});
