var expect = require('chai').expect;

describe.only('Arrays test', () => {
    const ARRAY = [1, 2, 4, 6, 8];
    // Una prueba
    it('Los valores del array son iguales', () => {

        const RESULTADO = [1, 2, 4, 6, 8];

        expect(String(ARRAY)).to.equal('1,2,4,6,8');
        expect(ARRAY).to.eql(RESULTADO);
        expect(ARRAY).to.deep.equal(RESULTADO);
        expect([1, 2, 3]).to.have.ordered.members([1, 2, 3]);
    });

    it('Contiene el valor "2" el array', () => {
        expect(String(ARRAY).indexOf('2,') > -1).to.equal(true);
        expect(ARRAY).to.include(2);
        expect(ARRAY).to.be.an('array').that.includes(2);
        expect(ARRAY).to.include(2).not.to.include(56);

    });

    it('Incluye todos los números o alguno de ellos', () => {
        // Incluye esos números con duplicados (no tienen que estar todos)
        expect(ARRAY).to.include.members([1, 1, 1, 4]);
        expect(ARRAY).to.include.members([1, 2, 4, 6, 8, 1, 2, 4, 6, 8]);
    });

    it('Contiene los valores independientemente del orden', () => {
        expect(ARRAY).to.have.members([8, 1, 2, 4, 6]);
        expect(ARRAY).to.have.members([8, 4, 2, 1, 6]);
        expect(ARRAY).to.have.members([6, 8, 4, 2, 1]);
    });

    it('Tiene una longitud de 5 carácteres', () => {
        expect(ARRAY).to.have.length(5);
        expect(ARRAY.length).to.equal(5);
    });
});