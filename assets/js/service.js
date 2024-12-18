  

// footer

window.addEventListener('wheel',()=>{
    
  const footer = document.getElementById('footer')
  const imageId = document.getElementById('logo')
  const colapseOne = document.getElementById('colapse1')
  const colapseTwo= document.getElementById('colapse2')
  const colapseThree= document.getElementById('colapse3')

  
  const rect = footer.getBoundingClientRect();
  
  console.log('footerr',footer);
  
  
  if(rect.top <= 20){
    
    console.log('consssssssooooooolllll');
    imageId.src = './assets/images/nme360 white.png'
    colapseOne.style.background = 'black'
    colapseTwo.style.background = 'black'
    colapseThree.style.background = 'black'

  }else{
    imageId.src = `./assets/images/N-ME 360 LOGO WHITE PNG.png`
    colapseOne.style.background = 'white'
    colapseTwo.style.background = 'white'
    colapseThree.style.background = 'white'
  }

})
  // handle navbar collapse

  window.addEventListener('DOMContentLoaded',()=>{
    const navbarAnimation = document.getElementById('nav-expand')
    navbarAnimation.style.transition = 'all 1s';

    const location = window.location.href

    if(location.includes('contact')){
      const colapseOne = document.getElementById('colapse1')
      const colapseTwo= document.getElementById('colapse2')
      const colapseThree= document.getElementById('colapse3')

      colapseOne.style.background = 'black'
    colapseTwo.style.background = 'black'
    colapseThree.style.background = 'black'

    }

  })
  
  let flag = 0
  
  function handleNavbar(){
    const navExpand = document.getElementById('nav-expand')
    const navTabs = document.getElementsByClassName('nav-tabs')
    const navMain = document.getElementById('nav-main-tab')
    const colapseOne = document.getElementById('colapse1')
    const colapseTwo = document.getElementById('colapse2')
    const colapseThree = document.getElementById('colapse3')
  
    colapseOne.style.background = 'white'
    colapseTwo.style.background = 'white'
    colapseThree.style.background = 'white'
    navExpand.style.opacity = '1'

  
    console.log('started');
    
  if(flag==0){
  
    navExpand.style.marginTop = '0px'
    colapseOne.style.transform = 'rotate(45deg)'
    colapseTwo.style.transform = 'rotate(-45deg)'
    colapseTwo.style.marginTop = '-0.60rem'
    colapseThree.style.width = '0px'
    colapseThree.style.height = '0px'


  
    flag=1
  
  
  
  
  }else{
  
    navExpand.style.marginTop = '-100vh'
    colapseOne.style.transform = 'rotate(0deg)'
     colapseTwo.style.transform = 'rotate(0deg)'
     colapseTwo.style.marginTop = '0.25rem'
  colapseThree.style.width = '2.5rem'
    colapseThree.style.height = '2px'
  
  
  flag=0
  
  }
   
  }
  


// const svg = document.querySelector('svg.squiggle')
// const path = svg.querySelector('path')
// const eachsection = querySelector('#scrollbar-id')

// const scroll = () => {
//     const distance = window.scrollY
//     const totalDistance = svg.clientHeight - window.innerHeight

//     const percentage = distance / totalDistance

//     const pathlength = path.getTotalLength()
//     path.style.strokeDasharray = `${pathlength}`
//     path.style.strokeDashoffset = `${pathlength * (1- percentage)}`
// }

// scroll()
// window.addEventListener('scroll',scroll)





// const options = {
// 	rainbow: false,
// 	circles: false,
// 	shadows: true,
// 	depth: false,
// 	organicShape: false,
// 	insetBorders: false,

// 	noiseFactor: 0.0005,
// 	maxParticlesPerFrame: 9, // set options.maxParticlesPerFrame = 9 for a smoother* performance in Firefox
// 	minParticleSize: 10,
// 	maxParticleSize: 90,
// 	zoomFactor: 1 / 5
// };

// let mouseX = null;
// let mouseY = null;
// let mousePosTimer = setTimeout(() => {}, 10);

// const container = document.querySelector(".particles");
// const controls = document.querySelectorAll('.controls input[type="checkbox"]');
// const colors = [
// 	"rgb(0, 190, 255)",
// 	"rgb(255, 255, 255)",
// 	"rgb(0, 160, 255)",
// 	"rgb(255, 165, 0)",
// 	"rgb(240, 245, 250)",
// 	"rgb(230, 60, 0)"
// ];

// const random = (min, max, round) => {
// 	let value = min + Math.random() * (max - min);
// 	return round ? Math.round(value) : value;
// };

// const color = () => {
// 	return colors[random(0, colors.length - 1, true)];
// };

// const map = (value, inMin, inMax, outMin, outMax) => {
// 	return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
// };

// const simplex = new SimplexNoise();

// const createParticle = (index, x, y, hue, diameter) => {
// 	let particle = document.createElement("div");
// 	let particleCSS = particle.style;
// 	particle.classList.add("particle");

// 	let size = options.organicShape ? diameter : options.maxParticleSize;
// 	let diameter_ = Math.max(options.minParticleSize, size) * options.zoomFactor;
// 	let color_ = options.rainbow ? `hsl(${hue}deg, 60%, 70%)` : color();

// 	particleCSS.width = `${diameter_}vmin`;
// 	particleCSS.height = `${diameter_}vmin`;

// 	if (options.insetBorders) {
// 		particleCSS.border = `${10 * options.zoomFactor}vmin solid transparent`;
// 		particleCSS.backgroundClip = `border-box`;
// 	}

// 	if (!options.shadows) particleCSS.setProperty("--shadow-opacity", "0");

// 	if (!options.depth) particleCSS.setProperty("--depth-opacity", "0");

// 	particleCSS.backgroundColor = color_;
// 	particleCSS.color = color_;
// 	particleCSS.borderRadius = options.circles ? "50%" : `${random(10, 50)}%`;
// 	particleCSS.left = `${x}px`;
// 	particleCSS.top = `${y}px`;

// 	let shiftX = random(-100, 100) * options.zoomFactor;
// 	let shiftY = random(-100, 100) * options.zoomFactor;
// 	let delay = `${random(10, 40)}ms`;

// 	particle.style.setProperty("--i", delay);
// 	particle.style.setProperty("--shiftX", shiftX + "vmin");
// 	particle.style.setProperty("--shiftY", shiftY + "vmin");

// 	particle.addEventListener("animationend", () => particle.remove());

// 	return particle;
// };

// const drawParticles = (x, y, hue, d) => {
// 	let particleCount = random(1, options.maxParticlesPerFrame, true),
// 		particleFragment = new DocumentFragment();

// 	for (let i = 0; i < particleCount; ++i)
// 		particleFragment.appendChild(createParticle(i, x, y, hue, d));

// 	container.appendChild(particleFragment);
// };

// const render = (time) => {
// 	const noiseX = (simplex.noise2D(0, time * options.noiseFactor) + 1) / 2;
// 	const noiseY = (simplex.noise2D(1, time * options.noiseFactor) + 1) / 2;

// 	const posX = mouseX || map(noiseX, 0, 1, 0, window.innerWidth);
// 	const posY = mouseY || map(noiseY, 0, 1, 0, window.innerHeight);
// 	const hue =
// 		map(mouseX, 0, window.innerWidth, 0, 360) || map(noiseX, 0, 1, 0, 360); // hue is based on the X axis movement
// 	const diameter =
// 		map(mouseY, 0, window.innerHeight, 0, options.maxParticleSize) ||
// 		map(noiseY, 0, 1, 0, options.maxParticleSize); // diameter is based on the Y axis movement

// 	drawParticles(posX, posY, hue, diameter);
// 	requestAnimationFrame(render);
// };

// const clearMousePositions = (duration) => {
// 	if (mousePosTimer) clearTimeout(mousePosTimer);
// 	mousePosTimer = setTimeout(() => {
// 		mouseX = null;
// 		mouseY = null;
// 		document.body.style.cursor = "default";
// 		console.log("mouseout");
// 	}, duration);
// };

// const setMousePositions = (e) => {
// 	mouseX = e.clientX;
// 	mouseY = e.clientY;
// 	document.body.style.cursor = "none";
// 	clearMousePositions(1000);
// };

// const initControls = () => {
// 	controls.forEach((control) => {
// 		applyControl(control);
// 		control.addEventListener("change", () => applyControl(control));
// 	});
// };

// const applyControl = (control) => {
// 	let optionsPrefix = control.dataset["changes"];
// 	let classPrefix = control.dataset["class"];
// 	let bodyclassList = document.body.classList;

// 	if (optionsPrefix) {
// 		options[optionsPrefix] = !!control.checked;
// 		console.log("=>", optionsPrefix, options[optionsPrefix]);
// 	} else {
// 		if (control.checked) bodyclassList.add(classPrefix);
// 		else bodyclassList.remove(classPrefix);

// 		console.log("=>", classPrefix, [...bodyclassList].indexOf(classPrefix));
// 	}
// };

// window.addEventListener("load", () => {
// 	initControls();
// 	setTimeout(() => requestAnimationFrame(render), 400);
// });

// container.addEventListener("mousemove", (e) => setMousePositions(e));
// container.addEventListener("touchmove", (e) => setMousePositions(e.touches[0]));
// container.addEventListener("mouseout", () => clearMousePositions(100));
// container.addEventListener("touchend", () => clearMousePositions(10));

// document
// 	.querySelector(".controls")
// 	.addEventListener("mouseover", () =>
// 		document.body.setAttribute("data-hint-shown", "yes")
// 	);






	var authAnimation

function openAuthModal(cardTitle,cardDescription,cardImage,cardImagess) {
  const navbar = document.getElementById('nav-bar')
  const handburger = document.getElementById('handburger')
  const title = document.getElementById('modal-title')
  const image = document.getElementById('modal-image')
  const images = document.getElementById('modal-image1')

  const description = document.getElementById('modal-description')

  navbar.style.width = 'fit-content'
  handburger.style.display = 'none'



  title.innerText = cardTitle
  description.innerText = cardDescription
  image.src = cardImage
  images.src = cardImagess

  

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

// Change text every 9 seconds
setInterval(showNextText, 9000);

// Initialize the first text as active
texts[currentIndex].classList.add("active");

// Change text every 9 seconds
setInterval(showNextText, 9000);


window.addEventListener('DOMContentLoaded',()=>{
	console.log('qoqoqoqoqo');

	showNextText()
})









 const firstLetter = document.querySelector(".first-letter");
 const colorsArr = ["#4fc9edd6", "#abd562d6", "#e58f16e6", "#eba43ee8", "#d93e4dc4","#ffffff"];


 
 function animateFirstLetter() {
   // Start the scroll-down and fade-out animation
   firstLetter.style.transform = "translateY(40px)"; // Move down
   firstLetter.style.opacity = "0"; // Fade out
   
   // After the first animation is complete, reset to the top and fade back in
   setTimeout(() => {
     firstLetter.style.transform = "translateY(-70px)"; // Reset to above the view
     firstLetter.style.color = colorsArr[Math.floor(Math.random() * colorsArr.length)]; // Random color
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








// navbar-image changing

// const variable1 = document.querySelectorAll('.nav-tabs')

// const sideimage = document.querySelectorAll('.text-white')

function changeImageFunction(imageUrl){
  const imageId = document.getElementById('change-image')

   imageId.src = `/assets/images/${imageUrl}`
}






// window.addEventListener('wheel',()=>{
  
//   const footer = document.getElementById('footer')
//   const imageId = document.getElementById('logo')
  
//   const rect = footer.getBoundingClientRect();
  
  
//   if(rect.top <= 0){
    
//     console.log('consssssssooooooolllll');
//     imageId.src = './assets/images/nme360 white.png'
//   }else{
//     imageId.src = `./assets/images/N-ME 360 LOGO WHITE PNG.png`
//   }

// })