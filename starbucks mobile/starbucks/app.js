let OpenMenu = document.querySelector('.Logo')
let Menu = document.querySelector('.Menu')
let Thumbs1 = document.querySelector('.thumb1')
let Thumbs2 = document.querySelector('.thumb2')
let Thumbs3 = document.querySelector('.thumb3')
const Circle1 = document.querySelector('.circle')
const Circle2 = document.querySelector('.circle2')
const image = document.querySelector(".img")
const Button = document.querySelector('button')
const Span = document.querySelector('span')

OpenMenu.addEventListener('click', function () {
    Menu.classList.toggle('toggel')
})

Thumbs1.addEventListener('click',()=>{
    image.src = "/images/img1.png"
    Circle1.style.backgroundColor = "#15B937"
    Circle2.style.backgroundColor = "#15B937"
    Button.style.backgroundColor = "#15B937"
    Span.style.color = "#15B937"
})

Thumbs2.addEventListener('click',()=>{
    image.src = "/images/img2.png"
    Circle1.style.backgroundColor = "#E8D1CE"
    Circle2.style.backgroundColor = "#E8D1CE"
    Button.style.backgroundColor = "#E8D1CE"
    Span.style.color = "#E8D1CE"
})

Thumbs3.addEventListener('click',()=>{
    image.src = "/images/img3.png"
    Circle1.style.backgroundColor = "#942074"
    Circle2.style.backgroundColor = "#942074"
    Button.style.backgroundColor = "#942074"
    Span.style.color = "#942074"
})
