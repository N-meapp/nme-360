
// footer


window.addEventListener('DOMContentLoaded',()=>{
  
  const footer = document.getElementById('footer')
  const imageId = document.getElementById('logo')
  const colapseOne = document.getElementById('colapse1')
  const colapseTwo= document.getElementById('colapse2')
  const colapseThree= document.getElementById('colapse3')

  
  const rect = footer.getBoundingClientRect();
  
  
  if(rect.top <= 100){
    
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


window.addEventListener('DOMContentLoaded',()=>{
  const navbarAnimation = document.getElementById('nav-expand')
  navbarAnimation.style.transition = 'all 1s';
})



// change navbar color


window.addEventListener('scroll',()=>{
  const scrollFromTop = window.scrollY || window.pageYOffset;

  const navBar = document.getElementById('nav-bar')
// console.log("Scroll distance from top:", scrollFromTop);

// if(scrollFromTop>300){
//   navBar.style.background = '#000000a8'
// }else{
//   navBar.style.background = 'none'

// }


  
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
  colapseTwo.style.marginTop = '-0.60rem'
  colapseThree.style.width = '0px'
  colapseThree.style.height = '0px'
  colapseOne.style.background = 'white'
  colapseTwo.style.background = 'white'
  colapseThree.style.background = 'white'
  navExpand.style.opacity = '1'


  flag=1




}else{

  navExpand.style.marginTop = '-1080px'
  colapseOne.style.transform = 'rotate(0deg)'
   colapseTwo.style.transform = 'rotate(0deg)'
   colapseTwo.style.marginTop = '0.25rem'
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

var tmax_optionsGlobal = {
  repeat: -1,
  repeatDelay: 0.65,
  yoyo: true
};

CSSPlugin.useSVGTransformAttr = true;

var tl = new TimelineMax(tmax_optionsGlobal),
  path = "svg *",
  stagger_val = 0.0125,
  duration = 0.75;

$.each($(path), function (i, el) {
  tl.set($(this), {
    x: "+=" + getRandom(-500, 500),
    y: "+=" + getRandom(-500, 500),
    rotation: "+=" + getRandom(-720, 720),
    scale: 0,
    opacity: 0
  });
});

var stagger_opts_to = {
  x: 0,
  y: 0,
  opacity: 1,
  scale: 1,
  rotation: 0,
  ease: Power4.easeInOut
};

tl.staggerTo(path, duration, stagger_opts_to, stagger_val);

var $svg = $("svg");
$svg.hover(
  function () {
    tl.timeScale(0.15);
  },
  function () {
    tl.timeScale(1);
  }
);

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}







// about slider




// video section

// const targetDiv = document.querySelector('.target');

//     // Create an Intersection Observer
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           targetDiv.style.height="900px"
//           targetDiv.style.width="100%"
        
        

//         } else {

//           targetDiv.style.height="0px"
//           targetDiv.style.width="0px"

         
//         }
//       });
//     }, {
//       threshold: 0.1 // Trigger when 10% of the div is visible
//     });

//     // Observe the target div
//     observer.observe(targetDiv);


    // testimonial


  
// const ball = document.getElementById('ball');


// window.addEventListener('scroll', () => {

//   const scrollY = window.scrollY;


//   ball.style.transform = `translate(-50%, ${scrollY}px)`;
// });



// spiral animation


var _3DPretty = (function () {
  var obj = [],
    _x = 0,
    _y = 0,
    _x1 = 0,
    _y1 = 0,
    parts = 500,
    $,
    _tx,
    _ty,
    _w,
    _h;

  var resize = function () {
    _w = window.innerWidth * 0.5;
    _h = window.innerHeight * 0.5;
  };
  var set = function (n, f) {
    if (!!n) parts = n;
    $ = document.getElementById("spiral");
    window.addEventListener("mousemove", function (e) {
      _x = e.clientX;
      _y = e.clientY;
    });
    window.addEventListener("touchmove", function (e) {
      e.preventDefault();
      _x = e.touches[0].clientX;
      _y = e.touches[0].clientY;
    });
    resize();
    window.addEventListener("resize", resize);
    _set(f);
    run();
  };
  var run = function () {
    window.requestAnimationFrame(run);
    anime();
  };
  var _set = function (f) {
    for (var i = 0; i < parts; i++) {
      var o = {};
      o.p = document.createElement("span");
      $.appendChild(o.p);
      var r = i / parts,
        j,
        a,
        b;
      j = i % (parts * 0.5);
      a = Math.floor(j) / 100 + ((Math.floor(j / 2) % 10) / 5) * Math.PI * 2;
      b = Math.acos(-0.9 + (j % 4) * 0.6);
      r = !!f ? f(r) : r - r * r + 0.5;
      var sbr = Math.sin(b) * r;
      o.x = Math.sin(a) * sbr;
      o.y = Math.cos(a) * sbr;
      o.z = Math.cos(b) * r;
      obj.push(o);
      o.transform = function () {
        var ax = 0.02 * _tx,
          ay = 0.02 * _ty,
          cx = Math.cos(ax),
          sx = Math.sin(ax),
          cy = Math.cos(ay),
          sy = Math.sin(ay);

        var z = this.y * sx + this.z * cx;
        this.y = this.y * cx + this.z * -sx;
        this.z = this.x * -sy + z * cy;
        this.x = this.x * cy + z * sy;

        var sc = 1 / (1 + this.z),
          x = this.x * sc * _h + _w - sc * 2,
          y = this.y * sc * _h + _h - sc * 2;

        var p = this.p.style;
        if (x >= 0 && y >= 0 && x < _w * 2 && y < _h * 2) {
          var c = Math.round(256 + -this.z * 256);
          p.left = Math.round(x) + "px";
          p.top = Math.round(y) + "px";
          p.width = Math.round(sc * 2) + "px";
          p.height = Math.round(sc * 2) + "px";
          p.background = "hsla(" + y + ",80%,80%,1)";
          p.zIndex = 200 + Math.floor(-this.z * 100);
        } else p.width = "0px";
      };
    }
  };
  var anime = function () {
    var se = 1 / _h;
    _tx = (_y - _x1) * se;
    _ty = (_x - _y1) * se;
    _x1 += _tx;
    _y1 += _ty;
    for (var i = 0, o; (o = obj[i]); i++) o.transform();
  };
  return {
    set: set
  };
})();
window.onload = function () {
  _3DPretty.set(500, function (r) {
    return r * r;
  });
};



// future updates



const angle = 20;
const rotateCard = window;

const lerp = (start, end, amount) => {
	return (1 - amount) * start + amount * end;
};

const remap = (value, oldMax, newMax) => {
	const newValue = ((value + oldMax) * (newMax * 2)) / (oldMax * 2) - newMax;
	return Math.min(Math.max(newValue, -newMax), newMax);
};

window.addEventListener("DOMContentLoaded", 
  (event) => {
	const cards = document.querySelectorAll(".card");
	cards.forEach((e) => {		
		e.addEventListener("mousemove", (event) => {
			const rect = e.getBoundingClientRect();
			const centerX = (rect.left + rect.right) / 2;
			const centerY = (rect.top + rect.bottom) / 2;
			const posX = event.pageX - centerX;
			const posY = event.pageY - centerY;
			const x = remap(posX, rect.width / 2, angle);
			const y = remap(posY, rect.height / 2, angle);
			e.dataset.rotateX = x;
			e.dataset.rotateY = -y;
		});
		
		e.addEventListener("mouseout", (event) => {
			e.dataset.rotateX = 0;
			e.dataset.rotateY = 0;
		});
	});
	
	const update = () => {
		cards.forEach((e) => {
			let currentX = parseFloat(e.style.getPropertyValue('--rotateY').slice(0, -1));
			let currentY = parseFloat(e.style.getPropertyValue('--rotateX').slice(0, -1));
			if (isNaN(currentX)) currentX = 0;
			if (isNaN(currentY)) currentY = 0;
			const x = lerp(currentX, e.dataset.rotateX, 0.05);
			const y = lerp(currentY, e.dataset.rotateY, 0.1);
			e.style.setProperty("--rotateY", x + "deg");
			e.style.setProperty("--rotateX", y + "deg");
		})
	}
	setInterval (update,1000/60)
});




// future updation closing


const modalButton = document.getElementById('project-button')
console.log(modalButton);
modalButton.addEventListener('click',()=>{
console.log('dfjdsgfghfsghfdgfgf')
  const card = document.getElementById('nme-appmodal')
  card.style.height = '100vh'
  card.style.width = '100%'
  document.body.style.overflow = 'hidden';

  // Select the <html> element
const htmlElement = document.documentElement;

// Override the styles
htmlElement.style.scrollSnapType = 'unset';
htmlElement.style.scrollBehavior = 'unset';
htmlElement.style.webkitUserSelect = 'auto';
htmlElement.style.msUserSelect = 'auto';
htmlElement.style.userSelect = 'auto';

}
)

// sticky ball animation


const rotator = document.getElementById('rotating-animation')
const secRotator = document.getElementById('globe')
const ballFalling = document.getElementById('ball-falling-animation')
const whyUsAllSection = document.getElementById('whyus-all-section')
window.addEventListener('scroll',()=>{

  const rect = secRotator.getBoundingClientRect();
  const rect2 = whyUsAllSection.getBoundingClientRect()
  const partiallyVisible =
        rect.top < window.innerHeight && rect.bottom > 0 &&
        rect.left < window.innerWidth && rect.right > 0;


            // handle bottom
            // const tolerance = 1; 
            // if (Math.abs(rect2.bottom - window.innerHeight) <= tolerance) {
            //   console.log('The div bottom is approximately at the bottom of the browser.');
            //   ballFalling.style.position = 'relative'
            //   ballFalling.style.alignContent='flex-end'
            // } else {
            //   ballFalling.style.position = 'fixed'
            //   ballFalling.style.right = 0
            //   ballFalling.style.top = 0
            // }

         // handle top
      if(rect2.top<0 && rect2.bottom+200>window.innerHeight){
        ballFalling.style.position = 'fixed'
        ballFalling.style.right = 0
        ballFalling.style.top = 0
      }else{
        ballFalling.style.alignContent = 'flex-start'
        ballFalling.style.position = 'relative'
      }

    

       
      

      // if scrolling up
      
        
        if (partiallyVisible) {
          rotator.style.display = 'block'
          
        } else {
          rotator.style.display = 'none'
        }


})


// whyus section

let whyusCounter = 1; // Initialize the counter
let isScrolling = false; // Lock for scroll handling

// window.addEventListener('wheel', (event) => {
//     if (isScrolling) return; // Ignore if already processing

//     const content = document.getElementById('whyus-page-content');
//     const whyusSection = document.getElementById('whyus-box');
//     const rect = whyusSection.getBoundingClientRect();

//     const fullyVisible =
//         rect.top >= 0 &&
//         rect.bottom <= window.innerHeight &&
//         rect.left >= 0 &&
//         rect.right <= window.innerWidth;

//     if (fullyVisible) {
//         // Lock the handler
//         isScrolling = true;

//         if (event.deltaY > 0) {
//             // Scroll Down
//             if (whyusCounter < 4) {
//                 whyusCounter++;
//                 document.body.style.overflow = 'hidden'; // Unlock scrolling if at the end

//             } else {
//                 document.body.style.overflow = 'auto'; // Unlock scrolling if at the end
//             }
//         } else {
//             // Scroll Up
//             if (whyusCounter > 1) {
//                 whyusCounter--;
//                 document.body.style.overflow = 'hidden'; // Unlock scrolling if at the end

//             } else {
//                 document.body.style.overflow = 'auto'; // Unlock scrolling if at the start
//             }
//         }

//         console.log(`whyusCounter: ${whyusCounter}`);

//         // Update content based on the counter
//         updateContent(whyusCounter, content);

//         // Allow processing only after a delay (debounce)
//         setTimeout(() => {
//             isScrolling = false; // Unlock for the next scroll
//         }, 500); // Adjust delay for smoothness
//     }
// });


window.addEventListener()

// Function to update the content
function updateContent(counter, content) {
    switch (counter) {
        case 1:
            content.innerHTML = `
                <div class="heading-1">
                    <h1 class="text-7xl mb-16 w-min heading-text text-[#8dddf1]">E</h1>
                    <h1 class="text-5xl mb-16 w-min heading-text mt-3">xpertise and Innovation</h1>
                </div>
                <p class="para-1">
 Our experienced team of professionals brings extensive knowledge and
            experience in IT solutions, ensuring we stay ahead of industry
            trends and deliver innovative services designed to your needs.</p>`;
            break;
        case 2:
            content.innerHTML = `
                <div class="heading-1">
                    <h1 class="text-7xl mb-16 w-min heading-text text-[#c3e47b]">P</h1>
                    <h1 class="text-5xl mb-16 w-min heading-text mt-3">roven Track Record</h1>
                </div>
                <p class="para-1">
 With over 1,500+ active clients and more than 1,800+ successful
            projects, our reputation speaks for itself. We have a history of
            delivering results that drive growth and success for businesses of
            all sizes.                </p>`;
            break;
        case 3:
            content.innerHTML = `
                <div class="heading-1">
                    <h1 class="text-7xl mb-16 w-min heading-text text-[#ebe294]">C</h1>
                    <h1 class="text-5xl mb-16 w-min heading-text mt-3">omprehensive Solutions</h1>
                </div>
                <p class="para-1">
From designing and branding to web designing and digital marketing,
            we provide a comprehensive range of services that cover all aspects
            of your digital presence.
            </p>`;
            break;
        case 4:
            content.innerHTML = `
                <div class="heading-1">
                    <h1 class="text-7xl mb-16 w-min heading-text text-[#eeac51]">C</h1>
                    <h1 class="text-5xl mb-16 w-min heading-text mt-3">ommitment to Quality</h1>
                </div>
                <p class="para-1">
 We believe in delivering high-quality solutions that are not only
            effective but also reliable. Our rigorous quality assurance
            processes ensure that every project meets the highest standards.                </p>`;
            break;
    }
}








window.addEventListener('scroll',()=>{
  console.log('scrollingahhahaha');
  
})





window.addEventListener('DOMContentLoaded',()=>{
  const video = document.getElementById('myVideo')
  video.playbackRate = 0.3
})



// testimonial Selection


var carousel = $(".carousel");
var seats = $(".carousel-seat");

var next = function (el) {
  if (el.next().length > 0) {
    return el.next();
  } else {
    return seats.first();
  }
};

var progress = function (e) {
  console.log('sdgsdfgdfg');
  
  var el = $(".is-ref").removeClass("is-ref");
  var new_seat = next(el);

  new_seat.addClass("is-ref").css("order", 1);
  for (var i = 2, ref = seats.length; i <= ref; i++) {
    new_seat = next(new_seat).css("order", i);
    console.log(new_seat);
  }

  carousel.removeClass("is-set");

  return setTimeout(function () {
    return carousel.addClass("is-set");
  }, 50);
};

window.setInterval(function () {
  progress();
}, 2000);


