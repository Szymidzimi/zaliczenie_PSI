const theme=document.querySelector('#swith');
const imgs=document.querySelectorAll('.photos');
const prov=document.querySelector('.provv');
const next=document.querySelector('.nextt');

let krok=0;
let koniec=imgs.length;

let slider=()=>{
    for(let i=0;i<koniec;i++){
        imgs[i].classList.remove('actv');
    }
}
//przyciski
next.addEventListener('click',()=>{
    krok++;
    krok>=koniec? krok=0:null;
    slider();
    imgs[krok].classList.add('actv');
})
prov.addEventListener('click',()=>{
    krok--;
    krok<0? krok=koniec-1:null;
    slider();
    imgs[krok].classList.add('actv');
})
//automat
setInterval(()=>{
    krok++;
    krok>=koniec? krok=0:null;
    slider();
    imgs[krok].classList.add('actv');
},4000)
// zmiana motywu na ciemnmy
theme.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme');
    if(theme.classList.contains('fa-toggle-on')){
        theme.classList.remove('fa-toggle-on');
        theme.classList.add('fa-toggle-off');
    }
    else{
        theme.classList.remove('fa-toggle-off');
        theme.classList.add('fa-toggle-on');
    }
})

//menu zwijalne oraz reakcja na scroll
$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.nav').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.nav').removeClass('nav-toggle');
    
        if($(window).scrollTop()>10){
            $('header').addClass('header-act');
        }
        else{
            $('header').removeClass('header-act');
        }
    });
});