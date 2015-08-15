Template.home.onRendered(function () {

    $(window).scroll(function () {
        // Get Scroll Position
        var wScroll = $(this).scrollTop();
        // Parallax top image
        $('#banner-text').css({
            'transform': 'translate(0px, '+ Math.round(wScroll / 2) +'px)'
        });
        // Parallax down arrow
        $('.downArrow').css({
            'transform': 'translate(0px, '+ Math.round(wScroll / 3) +'px)'
        });
    });

    $('div#header').affix({
        offset: {
            top: $('#banner').height()
        }
    });

    $('body').scrollspy({
        target: '#main-menu'
    });

});

