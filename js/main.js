'use strict'
{

//ハンバーガーメニュー
function hamburger(){
    document.getElementById('line1').classList.toggle('linea');
    document.getElementById('line2').classList.toggle('lineb');
    document.getElementById('line3').classList.toggle('linec');
    document.getElementById('target').classList.toggle('slidex');
    document.getElementById('nav_f').classList.toggle('fadein');
    document.getElementById('mask').classList.toggle('mask');
}

document.getElementById('target').addEventListener('click',()=>{
    hamburger();
});



let list =document.getElementsByClassName('list');

for(let i =0; i < list.length; i++){
    list[i].addEventListener('click',()=>{
        hamburger();
    });
}




}