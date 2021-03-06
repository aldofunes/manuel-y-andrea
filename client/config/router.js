Router.configure({
  layoutTemplate: 'basicLayout'
});

RouterAutoscroll.animationDuration = 1000;

Router._scrollToHash = function(hash) {
  var section = $(hash);
  if (section.length) {
    var sectionTop = section.offset().top;
    $("html, body").animate({
      scrollTop: sectionTop
    }, "slow");
  }
};