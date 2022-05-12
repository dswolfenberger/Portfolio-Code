console.log("Your index.js file is loaded correctly!");
$(function(){
    $('.button1').hover(function(){
        $(this).toggleClass('on');
    });
});

/* This is alternate jQuery that doesn't require CSS - although,
the animation runs on mouseenter/mouseleave and doesn't include .stop() parameters.
First comment out line 2-6 in index.js and Uncomment this section line 12-23. Then comment out class .button1.on (flexbox.css line 62) */
 
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