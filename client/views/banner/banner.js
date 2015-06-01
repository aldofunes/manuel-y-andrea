Template['banner'].onRendered(function(){
    /**
     * Hide .navbar first
      */
    $(".navbar").hide();

    /**
     * This part causes smooth scrolling using scrollto.js
     * We target all a tags inside the nav, and apply the scrollto.js to it.
     */
    $("p.downArrow a").click(function(evn){
        evn.preventDefault();
        $.scrollTo(this.hash);
    });

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

        // fade in .navbar
        if (wScroll >= 600) {
            $('.navbar').fadeIn();
        } else {
            $('.navbar').fadeOut();
        }
    });

});

Template['banner'].helpers({
});

Template['banner'].events({
});
