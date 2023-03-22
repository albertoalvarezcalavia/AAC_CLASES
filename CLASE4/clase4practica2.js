'use strict'

// 1. Crea un objeto literal "misMascotas" con la siguiente información:
// ● nombre
// ● especie
// ● edad
// ● comidaFavorita
// ● color

// let misMascotas = {
//     nombre: 'Roger',
//     especie: 'Pastor Alemán',
//     edad: '5',
//     comidaFavorita: 'Bacon',
//     color: 'Marron',
//     };
//     console.log(misMascotas);



// ########################################################################################################################################
// ########################################################################################################################################
// 2. Implementa el método "presentar()" en el objeto "misMascotas" que, al ser invocado, retorne un string como este: 
// "Hola, mi mascota se llama NOMBRE, es un(a) ESPECIE y tiene EDAD años". Utiliza template literals para armar el
// string. 
// Imprime la frase en la consola.

// let misMascotas = {
//     nombre: 'Roger',
//     especie: 'Pastor Alemán',
//     edad: '5',
//     comidaFavorita: 'Bacon',
//     color: 'Marron',
//     presentar() {
//     return (`Hola, mi mascota se llama ${this.nombre}, es un(a) ${this.especie} y tiene ${this.edad} años.`);
//      }
//     };
//     console.log(misMascotas.presentar())



// ########################################################################################################################################
// ########################################################################################################################################
// 3. Creá un objeto literal misDatos con tu información en sus propiedades:
// ● nombre
// ● apellido
// ● dni
// ● comidaFavorita
// ● edad

// let misDatos = {
//     nombre: 'Alberto',
//     apellido: 'Alvarez',
//     dni: '2536547P',
//     comidaFavorita: 'Chocolate',
//     edad: '43',
// }
// console.log(misDatos);



// ########################################################################################################################################
// ########################################################################################################################################
// 4. Implementar el método saludar() en el objeto misDatos que al ser invocado retorne un string así: 
// "Hola mi nombre es NOMBRE APELLIDO y tengo EDAD años". Armá el string usando template literals que vimos en la 1ª clase
// de javascript. 
// Imprimí la frase en la consola.

// let misDatos = {
//     nombre: 'Alberto',
//     apellido: 'Alvarez',
//     dni: '02912510C',
//     comidaFavorita: 'Chocolate',
//     edad: '43',
//     saludar() {
//     return (`Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`);
//      }
//     };
//     console.log(misDatos.saludar())



// ########################################################################################################################################
// ########################################################################################################################################
// 5. Vamos a crear un auto como objeto literal con las propiedades:
// ● marca
// ● modelo
// ● anio
// ● color
// ● posicion: contendrá como valor inicial 0.

// Los métodos avanzar(n) y retroceder(n) que modifiquen la posición del auto: 
// avanzar(n) recibe un número positivo y aumenta el valor de la propiedad “posicion”. 
// retroceder(n) recibe un número positivo y disminuye el valor de la propiedad “posicion”. 

// Probá mover el auto usando varias veces los métodos avanzar(n) y retroceder(n). 
// Recordá usar una sola vez console.log() para ver la posición final del auto. ¿Qué deberías indicar dentro de los paréntesis 
// de console.log() para ver la posición final del auto?

let coche = {
    marca: 'Ford',
    modelo: 'Focus',
    anio: 2018,
    color: 'Rojo',
    posicion: 0,
}



// ########################################################################################################################################
// ########################################################################################################################################
// 6. Creá una nueva variable “nuevoAuto” con las mismas propiedades que la anterior y reemplazá a los métodos avanzar(n) y 
// retroceder(n) por un único método moverse(n) que va a recibir como parámetro un número positivo o negativo y modificará la 
// posición del auto la cantidad de pasos necesarios. 
// Probá mover el auto usando el método moverse(n).



// ########################################################################################################################################
// ########################################################################################################################################
// 7. Batalla de superhéroes. Vamos a poner en juego todo lo aprendido.
// Creá:
// un objeto literal ironMan con las siguientes propiedades y métodos:
// ● nombre (String) - "Iron Man"
// ● equipo (String) - "Avengers"
// ● poderes (Array) - ["Volar", "Lanzar misiles", "Disparar láser"]
// ● energía (Number) - 100
// ● getPoder (Fn) - recibe un parámetro numérico. Retornará el poder seleccionado.

// un objeto literal Hulk con las siguientes propiedades/métodos:
// ● nombre (String) - "Hulk"
// ● equipo (String) - "Avengers"
// ● poderes (Array) - ["Aplastar", "Gritar", "Golpear"]
// ● energia (Number) - 100
// ● getPoder (Fn) - recibe un parámetro numérico.

// Retornará el poder seleccionado y la energía restante con la frase: “Poder Elegido de SUPERHEROE: PODERELEGIDO. Energía 
// restante: ENERGIA.” Deberás usar template literals para construirla. 
// Utilizando las funciones Math.random() y Math.floor() generá un número entero al azar entre 0 y 2 que estará en relación 
// a nuestro array de poderes. El número al azar deberá ser pasado al método getPoder(). Cada poder debe descontar 10 de la energía 
// del superhéroe. Para probar la batalla deberás imprimir por consola a el método getPoder() de cada super héroe pasando el 
// número random dentro de los paréntesis.
// Por ejemplo:
// console.log(ironMan.getPoder(Math.floor(Math.random()*3)))



// ########################################################################################################################################
// ########################################################################################################################################
// 8. Crea un objeto literal producto con las siguientes propiedades:
// ● nombre
// ● precio
// ● stock Implementa los siguientes métodos en el objeto producto:
// ● vender(cantidad): recibe una cantidad como parámetro y disminuye el stock del producto en esa cantidad. Si la cantidad es mayor 
//                     al stock disponible, muestra un mensaje de error.
// ● agregarStock(cantidad): recibe una cantidad como parámetro y aumenta el stock del producto en esa cantidad.

// Prueba agregar y quitar stock utilizando los métodos correspondientes y muestra en consola el stock actualizado.