const common = require('./common');
const request = require('request');
const gm = require('gm');

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
    getSkin: function (uuid) {
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