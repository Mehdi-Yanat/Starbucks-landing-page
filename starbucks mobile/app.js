let Menu = document.querySelector('.Menu');
let logo =document.querySelector('.logo');

logo.addEventListener('click',function(){
    Menu.classList.toggle('MenuShow')
})


function imageSlider(anything){
    document.querySelector('.starbucks').src = anything;
} 


function imageChanger(color){
    const Menu =document.querySelector('.Menu');
    Menu.style.background = color;
    
} 

function textColorChanger(color){
    const a = document.querySelector('.Menu li a')
    a.style.color=color
}