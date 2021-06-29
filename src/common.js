const crypto = require('crypto')
const https = require('https')

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
    },

    base64Decode: function (base64) {
        let buff = Buffer.from(base64, 'base64');
        return  buff.toString('utf-8');
    },

    checkIfBlocked: function(url, blocked) {
        let shasum = crypto.createHash('sha1')
        shasum.update(url)
        url = shasum.digest('hex')
        return (blocked.indexOf(url) > -1)
    }
}