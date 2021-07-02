const common = require('./../common');

/**
 * Get player skin Url from UUID
 * @async
 * @param {String} uuid
 * @returns {Promise<Object>} {skin, cape}
 */
async function getSkin(uuid) {
    return new Promise(function (resolve, reject) {
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

module.exports = {
    name: "getSkin",
    process: getSkin
}