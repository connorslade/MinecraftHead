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
    }
}