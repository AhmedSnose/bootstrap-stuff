$(document).ready(function () {
    
 "use strict";
    
    // nice scroll
    
    $("html").niceScroll();
    
    $('.carousel').carousel({
        
        interval: 2000
        
});
    
    // toggel optin-color
    
        $(".gear-check").click(function() {
        
            $(".optin-color").toggle(500);
        
    });
    
    // change color 
    
       var colorLi =  $(".optin-color ul li");
    
        colorLi
        .eq(0).css("backgroundColor","#fd4141").end()
        .eq(1).css("backgroundColor","#48bd61").end()
        .eq(2).css("backgroundColor","#d4d648").end()
        .eq(3).css("backgroundColor","#2549cc");

        colorLi.click( function() {
            
            "use strict";
            
                $("link[href*='theme']").attr("href" , $(this).attr("data-value"));     
        
        });
    
    var scrollButton = $("#scroll-top");
    
        $(window).scroll(function() {
            // IF 
            $(this).scrollTop() >= 700 ? scrollButton.show(700) : scrollButton.hide(700); });
        
            scrollButton.click(function(){
            
            $("html,body").animate({scrollTop: 0 } , 600);
            
       });
    });


  $(window).load(function() {
    
    $(".over-lay .spinner").fadeOut(2000, function() {
       
         $(this).parent().fadeOut(2000, function() {
         $("body").css("overflow","auto");    
         $(this).remove();
         $(".over-lay .over-lay-h1").fadeOut();
         });
    });
});