const onether = document.getElementById('logoAvatar');


onether.addEventListener('click', function(){
   onether.src = 'image/avatar-bis.png'
 });

  const buttonName = document.querySelector('.buttonMatt');
  const pinkBack = document.querySelectorAll('.pink-bg');
  const pinkText = document.querySelectorAll('.pink-text');

console.log(pinkBack)
 
  buttonName.addEventListener("click", function() {
    const otherColor = prompt('chose a color');
  


   const otherName = prompt('quel est ton nom bg');
   document.getElementById('name').innerHTML= otherName;
   document.getElementById('name').style.color= 'white';
   //pinkBack[0].style.backgroundColor = otherColor;
   //pinkBack[1].style.backgroundColor = otherColor;
   pinkBack.forEach(Element =>{
     Element.style.backgroundColor = otherColor });

   pinkText.forEach(Element =>{
    Element.style.color = otherColor });

   //pinkText[0].style.color = otherColor;
  // pinkText[1].style.color = otherColor;
 

  });

