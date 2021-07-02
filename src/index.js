module.exports = {
    nameToUuid: require('./async/nameToUuid').process,
    uuidToName: require('./async/uuidToName').process,
    isServerBlocked: require('./async/isServerBlocked').process,
    getNameHistory: require('./async/getNameHistory').process,
    statusCheck: require('./async/statusCheck').process,
    getSkin: require('./async/getSkin').process,
    stats: require('./async/stats').process,

    player: require('./async/player').process
}