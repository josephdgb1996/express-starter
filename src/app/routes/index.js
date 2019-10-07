class Router {
    constructor(app) {
        let test = require('./api/test');

        app.use('/api/test', test);
    }
}

module.exports = Router;