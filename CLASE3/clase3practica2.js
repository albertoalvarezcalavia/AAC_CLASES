'use strict'



// 1. Convertir temperaturas
// Escribe una función llamada convertirTemperatura que convierte grados Celsius a Fahrenheit y viceversa. 
// La función debe aceptar dos argumentos: un número (la temperatura a convertir) y un string (la unidad de medida, que
// puede ser 'C' para Celsius o 'F' para Fahrenheit). La función debe devolver la temperatura convertida en la otra unidad. 
// Utiliza la fórmula de conversión: F = (9/5 * C) + 32.

// function convertirTemperatura(temperatura, tipogrado){
//     if (tipogrado == 'C'){
//         return (9/5 * temperatura) + 32;
//     }else{
//         return (temperatura - 32) * 5 / 9;
//     }
// }
// let resultado1 = convertirTemperatura(50,'C');
// console.log(resultado1);



// 2. Calculadora básica
// Escribe una función llamada calculadora que acepte tres argumentos: dos números y un string que represente una 
// operación aritmética ('+', '-', '*', '/'). La función debe realizar la operación y devolver el resultado. Si se 
// proporciona una operación no válida, la función debe devolver un mensaje de error.

// alert(`Escribe dos números y un operador matemático (+, -, *, /) para realizar la operación entre ellos`);
// function calculadora(n1,n2,operacion){
//     if (operacion == '+'){
//         return (n1 + n2);
//     }else if(operacion == '-'){
//         return (n1 - n2);
//     }else if(operacion == '*'){
//         return (n1 * n2);
//     }else if(operacion == '/'){
//         return (n1 / n2);
//     }else{
//         return ("Operación no válida");
//     }
// }
// let resultado2 = calculadora(3,50,'-');
// console.log(resultado2);



// 3. Contar vocales
// Escribe una función llamada contarVocales que acepte un string y devuelva la cantidad de vocales (mayúsculas o minúsculas) que contiene. 
// Utiliza un bucle for para recorrer el string y un condicional if para verificar si cada carácter es una vocal.

function contarVocales(cadena){
    let cuenta = 0;
    const vocales = ["a","e","i","o","u"];  // const vocales = 'aeiouAEIOU'
    for (let index = 0; index<cadena.length; index++)  {
        if (vocales.includes(cadena[index])){
            cuenta++
        }       
    }
    return cuenta;
}





// 5. Factorial
// Escribe una función llamada factorial que acepte un número entero positivo n como argumento y devuelva el factorial de n. Utiliza un 
// bucle for para calcular el factorial.
// factorial de 5 -> 1 * 2 * 3 * 4 * 5