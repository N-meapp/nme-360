

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
  colapseTwo.style.marginTop = '-0.75rem'
  colapseThree.style.width = '0px'
  colapseThree.style.height = '0px'

  flag=1




}else{

  navExpand.style.marginTop = '-815px'
  colapseOne.style.transform = 'rotate(0deg)'
   colapseTwo.style.transform = 'rotate(0deg)'
   colapseTwo.style.marginTop = '0.25rem'
colapseThree.style.width = '2.5rem'
  colapseThree.style.height = '0.25rem'


flag=0

}
 
}




