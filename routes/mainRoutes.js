HomeController = RouteController.extend({
  layoutTemplate: 'basicLayout',
  template: 'home',
  action: function () {
    this.render('home');
    SEO.set({title: 'Home - ' + Meteor.App.NAME});
  }
});


// now we have a route for posts
Router.route('/', {
  name: 'home'
});