const userRouter = require('./userRouter');
const ortherRouter = require('./ortherRouter');

const route = (app) => {
    app.use('/', userRouter);
    app.use('/', ortherRouter);
}

module.exports = route;