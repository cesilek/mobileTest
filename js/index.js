function page(page, fromLeft) {    
    if (fromLeft) {
        var direction = -1;
    } else {
        var direction = 1;
    }
    var actual = $('.page-active');
    var screenWidth = $(actual).width();
    $(actual).css('width', screenWidth);
    $(page).css('left', screenWidth * direction);
    $(page).css('width', screenWidth);
    $(page).css('display', 'block');
    $('.container').css('position', 'absolute');
    
    $('.container').animate({
        'margin-left' : -screenWidth * direction,
    }, function(){
        $(actual).removeClass('page-active');
        $(page).addClass('page-active');
        $(page).removeAttr('style');
        $(this).removeAttr('style');
        $(actual).removeAttr('style');
        $(page).css('left', 0);
    });
}

var click;
$(function(){
    $('a').click(function(){        
        click = true;
    }); 
});

window.onpopstate = function(event) {
    
    console.log(window.history.length);
    
    if(click) {
        page(location.hash);
    } else {
        page(location.hash, true);
    }
    click = false;
};