const common = require('./common');

module.exports = {
    nameToUuid: async function(playerName) {
        return new Promise(function(resolve, reject) {
            common.get(`https://api.mojang.com/users/profiles/minecraft/${playerName}`, function (data) {
                if (data !== ""){
                    let json = JSON.parse(data);
                    resolve({name: json.name, uuid: json.id});
                }
                reject(new Error("Player Not Found"));
            })
        });
    },

    uuidToName: async function (uuid) {
        return new Promise(function(resolve, reject) {
            common.get(`https://sessionserver.mojang.com/session/minecraft/profile/${uuid}`, function (data) {
                let json = JSON.parse(data);
                if (!json.error){
                    resolve({name: json.name, uuid: json.id});
                }
                reject(new Error("UUID not Valid"));
            })
        });
    },

    getSkin: async function (uuid) {
        return new Promise(function(resolve, reject) {
            common.get(`https://sessionserver.mojang.com/session/minecraft/profile/${uuid}`, function (data) {
                let json = JSON.parse(data);
                if (json.properties){
                    let properties = JSON.parse(common.base64Decode(json.properties[0].value));
                    resolve({skin: properties.textures.SKIN.url});
                }
                reject(new Error("UUID not Valid"));
            })
        });
    }
}