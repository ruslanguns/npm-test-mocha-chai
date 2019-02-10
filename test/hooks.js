describe.only('Hooks', () => {
    before(() => console.log('before ALL - Se ejecuta al inicio una vez.'));
    after(() => console.log('after ALL - Se ejecuta al final de todas las pruebas (\'it\') una vez.'));
    beforeEach(() => console.log('before Each Se ejecuta antes de todos los \'it\''));
    afterEach(() => console.log('after Each se ejecuta después de todos los \'it\''));

    it('Prueba 1', () => console.log('Test 1'));
    it('Prueba 2', () => console.log('Test 2'));
});