const crypto = require('crypto')
const https = require('https')

module.exports = {
    // Get request
    get: function (uri, callback) {
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

    // Post Request
    post: function (data, hostname, port, path, callback) {
        data = JSON.stringify(data)
        const options = {
            hostname: hostname,
            port: port,
            path: path,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        }

        const req = https.request(options, res => {
            let todo = '';
            res.on('data', d => todo += d)
            res.on('end', () => callback(todo));
        })
        req.write(data)
        req.end()
    },

    // Decode Base 64 encoded strings
    base64Decode: function (base64) {
        let buff = Buffer.from(base64, 'base64');
        return buff.toString('utf-8');
    },

    // Check if a url / ip is in the server Blocklist
    checkIfBlocked: function (url, blocked) {
        let shasum = crypto.createHash('sha1')
        shasum.update(url)
        url = shasum.digest('hex')
        return (blocked.indexOf(url) > -1)
    }
}