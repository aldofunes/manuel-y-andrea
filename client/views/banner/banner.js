Template['banner'].onRendered(function(){
    /**
     * Hide .navbar first
      */
    $(".navbar").hide();

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
});

Template['banner'].helpers({
});

Template['banner'].events({
});
