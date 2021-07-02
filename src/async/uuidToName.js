const common = require('./../common');

/**
 * Get the Player Name from a minecraft player UUID
 * @async
 * @param {String} uuid
 * @returns {Promise<Object>} {name, uuid}
 */
async function uuidToName(uuid) {
    return new Promise(function (resolve, reject) {
        common.get(`https://sessionserver.mojang.com/session/minecraft/profile/${uuid}`, function (data) {
            let json = JSON.parse(data);
            if (!json.error) resolve({name: json.name, uuid: json.id});
            reject(new Error("UUID not Valid"));
        })
    });
}

module.exports = {
    name: "uuidToName",
    process: uuidToName
}