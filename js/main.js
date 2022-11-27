$('.header_lang_active').click(function() {
    $('.header_lang_select').toggle();
    $('.header_lang_active svg').toggleClass('img_rotate');
})

$('#hw-slide-msg-close').click(function() {
    $('.nav-toggle-wrap').addClass('mt0');
})


function sayHi() {
    $('.header_lang_select a').attr('target', '_self');

    if (window.screen.width < 500) {
        $('#header').addClass('headroom--not-top headroom--unpinned');
        $('#header').removeClass('headroom--pinned');


    }
}

setTimeout(sayHi, 1000);


$(window).scroll(function() {
    var scroll = $(window).scrollTop() + $(window).height();
    if (window.screen.width > 500) {
        if ($(window).scrollTop() > 10) {
            $('.nav-toggle-wrap').attr('style', 'scale:0.83;top:0px; right:0px;');
        } else {
            $('.nav-toggle-wrap').attr('style', 'scale:1;top:20px; right:30px;');
        }
    }


})