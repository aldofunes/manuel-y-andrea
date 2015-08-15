Template.registerHelper("notHome", function () {
    return Router.current().route.getName() != 'home';
});
