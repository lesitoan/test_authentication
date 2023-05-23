
const configViewEngine = (app) => {
    app.set("view engine", "ejs");
    app.set("views", "./src/views");
    app.set('layout', './layouts/layout');
}

module.exports = configViewEngine;