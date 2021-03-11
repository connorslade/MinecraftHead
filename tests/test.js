const mc = require('./../src/index');
const express = require('express');
const path = require('path');
const fs = require('fs');

mc.nameToUuid('sigma76').then((data) => {
    console.log(data.uuid);
    mc.getSkin(data.uuid).then((uuid) => {
        console.log(uuid);
    }).catch((error) => {
        console.log(error);
    });
});