Template['home'].onRendered(function(){

    /**
     * This part causes smooth scrolling using scrollto.js
     * We target all a tags inside the nav, and apply the scrollto.js to it.
     */
    $("nav a").click(function(evn){
        evn.preventDefault();
        $.scrollTo(this.hash);
    });


});

Template['home'].helpers({
});

Template['home'].events({
});
