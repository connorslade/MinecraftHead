# MinecraftHead
🕹 Simple NPM package interface to the Mojang API 

## Install

```console
$ npm i minecraft_head
```

## Documentation
You can find Documentation [here](https://github.com/Basicprogrammer10/MinecraftHead/wiki)

## Examples
<details open>
<br>

First import the package:

```javascript
const mc = require('minecraft_head');
```

Get UUID for a player name:
```javascript
mc.nameToUuid('sigma76').then(data => {
    console.log(data.uuid);
}).catch(error => console.log(error));
```

Get Player Name from UUID:
```javascript
mc.uuidToName('3c358264b4564bdeab1efe1023db6679').then(data => {
    console.log(data.name);
}).catch(error => console.log(error));
```

Get Player Skin from player name:
```javascript
mc.nameToUuid('sigma76').then(uuid => {
    mc.getSkin(uuid.uuid).then(skin => {
        console.log(skin);
    }).catch(error => console.log(error));
}).catch(error => console.log(error));
```

Check if server is banned by Mojang:
```javascript
mc.isServerBlocked('playmc.mx').then(data => {
    console.log(data)
}).catch(error => console.log(error));
```

Check status of Mojang API:
```javascript
mc.statusCheck().then(data => {
    console.log(data)
}).catch(error => console.log(error));
```

Get Minecraft Sales Data:
```javascript
mc.stats().then(data => {
    console.log(data)
}).catch(error => console.log(error));
```

