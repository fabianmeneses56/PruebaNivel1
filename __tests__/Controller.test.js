const {controlador} = require("../controllers/Controlador")

describe('Pruebas con fetch', () => {

    test('debe traer los datos ', async() => {
            const data = await controlador('');
            expect(data.length).toBe();
    });
    
})
