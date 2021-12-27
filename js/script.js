const theme=document.getElementById('swith');

theme.addEventListener('click',function(){
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


$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.nav').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.nav').removeClass('nav-toggle');
    });
});