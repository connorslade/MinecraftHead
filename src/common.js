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
    });},
    base64Decode: function (base64) {
        let buff = Buffer.from(base64, 'base64');
        return  buff.toString('utf-8');
    }
}