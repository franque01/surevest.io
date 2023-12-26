const menuBtn = document.getElementById('menu-bar');
const closeBtn = document.querySelector('.close-btn');

// console.log(menu)
menuBtn.addEventListener('click', function(){
    var menuBar1 = document.querySelector('.menu_layer_1');
    var menuBar2 = document.querySelector('.menu_layer_2');

    menuBar1.classList.toggle('display')
    // if(menuBar1.classList.contains('display')){
    //     menuBar1.classList.remove('display');
    // }else{
    //     menuBar1.classList.add('display');
    // }
    menuBar2.classList.toggle('display');
    // if(menuBar2.classList.contains('display')){
    //     menuBar2.classList.remove('display');
    // }else{
    //     menuBar2.classList.add('display');
    // }
})
closeBtn.addEventListener('click', function(){
    var menuBar2 = document.querySelector('.menu_layer_2');

    menuBar2.classList.toggle('display')
})
