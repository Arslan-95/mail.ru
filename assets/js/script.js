$('document').ready(() => {
    let menuButton = $('.open_menu'),
        menu = $('.mobile_menu');
    menuButton.click(() => {
        menu.toggleClass('menu_actived');
        $('body').toggleClass('noneScroll');
    })

    let searchButton = $('.open_search'),
        search = $('.mobile_search'),
        slider = $('.content_slider');
    
    searchButton.click(() => {
        search.toggleClass('notVision');
        slider.toggleClass('not_border');
        $('.content h1').toggleClass('margin_top')
        $(window).scrollTop(0)
    })


    var header = $('.toolbar'),
	scrollPrev = 0;

    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();
        if ( scrolled > 100 && scrolled > scrollPrev ) {
            header.addClass('out');
        } else {
            header.removeClass('out');
        }
        scrollPrev = scrolled;
    });
})