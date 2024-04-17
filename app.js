/ Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}
// Solo un registro en consola para nosotros
console.log(sum(7,3))
// Exporta la función para usarla en otros archivos
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar }
// Calcular de Dollar a Yens
const fromDollarToYen = function(valueInDollar) {
    // Convertir dólares a euros
    let valueInEuro = valueInDollar / 1.07;
    // Convertir euros a yenes
    let valueInYen = valueInEuro * 156.5;
    // Retornar el valor en yenes
    return valueInYen;
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen }
// Calcular de Yenes a Libras
const fromYenToPound = function(valueInYens) {
    // Convertir Yenes a euros
    let valueInEuro = valueInYens / 156.5;
    // Convertir euros a Libras
    let valueInPounds = valueInEuro * 0.87;
    // Retornar el valor en Libras
    return valueInPounds;
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }