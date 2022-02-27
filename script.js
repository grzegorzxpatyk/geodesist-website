//jQuery to collapse the navbar on scroll
var header_height  = $('.navbar').height(),
    intro_height    = $('.intro-section').height(),
    offset_val = intro_height + header_height;
$(window).scroll(function() {
  var scroll_top = $(window).scrollTop();
    if (scroll_top >= offset_val) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
            $(".navbar-fixed-top").removeClass("navbar-transparent");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
      $(".navbar-fixed-top").addClass("navbar-transparent");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 100) {
         $(".navbar-fixed-top").addClass("top-nav-collapse");
             $(".navbar-fixed-top").removeClass("navbar-transparent");
     } else {
         $(".navbar-fixed-top").removeClass("top-nav-collapse");
       $(".navbar-fixed-top").addClass("navbar-transparent");
     }
 });

 $(document).ready(function(){

   $(window).scroll(function() {
     $(".slideanim").each(function(){
       var pos = $(this).offset().top;

       var winTop = $(window).scrollTop();
         if (pos < winTop + 600) {
           $(this).addClass("slide_fade");
         }
     });
   });
 })

 $.each( jQuery('.carousel .item'), function( i, val ) {
    $(this).css('background-image','url('+$(this).find('img').attr('src')+')').css('background-size','cover').find('img').css('visibility','hidden');
  });
