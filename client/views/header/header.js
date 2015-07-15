Template['header'].onRendered(function(){

});


Template['header'].helpers({
    scrollNav: function () {
        if ( window.location.pathname == '/' ) {
            return "scroll-nav";
        }
    }
});

Template['header'].events({
    'click .scroll-nav': function (event) {
        //event.preventDefault();
        console.log('I have been clicked');
        //$.scrollTo(this.id);
    }
});
