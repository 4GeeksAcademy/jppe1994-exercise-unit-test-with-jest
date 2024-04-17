// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
   let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
//Prueba de Dollar  a Yenes
test("One dollar should be 146.28 yens", function() {
    // Importo la función desde app.js
    const { fromDollarToYen } = require('./app.js');
    // Utilizamos la función para convertir 1 dólar a yenes
    const yens = fromDollarToYen(1);
    // Calculamos el valor esperado (  (1 euro/ 1.07 dollar) * yenes  )
    const expected = (1 / 1.07) * 156.5;
    // Verificamos si la función devuelve el valor esperado
    expect(fromDollarToYen(1)).toBe(expected); //Pongo "expected" por la cantidad de decimales que tiene
});
//Prueba de yenes  a Libras
test("One Yen should be 0,005559 Pounds", function() {
    // Importo la función desde app.js
    const { fromYenToPound } = require('./app.js');
    // Utilizamos la función para convertir 1 yen a libras
    const yens = fromYenToPound(1);
    // Calculamos el valor esperado (  (1 euro/ 156.5 yenes) * 0.87 libras  )
    const expected = (1 / 156.5) * 0.87;
    // Verificamos si la función devuelve el valor esperado
    expect(fromYenToPound(1)).toBe(expected); //Pongo "expected" por la cantidad de decimales que tiene
});
//