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

document.getElementById('mask').addEventListener('click',()=>{
    hamburger();
});

document.getElementById('nav-service-btn').addEventListener('click',()=>{
    hamburger();
});
document.getElementById('nav-living-btn').addEventListener('click',()=>{
    hamburger();
});
document.getElementById('nav-qa-btn').addEventListener('click',()=>{
    hamburger();
});
document.getElementById('nav-access-btn').addEventListener('click',()=>{
    hamburger();
});




let list =document.getElementsByClassName('list');

for(let i =0; i < list.length; i++){
    list[i].addEventListener('click',()=>{
        hamburger();
    });
}

//ページ内リンクをスクロールさせる
window.onload = function(){
    $('a[href^=#]').click(function() {
    var speed = 500; // スクロール速度(ミリ秒)
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('html').animate({scrollTop:position}, speed, 'swing');
    return false;
    });
    };

}