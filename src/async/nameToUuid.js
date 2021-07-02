const common = require('./../common');

/**
 * Get the UUID from a minecraft player name
 * @async
 * @param {String} playerName
 * @returns {Promise<Object>} {name, uuid}
 */
async function nameToUuid(playerName) {
    return new Promise(function (resolve, reject) {
        common.get(`https://api.mojang.com/users/profiles/minecraft/${playerName}`, function (data) {
            if (data !== "") {
                let json = JSON.parse(data);
                resolve({name: json.name, uuid: json.id});
            }
            reject(new Error("Player Not Found"));
        })
    });
}

module.exports = {
    name: "nameToUuid",
    process: nameToUuid
}