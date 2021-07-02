const mc = require('../src/index');

test('API status check', done => {
    mc.statusCheck().then(data => {
        expect(data).not.toBe([])
        done()
    }).catch(e => {done(e)});
});

test('Check Server Block', done => {
    mc.isServerBlocked('playmc.mx').then(data => {
        expect(data).toBe(true)
        done()
    }).catch(e => {done(e)});
});

test('Get Minecraft Sales Stats', done => {
    mc.stats().then(data => {
        expect(data.total).not.toBe(undefined)
        expect(data.last24h).not.toBe(undefined)
        expect(data.saleVelocityPerSeconds).not.toBe(undefined)
        done()
    }).catch(e => {done(e)});
});