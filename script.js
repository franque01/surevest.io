const menuBtn = document.getElementById('menu-bar');
const closeBtn = document.querySelector('.close-btn');
const links = document.querySelectorAll('.links');

var menuBar1 = document.querySelector('.menu_layer_1');
var menuBar2 = document.querySelector('.menu_layer_2');

console.log(links)
menuBtn.addEventListener('click', function(){
    menuBar1.classList.toggle('display');
    menuBar2.classList.toggle('display');

});

closeBtn.addEventListener('click', function(){
    menuBar2.classList.toggle('display')
});

links.forEach(link => {
    link.addEventListener('click', function(){
        menuBar2.classList.toggle('display');
    })
});