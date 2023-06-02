const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressLayouts = require('express-ejs-layouts');
const route = require('./routes/index');
const configViewEngine = require('./config/viewEngine');

const app = express()
dotenv.config();
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressLayouts);

route(app);
configViewEngine(app);

const port = parseInt(process.env.PORT) || 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})