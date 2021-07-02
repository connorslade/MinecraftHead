const common = require('./../common');

/**
 * Gets stats on minecraft sales
 * @async
 * @returns {Promise<Object>} {total, last24h, saleVelocityPerSeconds}
 */
async function stats() {
    return new Promise(function (resolve, reject) {
        let keys = ["item_sold_minecraft", "prepaid_card_redeemed_minecraft"]
        common.post({metricKeys: keys}, 'api.mojang.com', 443, '/orders/statistics', function (data) {
            data = JSON.parse(data)
            resolve({total: data.total, last24h: data.last24h, saleVelocityPerSeconds: data.saleVelocityPerSeconds})
        });
    })
}

module.exports = {
    name: "stats",
    process: stats
}