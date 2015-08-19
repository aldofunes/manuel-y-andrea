Template._footer.events({
    "click .download": function (event) {
        event.preventDefault();
        croquis = window.open('/images/croquis.jpg');
        croquis.print();
    }
});