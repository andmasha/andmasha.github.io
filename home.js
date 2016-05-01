$(document).ready(function(){
    // $(".fadein").hide(0).fadeIn(2000)


    var bodyEl = $('body'),
        navToggleBtn = bodyEl.find('.nav-toggle');
    
    navToggleBtn.on('click', function(e) {
        // console.log('moo');
        bodyEl.toggleClass('active-nav');
        e.preventDefault();

    });

   $('a').hover(
    function(){
    var image = $(this).find('img'),
     caption = $(this).find('div');
     caption.width(image.width());
     caption.height(image.height());
     caption.fadeIn(100);
    },
    function(){
     var image= $(this).find('img'),
        caption = $(this).find('div');

    caption.width(image.width());
    caption.height(image.height());
    caption.fadeOut(100);
});

        
    });