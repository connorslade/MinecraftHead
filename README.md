# MinecraftHead
🕹 NPM package to get Minecraft skins and other Minecraft API related stuff ^_^

### Usage

Get UUID for playerName:
```javascript
const mc = require('minecraft_head');

mc.nameToUuid('sigma76').then((data) => {
    console.log(data.uuid);
}).catch((error) => {
    console.log(error);
});
```

Get Player Name from UUID
```javascript
mc.uuidToName('3c358264b4564bdeab1efe1023db6679').then((data) => {
    console.log(data.name);
}).catch((error) => {
    console.log(error);
});
```

Get Player Skin from PlayerName:
```javascript
mc.nameToUuid('sigma76').then((data) => {
    mc.getSkin(data.uuid).then((uuid) => {
        console.log(uuid);
    }).catch((error) => {
        console.log(error);
    });
}).catch((error) => {
  console.log(error);
});
```