Template['header'].onRendered(function(){

    /**
     * This part causes smooth scrolling using scrollto.js
     * We target all a tags inside the nav, and apply the scrollto.js to it.
     */
    console.log(window.location.pathname);
    if ( window.location.pathname == '/' ) {
        $("#navbar-main a, a.navbar-brand").click(function (evn) {
            evn.preventDefault();
            $.scrollTo(this.hash);
        });
    }

    firstSectionId = "the-couple";
    firstSectionElement = document.getElementById(firstSectionId);

    $(window).scroll(function () {

        // Get Scroll Position
        var wScroll = $(this).scrollTop();

        // fade in .navbar
        if ( wScroll >= firstSectionElement.offsetTop ) {
            $('.navbar').fadeIn();
        } else {
            $('.navbar').fadeOut();
        }
    });

});


Template['header'].helpers({
});

Template['header'].events({
});
