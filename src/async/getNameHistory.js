const common = require('./../common');

/**
 * Gets Player name History
 * @async
 * @param {String} Player Uuid
 * @returns {Promise<Object>}
 */
async function getNameHistory(uuid) {
    return new Promise(function (resolve, reject) {
        common.get(`https://api.mojang.com/user/profiles/${uuid}/names`, data => {
            data = JSON.parse(data)
            data.forEach(e => {
                if (typeof e.changedToAt !== 'undefined') e.changedToAt = new Date(e.changedToAt)
            });
            resolve(data)
        })
    });
}

module.exports = {
    name: "getNameHistory",
    process: getNameHistory
}