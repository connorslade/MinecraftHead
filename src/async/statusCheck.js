const common = require('./../common');

/**
 * Get Status of Mojang Api
 * @async
 * @returns {Promise<Object>}
 */
async function statusCheck() {
    return new Promise(function (resolve, reject) {
        common.get('https://status.mojang.com/check', function (data) {
            let json = JSON.parse(data);
            resolve(json)
        })
    });
}

module.exports = {
    name: "statusCheck",
    process: statusCheck
}