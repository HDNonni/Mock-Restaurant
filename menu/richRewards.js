$(document).ready(function(){
 //console.log('ready')
let display = false;
$('.clicToShow').click(function(){
    if(display == true){
        $('.posPic').css('textAlign','center')
    }else{
        $('.posPic').css('textAlign','justify');
    }
    display=!display
    console.log('display', display);
    $('.hidePic').fadeToggle("3000", function(){
       
    })
})







});

