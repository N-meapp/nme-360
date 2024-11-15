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
  colapseTwo.style.marginTop = '-0.60rem'
  colapseThree.style.width = '0px'
  colapseThree.style.height = '0px'

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

const element = document.querySelector('#sample');

const elementHeight = element.offsetHeight;
const scroll00 = element.offsetTop + elementHeight * 0.00;
const scroll33 = element.offsetTop + elementHeight * 0.70;
const scroll67 = element.offsetTop + elementHeight * 0.99;

window.addEventListener('scroll', () => {

  var element1 = document.querySelector('#slider1');
  var element2 = document.querySelector('#slider2');
  var element3 = document.querySelector('#slider3');

    const scrollPosition = window.scrollY + window.innerHeight;

    // Check if each scroll point has been reached
    if (scrollPosition >=scroll00) {
            element1.style.width = '70%'
            element1.style.height = '30rem'
        
            element3.style.width = '0px'
            element3.style.height = '0px'
            element2.style.width = '0px'
            element2.style.height = '0px'
        
    }
    if (scrollPosition <= scroll67 && scrollPosition > scroll33) {
      element2.style.width = '70%'
      element2.style.height = '30rem'
  
      element3.style.width = '0px'
      element3.style.height = '0px'
      element1.style.width = '0px'
      element1.style.height = '0px'
    }
    if (scrollPosition > scroll67) {
      element3.style.width = '70%'
      element3.style.height = '40rem'
  
      element1.style.width = '0px'
      element1.style.height = '0px'
      element2.style.width = '0px'
      element2.style.height = '0px'
    }
});








