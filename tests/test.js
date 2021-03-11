const mc = require('./../src/index');

mc.nameToUuid('Sigma76').then((uuid) => {
    console.log(uuid);
}).catch((error) => {
    console.log(error);
});