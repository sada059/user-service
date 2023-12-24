let app = require('./app');

const config = require('config');
(async() => {
    await app.initialize();
})();

app.listen(config.api.port, () => {
    console.log(`server is running on port ${config.api.port}`);
})
module.exports = app;