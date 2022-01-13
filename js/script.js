const theme=document.querySelector('#swith');
const imgs=document.querySelectorAll('.photos');
const prov=document.querySelector('.provv');
const next=document.querySelector('.nextt');
const copyRight=document.querySelector('#copyright');
const mybutton = document.querySelector("#btn-back-to-top");

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
    $('.form').on('submit', function(e) {
        e.preventDefault();
        $.ajax({
            method: 'POST',
            url: 'https://formsubmit.co/ajax/szymcio5130@gmail.com',
            dataType: 'json',
            accepts: 'application/json',
            data: {
                email:$("#emailAdressUser").val(),
                name: $("#userNick").val(),
                message: $("#messageContent").val(),
            },
            success: function (data) {
                $(".status").html('<span class="ok">Wiadomość przesłana poprawnie</span>')
            },
            error: function(){
                $(".status").html('<span class="bad">Wiadomość przesłana NIE poprawnie</span>')
            }
        });
    });
});

let krok=0;
let koniec=imgs.length;

let slider=()=>{
    for(let i=0;i<koniec;i++){
        imgs[i].classList.remove('actv');
    }
}

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

setInterval(()=>{
    krok++;
    krok>=koniec? krok=0:null;
    slider();
    imgs[krok].classList.add('actv');
},4000)

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

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600){
    mybutton.style.display = "block";
  } 
  else {
    mybutton.style.display = "none";
  }
  
}
window.onscroll = function () {
    scrollFunction();
  };

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

mybutton.addEventListener("click", backToTop);

const currentYr=new Date().getFullYear();
copyRight.textContent=currentYr;