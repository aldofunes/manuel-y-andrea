Schema = {};
Schema.contact = new SimpleSchema({
    name: {
        type: String,
        label: "Nombre",
        max: 50
    },
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: "Correo electrónico"
    },
    message: {
        type: String,
        label: "Mensaje",
        max: 1000
    }
});