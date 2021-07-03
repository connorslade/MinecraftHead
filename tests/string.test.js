const mc = require('../src/index');

test('UUID to NAME', done => {
    mc.uuidToName('3c358264b4564bdeab1efe1023db6679').then(data => {
        expect(data.name).toBe('Sigma76');
        done()
    }).catch(e => {done(e)});
});

test('NAME to UUID', done => {
    mc.nameToUuid('Sigma76').then(data => {
        expect(data.uuid).toBe('3c358264b4564bdeab1efe1023db6679');
        done()
    }).catch(e => {done(e)});
});

test('Get Skin', done => {
    mc.getSkin('3c358264b4564bdeab1efe1023db6679').then(data => {
        expect(data.skin).toBe('http://textures.minecraft.net/texture/c05f5efaf313464bde6060fb48aab8e6d07202cae19c764daee52029663df8b4');
        done()
    }).catch(e => {done(e)});
});

test('Get Cape', done => {
    mc.getSkin('3c358264b4564bdeab1efe1023db6679').then(data => {
        expect(data.cape).toBe(false);
        done()
    }).catch(e => {done(e)});
});

test('Get Name History', done => {
    mc.getNameHistory('be1d2795758c44a3b0b81c9dcd370560').then(data => {
        expect(data).not.toBe([])
        done()
    }).catch(e => {done(e)});
});

test('Get Name History at Time', done => {
    mc.getNameAtDate('be1d2795758c44a3b0b81c9dcd370560', new Date(2015, 5, 1)).then(data => {
        expect(data).toBe('NoWeDont')
        done()
    }).catch(e => {done(e)});
});