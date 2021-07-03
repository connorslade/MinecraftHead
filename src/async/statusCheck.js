const common = require('./../common');

/**
 * Get Status of Mojang Api
 * @async
 * @returns {Promise<Object>}
 */
function statusCheck() {
    return new Promise((resolve, reject) => {
        common.get('https://status.mojang.com/check').then(data => {
            let json = JSON.parse(data);
            resolve(json)
        }).catch(err => reject(err))
    });
}

module.exports = {
    name: "statusCheck",
    process: statusCheck
}