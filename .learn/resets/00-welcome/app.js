// Esta es mi función que suma dos números
const sum = (a,b) => {
   return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el dolar a euro una función de 3
    let valueInEuro= valueInDollar /1,07;
    //pasar de euro a Yen
    let valueInYen = valueInDollar * 156.5;
    // Retornamos el valor en dólares
    return valueInYen;
}

module.exports = { sum,fromEuroToDollar };

