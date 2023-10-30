let body = document.querySelector('body')
let btn = document.querySelector('.btn')

let colors = ['red','green','blue','yellow','brown'];

btn.addEventListener('click',function (){
    const colorIndex=parseInt(Math.random()*colors.length);
    body.style.backgroundColor = colors[colorIndex]
})