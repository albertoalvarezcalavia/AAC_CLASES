'use strict'

// 1. Convertir temperaturas
// Escribe una función llamada convertirTemperatura que convierte grados Celsius a Fahrenheit y viceversa. 
// La función debe aceptar dos argumentos: un número (la temperatura a convertir) y un string (la unidad de medida, que
// puede ser 'C' para Celsius o 'F' para Fahrenheit). 
// La función debe devolver la temperatura convertida en la otra unidad. 
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



// ########################################################################################################################################
// ########################################################################################################################################
// 2. Calculadora básica
// Escribe una función llamada calculadora que acepte tres argumentos: dos números y un string que represente una 
// operación aritmética ('+', '-', '*', '/'). 
// La función debe realizar la operación y devolver el resultado. 
// Si se proporciona una operación no válida, la función debe devolver un mensaje de error.

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



// ########################################################################################################################################
// ########################################################################################################################################
// 3. Contar vocales
// Escribe una función llamada contarVocales que acepte un string y devuelva la cantidad de vocales (mayúsculas o minúsculas) que contiene. 
// Utiliza un bucle for para recorrer el string y un condicional if para verificar si cada carácter es una vocal.

// function contarVocales(cadena){
//     let cuenta = 0;
//     const vocales = ["a","e","i","o","u","A","E","I","O","U"];  // const vocales = 'aeiouAEIOU'
//     for (let index = 0; index<cadena.length; index++)  {
//         if (vocales.includes(cadena[index])){
//             cuenta++
//         }       
//     }
//     return cuenta;
// }

// let cuentaFinal = contarVocales("Esto es una cAdena");
// console.log(cuentaFinal);



// ########################################################################################################################################
// ########################################################################################################################################
// 4. Suma de números pares
// Escribe una función llamada sumaPares que acepte un número entero positivo n como argumento y devuelva la suma de todos los números pares
// desde 2 hasta n (incluido). 
// Utiliza un bucle for para recorrer los números y un condicional if para verificar si un número es par.

//const n1 = parseInt(prompt("Introduce un número entero positivo:"));
// function sumaPares (n1){
//     let resultado = 0;
//     for (let i = 0; i <= n1; i++) {
//         if (i % 2 == 0)
//         resultado = resultado + i;
//         //console.log(resultado)
//     }
//     return resultado;
// }
// let sumaFinal = sumaPares(8);
// console.log(sumaFinal);



// ########################################################################################################################################
// ########################################################################################################################################
// 5. Factorial
// Escribe una función llamada factorial que acepte un número entero positivo n como argumento y devuelva el factorial de n. 
// Utiliza un bucle for para calcular el factorial.
// (factorial de 5 -> 1 * 2 * 3 * 4 * 5)

// function factorial (f1){
//     let resultado = 1;
//     for (let f = 0; f < f1; f++) {
//         resultado += resultado * f;
//     }
//     return resultado;
// }
// let factorialFinal = factorial(9);
// console.log(factorialFinal);



// ########################################################################################################################################
// ########################################################################################################################################
// 6. Verificar si un número es par o impar
// Crea una función llamada esPar que acepte un número como argumento y devuelva true si el número es par, y false si es impar. 
// Luego, crea una función mostrarResultado que muestre en la consola del navegador si el número es par o impar utilizando la función esPar. 
// Por último, llama a la función mostrarResultado con un número cualquiera.

// function esPar (p1){
//     let resultado;
//     if (p1 % 2 == 0){
//         resultado = true;
//     }else{
//         resultado = false;
//     }
//     return resultado;
// }

// function mostrarResultado(p2){
//     let mensaje;
//     let resultadoFinal = esPar(p2);
//     if (resultadoFinal == true){
//          //console.log(`El número es par`);
//          mensaje = "El número es par";
//      }else{
//          //console.log(`El numero es impar`);
//          mensaje = "El número es impar";
//      }
//     return mensaje;
// }
// let numero = mostrarResultado(96);
// console.log(numero);


// ########################################################################################################################################
// ########################################################################################################################################
// 7. Calcular promedio de calificaciones
// Crea una función llamada calcularPromedio que acepte un array de números (calificaciones) y devuelva el promedio. 
// Luego, crea una función mostrarPromedio que muestre en la consola del navegador el promedio de las calificaciones utilizando la función 
// calcularPromedio. 
// Por último, llama a la función mostrarPromedio con un array de calificaciones.





// ########################################################################################################################################
// ########################################################################################################################################
// 8. Concatenar dos arrays y ordenarlos
// Crea una función llamada concatenarYOrdenar que acepte dos arrays de números y devuelva un nuevo array con todos los números de ambos arrays
// concatenados y ordenados de menor a mayor. 
// Luego, crea una función mostrarResultado que muestre en la consola del navegador el array resultante utilizando la función 
// concatenarYOrdenar. 
// Por último, llama a la función mostrarResultado con dos arrays de números.





// ########################################################################################################################################
// ########################################################################################################################################
// 9. Encontrar el número más grande en un array
// Crea una función llamada numeroMasGrande que acepte un array de números y devuelva el número más grande del array. 
// Luego, crea una función mostrarResultado que muestre en la consola del navegador el número más grande utilizando la función numeroMasGrande. 
// Por último, llama a la función mostrarResultado con un array de números.





// ########################################################################################################################################
// ########################################################################################################################################
// 10. Filtrar palabras de un array por longitud
// Crea una función llamada filtrarPalabras que acepte un array de palabras (strings) y un número entero positivo longitudMinima. La función
// debe devolver un nuevo array que contenga solo las palabras cuya longitud sea mayor o igual a longitudMinima. 
// Luego, crea una función mostrarResultado que muestre en la consola del navegador el array resultante utilizando la función filtrarPalabras. 
// Por último, llama a la función mostrarResultado con un array de palabras y una longitud mínima.


