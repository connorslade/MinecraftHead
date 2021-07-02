module.exports = {
    isServerBlocked: require('./async/isServerBlocked').process,
    getNameHistory: require('./async/getNameHistory').process,
    statusCheck: require('./async/statusCheck').process,
    nameToUuid: require('./async/nameToUuid').process,
    uuidToName: require('./async/uuidToName').process,
    getSkin: require('./async/getSkin').process,
    stats: require('./async/stats').process
}