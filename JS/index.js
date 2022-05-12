console.log("Your index.js file is loaded correctly!");
$(function(){
    $('.button1').hover(function(){
        $(this).toggleClass('on');
    });
});

 /* $(document).ready(function(){ 
    $(".button1").mouseenter(function(){
        $(this).animate({
            width: "130"
        });
    }).mouseleave(function(){
        $(this).animate({
            width: "120"
        });
    });
});
*/