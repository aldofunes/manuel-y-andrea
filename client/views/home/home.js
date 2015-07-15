Template['home'].onRendered(function(){
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

Template['home'].helpers({
});

Template['home'].events({
});
