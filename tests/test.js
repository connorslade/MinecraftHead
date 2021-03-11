const mc = require('./../src/index');
const express = require('express');
const path = require('path');
const fs = require('fs');

mc.uuidToName('3c358264b4564bdeab1efe1023db6679').then((data) => {
    console.log(data.name);
});