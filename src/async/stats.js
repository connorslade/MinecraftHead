const common = require('./../common');

/**
 * Gets stats on minecraft sales
 * @async
 * @returns {Promise<Object>} {total, last24h, saleVelocityPerSeconds}
 */
function stats() {
    return new Promise((resolve, reject) => {
        let keys = ["item_sold_minecraft", "prepaid_card_redeemed_minecraft"]
        common.post({metricKeys: keys}, 'api.mojang.com', 443, '/orders/statistics').then(data => {
            data = JSON.parse(data)
            resolve({total: data.total, last24h: data.last24h, saleVelocityPerSeconds: data.saleVelocityPerSeconds})
        }).catch(err => reject(err))
    })
}

module.exports = {
    name: "stats",
    process: stats
}