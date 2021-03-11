const https = require('https');

module.exports = {
    get: function(uri, callback) {
    https.get(uri, (response) => {
        let todo = '';

        response.on('data', (chunk) => {
            todo += chunk;
        });

        response.on('end', () => {
            callback(todo);
        });
    });
}
}