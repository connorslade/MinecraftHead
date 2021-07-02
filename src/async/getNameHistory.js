const common = require('./../common');

/**
 * Gets Player name History
 * @async
 * @param {Object} player_string - Player Object or a Uuid as a string
 * @returns {Promise<Object>}
 */
function getNameHistory(player_string) {
    return new Promise(function (resolve, reject) {
        common.getUuid(player_string).then(uuid => {
            common.get(`https://api.mojang.com/user/profiles/${uuid}/names`, data => {
                data = JSON.parse(data)
                data.forEach(e => {
                    if (typeof e.changedToAt !== 'undefined') e.changedToAt = new Date(e.changedToAt)
                });
                resolve(data)
            })
        })
    });
}

module.exports = {
    name: "getNameHistory",
    process: getNameHistory
}