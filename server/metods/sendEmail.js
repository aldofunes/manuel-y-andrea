Meteor.methods({
    sendEmail: function(doc) {
        // Important server-side check for security and data integrity
        check(doc, Schema.contact);

        // Build the e-mail text
        var text = "Nombre: " + doc.name + "\n\n"
            + "Correo electrónico: " + doc.email + "\n\n\n\n"
            + doc.message;

        this.unblock();

        // Send the e-mail
        Email.send({
            to: "andrea.funes@lovis.email",
            from: doc.email,
            subject: "Mensaje de " + doc.name + " desde manuelyandrea.com",
            text: text
        });
    }
});