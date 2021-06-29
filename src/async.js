const common = require('./common');
const net = require('net')

/**
 * Get the UUID from a minecraft player name
 * @async
 * @param {String} playerName 
 * @returns {Promise<Object>} {name, uuid}
 */
async function nameToUuid(playerName) {
    return new Promise(function(resolve, reject) {
        common.get(`https://api.mojang.com/users/profiles/minecraft/${playerName}`, function (data) {
            if (data !== "") {
                let json = JSON.parse(data);
                resolve({name: json.name, uuid: json.id});
            }
            reject(new Error("Player Not Found"));
        })
    });
}

/**
 * Get the Player Name from a minecraft player UUID
 * @async
 * @param {String} uuid 
 * @returns {Promise<Object>} {name, uuid}
 */
async function uuidToName(uuid) {
    return new Promise(function(resolve, reject) {
        common.get(`https://sessionserver.mojang.com/session/minecraft/profile/${uuid}`, function (data) {
            let json = JSON.parse(data);
            if (!json.error) resolve({name: json.name, uuid: json.id});
            reject(new Error("UUID not Valid"));
        })
    });
}

/**
 * Get player skin Url from UUID
 * @async
 * @param {String} uuid 
 * @returns {Promise<Object>} {skin, cape}
 */
async function getSkin(uuid) {
    return new Promise(function(resolve, reject) {
        common.get(`https://sessionserver.mojang.com/session/minecraft/profile/${uuid}`, function (data) {
            let json = JSON.parse(data);
            if (json.properties) {
                let properties = JSON.parse(common.base64Decode(json.properties[0].value));
                let cape = (properties && properties.textures && typeof properties.textures.CAPE !== 'undefined') ? properties.textures.CAPE.url : false
                resolve({skin: properties.textures.SKIN.url, cape: cape || false});
            }
            reject(new Error("UUID not Valid"));
        })
    });
}

/**
 * Get Status of Mojang Api
 * @async
 * @returns {Promise<Object>}
 */
async function statusCheck() {
    return new Promise(function(resolve, reject) {
        common.get('https://status.mojang.com/check', function (data) {
            let json = JSON.parse(data);
            resolve(json)
        })
    });
}

/**
 * Checks if a minecraft server url / ip is blocked
 * @async
 * @param {String} Server Url / Ip
 * @returns {Promise<Boolean>} True / False
 */
async function isServerBlocked(server) {
    return new Promise(function(resolve, reject) {
        common.get('https://sessionserver.mojang.com/blockedservers', function (data) {
            let blocked = data.split('\n')
            let parts = server.split('.')
            let isBlocked = false
            
            if (net.isIP(server) === 4) {
                isBlocked = common.checkIfBlocked(parts.join('.'), blocked) || isBlocked
                for (let i = 0; i <= parts.length; i++) {
                    parts.pop()
                    isBlocked = common.checkIfBlocked(`${parts.join('.')}.*`, blocked) || isBlocked
                }
                resolve(isBlocked)
            }

            isBlocked = common.checkIfBlocked(parts.join('.'), blocked) || isBlocked
            for (let i = 0; i <= parts.length; i++) {
                isBlocked = common.checkIfBlocked(`*.${parts.join('.')}`, blocked) || isBlocked
                parts.shift()
            }
            resolve(isBlocked)
        })
    });
}

module.exports = {
    nameToUuid,
    uuidToName,
    getSkin,
    statusCheck,
    isServerBlocked
}