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
     caption.fadeIn(10);
    },
    function(){
     var image= $(this).find('img'),
        caption = $(this).find('div');

    caption.width(image.width());
    caption.height(image.height());
    caption.fadeOut(10);
});
    
    
// $('.fadein').hide().load(function () {
//         $(this).fadeIn(2000);
//     });

//     $('.galleryimg').hide().load(function () {
//         $(this).fadeIn(4000);
//     });

//     $('#logo').hide().load(function () {
//         $(this).fadeIn(2000);
//     });


//     $('.galleryimage').hover(function(){
//         $(this).find('.overlay').stop().fadeIn(100);
//         $('.view').show();


//         }, function(){
//         $(this).find('.overlay').stop().fadeOut(400);
//         $('.view').hide();
//     });
        
    });
