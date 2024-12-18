
// footer logo chagange

window.addEventListener('DOMContentLoaded',()=>{
  
  const footer = document.getElementById('footer')
  const imageId = document.getElementById('logo')
  
  const rect = footer.getBoundingClientRect();
  
  
  if(rect.top <= 20){
    
    console.log('consssssssooooooolllll');
    imageId.src = './assets/images/nme360 white.png'
  }else{
    imageId.src = `./assets/images/N-ME 360 LOGO WHITE PNG.png`
  }

})

console.log('poddaaaaaaaaaa');



// change navbar color

window.addEventListener("scroll", () => {
  const scrollFromTop = window.scrollY || window.pageYOffset;

  const navBar = document.getElementById("nav-bar");
  // console.log("Scroll distance from top:", scrollFromTop);

  // if(scrollFromTop>300){
  //   navBar.style.background = '#000000a8'
  // }else{
  //   navBar.style.background = 'none'

  // }
});

// handle navbar collapse

let flag = 0;

function handleNavbar() {
  const navExpand = document.getElementById("nav-expand");
  const navTabs = document.getElementsByClassName("nav-tabs");
  const navMain = document.getElementById("nav-main-tab");
  const colapseOne = document.getElementById("colapse1");
  const colapseTwo = document.getElementById("colapse2");
  const colapseThree = document.getElementById("colapse3");

  console.log("started");

  if (flag == 0) {
    navExpand.style.marginTop = "0px";
    colapseOne.style.transform = "rotate(45deg)";
    colapseTwo.style.transform = "rotate(-45deg)";
    colapseTwo.style.marginTop = "-0.60rem";
    colapseThree.style.width = "0px";
    colapseThree.style.height = "0px";

    flag = 1;
  } else {
    navExpand.style.marginTop = "-1080px";
    colapseOne.style.transform = "rotate(0deg)";
    colapseTwo.style.transform = "rotate(0deg)";
    colapseTwo.style.marginTop = "0.25rem";
    colapseThree.style.width = "2.5rem";
    colapseThree.style.height = "2px";

    flag = 0;
  }
}

function handleElement() {
  const elem1 = document.getElementById("element1");

  const elem4 = document.getElementById("element4");

  for (let i = 0; i < 4; i++) {
    let n = 0;
    let elem;
    let style;

    if (i == 0) {
      n = 80;
      elem = elem1;
      style = "width";
    } else if (i == 1) {
      n = 192;
      elem = elem2;
      style = "height";
    } else if (i == 2) {
      n = 80;
      elem = elem3;
      style = "width";
    } else if (i == 3) {
      n = 40;
      elem = elem4;
      style = "height";
    }

    for (let j = 0; j < n; j++) {
      if (style == "width") {
        elem1.style.width = `${j}px`;
      } else {
        elem.style.height = `${j}px`;
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
  yoyo: true,
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
    opacity: 0,
  });
});

var stagger_opts_to = {
  x: 0,
  y: 0,
  opacity: 1,
  scale: 1,
  rotation: 0,
  ease: Power4.easeInOut,
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
    set: set,
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

window.addEventListener("DOMContentLoaded", (event) => {
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
      let currentX = parseFloat(
        e.style.getPropertyValue("--rotateY").slice(0, -1)
      );
      let currentY = parseFloat(
        e.style.getPropertyValue("--rotateX").slice(0, -1)
      );
      if (isNaN(currentX)) currentX = 0;
      if (isNaN(currentY)) currentY = 0;
      const x = lerp(currentX, e.dataset.rotateX, 0.05);
      const y = lerp(currentY, e.dataset.rotateY, 0.1);
      e.style.setProperty("--rotateY", x + "deg");
      e.style.setProperty("--rotateX", y + "deg");
    });
  };
  setInterval(update, 1000 / 60);
});

// future updation closing

const modalButton = document.getElementById("project-button");
console.log(modalButton);
modalButton.addEventListener("click", () => {
  console.log("dfjdsgfghfsghfdgfgf");
  const card = document.getElementById("nme-appmodal");
  card.style.height = "100vh";
  card.style.width = "100%";
  document.body.style.overflow = "hidden";

  // Select the <html> element
  const htmlElement = document.documentElement;

  // Override the styles
  htmlElement.style.scrollSnapType = "unset";
  htmlElement.style.scrollBehavior = "unset";
  htmlElement.style.webkitUserSelect = "auto";
  htmlElement.style.msUserSelect = "auto";
  htmlElement.style.userSelect = "auto";
});

// sticky ball animation

const rotator = document.getElementById("rotating-animation");
const secRotator = document.getElementById("globe");
const ballFalling = document.getElementById("ball-falling-animation");
window.addEventListener("scroll", () => {
  const rect = secRotator.getBoundingClientRect();
  const partiallyVisible =
    rect.top < window.innerHeight &&
    rect.bottom > 0 &&
    rect.left < window.innerWidth &&
    rect.right > 0;

  if (partiallyVisible) {
    rotator.style.display = "block";
  } else {
    rotator.style.display = "none";
  }
});


let whyusCounter = 1;
let isScrolling = false;



window.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("myVideo");
  video.playbackRate = 0.3;
});

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
  console.log("sdgsdfgdfg");

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







// flipping on scrolling
let whyusStatus = false;
window.addEventListener("scroll", () => {
  const whyusScrollPage = document.getElementById(
    "why-us-each-section-content"
  );
  const whyUsAll = document.getElementById("ball-falling-animation");

  console.log("theernuuu");

  const rect = whyUsAll.getBoundingClientRect();
  const fullyVisible =
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= window.innerHeight &&
    rect.right <= window.innerWidth;

  if (fullyVisible) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";

    console.log("The element is not fully visible in the viewport");
  }
});

let wheelCount = 0;
let whyUsArray = [
  `<div class="heading-1">
                <video
                  autoplay  
                  muted
                  loop
                  class="h-[60vh] absolute -z-10   block mt-[72px] "
                  src="./assets/videos/whyus page.mp4"
                ></video>
                <h1
                  class="fontfamily-heavy text-8xl md:text-[9rem] leading-[1] mb-16 w-min heading-text mt-3"
                >
                  WHY US
                </h1>
              </div>`,
  `<div class="title-1 gap-4 each-section content-center">
              <div class="heading-1 fontfamily-extra-bold">
                <h1 class="text-7xl mb-16 w-min heading-text text-[#8dddf1]">
                  E
                </h1>
                <h1 class="text-5xl mb-16 w-min heading-text mt-3">
                  xpertise and Innovation
                </h1>
              </div>
              <p class="para-1 text-xl md:text-[24px] fontfamily-light">
                Our experienced team of professionals brings a wealth of knowledge and expertise in IT solutions, 
                ensuring we stay ahead of industry trends. We are dedicated to delivering innovative, customized services
                 that are specifically designed to meet your business's unique needs, helping you stay competitive and achieve lasting success
              </p>
            </div>`,
  `<div class="title-1 gap-3 each-section content-center">
              <div class="heading-1 fontfamily-extra-bold">
                <h1 class="text-7xl mb-16 w-min heading-text text-[#c3e47b]">
                  C
                </h1>
                <h1 class="text-5xl mb-16 w-min heading-text mt-3">
                  omprehensive Solutions
                </h1>
              </div>
              <p class="para-1 text-xl md:text-[24px] fontfamily-light">
                From branding and design to web development and digital marketing, we offer a comprehensive suite of services that enhance every 
                aspect of your digital presence. Our tailored solutions ensure a
                 cohesive and impactful online identity, driving engagement and helping your business thrive in the digital landscape
              </p>
            </div>`,
  `<div class="title-1 gap-3 each-section content-center">
              <div class="heading-1 fontfamily-extra-bold">
                <h1 class="text-7xl mb-16 w-min heading-text text-[#e7606f]">
                  P
                </h1>
                <h1 class="text-5xl mb-16 w-min heading-text mt-3">
                  roven trackrecord
                </h1>
              </div>
              <p class="para-1 text-xl md:text-[24px] fontfamily-light">
                With over 1,500 active clients and more than 1,800 successful projects, our reputation for excellence is proven. 
                We take pride in delivering results that fuel growth and success,
                 helping businesses of all sizes achieve their goals with innovative, tailored solutions that drive long-term success
              </p>
            </div>`,
  `<div class="title-1 gap-3 each-section content-center">
              <div class="heading-1 fontfamily-extra-bold">
                <h1 class="text-7xl mb-16 w-min heading-text text-[#ebe294]">
                  C
                </h1>
                <h1 class="text-5xl mb-16 w-min heading-text mt-3">
                  ommitment to Quality
                </h1>
              </div>
              <p class="para-1 text-xl md:text-[24px] fontfamily-light">
                We are committed to delivering high-quality solutions that are both effective and reliable. Through rigorous quality assurance processes, 
                we ensure every project meets the highest standards. 
                Our focus on excellence guarantees that each solution we provide is built to perform and deliver lasting value for your business
              </p>
            </div>`,
];
let arrayIndex = 0;
let oldWheelCount = 0;
window.addEventListener("wheel", () => {
  const whyUsAll = document.getElementById("ball-falling-animation");
  const whyUsEachContent = document.getElementById(
    "why-us-each-section-content"
  );

  const rect = whyUsAll.getBoundingClientRect();
  const fullyVisible =
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= window.innerHeight &&
    rect.right <= window.innerWidth;

  if (fullyVisible) {
    if (event.deltaY > 0) {
      if (oldWheelCount < wheelCount && oldWheelCount + 10 > wheelCount) {
        console.log("dddddddd", oldWheelCount);
      } else {

        if(arrayIndex==4){
          console.log();
          document.body.style.overflow = 'auto' ;    
        }else{
          oldWheelCount = wheelCount;
          arrayIndex++;
        }
      }
      wheelCount++;
    } else {
      if (oldWheelCount > wheelCount && oldWheelCount - 10 < wheelCount) {
        console.log("dddddddd", oldWheelCount);
      } else {
        if(arrayIndex==0){
          document.body.style.overflow = 'auto' ;
        }else{
          oldWheelCount = wheelCount;
          arrayIndex--;
        }
       
      }
      wheelCount--;
    }

    whyUsEachContent.innerHTML = whyUsArray[arrayIndex];
  } else {
    console.log("The element is not fully visible in the viewport");
  }
});


window.addEventListener("touchmove", () => {
  const whyUsAll = document.getElementById("ball-falling-animation");
  const whyUsEachContent = document.getElementById(
    "why-us-each-section-content"
  );

  const rect = whyUsAll.getBoundingClientRect();
  const fullyVisible =
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= window.innerHeight &&
    rect.right <= window.innerWidth;

  if (fullyVisible) {
    if (event.deltaY > 0) {
      if (oldWheelCount < wheelCount && oldWheelCount + 10 > wheelCount) {
        console.log("dddddddd", oldWheelCount);
      } else {

        if(arrayIndex==4){
          console.log();
          document.body.style.overflow = 'auto' ;    
        }else{
          oldWheelCount = wheelCount;
          arrayIndex++;
        }
      }
      wheelCount++;
    } else {
      if (oldWheelCount > wheelCount && oldWheelCount - 10 < wheelCount) {
        console.log("dddddddd", oldWheelCount);
      } else {
        if(arrayIndex==0){
          document.body.style.overflow = 'auto' ;
        }else{
          oldWheelCount = wheelCount;
          arrayIndex--;
        }
       
      }
      wheelCount--;
    }

    whyUsEachContent.innerHTML = whyUsArray[arrayIndex];
  } else {
    console.log("The element is not fully visible in the viewport");
  }
});


