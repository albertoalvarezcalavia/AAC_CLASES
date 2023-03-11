// 2. Interactuando con el usuario desde la consola
// a. Creá un archivo experimento.html agregá una etiqueta H1 que diga:
// “La magia sucede en la consola!”. Creá un archivo javascript y
// vincularlos.


// b. Dentro del archivo js, mediante un prompt solicitá al usuario que
// ingrese su nombre. Guarda la respuesta en un variable llamada
// “nombre”. Imprimí el nombre del usuario en la consola.


 //let nombre = prompt("Ingrese su nombre");
// console.log("Su nombre es: ", nombre);



// c. Mediante otro prompt solicitá al usuario que ingrese su edad. Guarda
// la respuesta en una variable llamada “edad”. Imprimí la edad del
// usuario en la consola.

// let edad = prompt("Ingrese su edad");
// console.log("Su edad es: ", edad);

// d. Mediante un confirm preguntale al usuario si le gustan los deportes.
// Guarda la respuesta en un variable llamada “fanDeportes”. Imprimí el
// valor por consola.

// let fanDeportes = confirm("Te gustan los deportes?");
// console.log("Al usuario le gustan los deportes?: ", fanDeportes);

// e. Mediante un alert se tendrá que mostrar la leyenda “Muchas gracias
// Nombre por responder nuestras preguntas”. En el mensaje deberá
// figurar el nombre del usuario guardado en la variable “nombre”.

//alert(`Muchas gracias ${nombre} por responder nuestras preguntas.`);



// 3. Crear un programa que genere un número aleatorio entre el 1 y 20, si es par
// mostrar true seguido el número si es impar mostrar false seguido del
// número, utilizar el operador ternario.

// let aleatorio = Math.floor(Math.random() * (20 - 0));
// console.log(aleatorio);

// aleatorio % 2 === 0 ? console.log(true) : console.log(false);


// 4. Crear un programa que pida al usuario un número del 1 al 7 y muestre en
// pantalla el día de la semana correspondiente (1: Lunes, 2: Martes, etc.).

// let numUser = parseInt(prompt("Introduce un número del 1 al 7"));
// console.log(numUser);

// switch (numUser){
//     case 1:
//         alert("El número corresponde al Lunes");
//         break;
//     case 2:
//         alert("El número corresponde al Martes");
//         break;
//     case 3:
//         alert("El número corresponde al Miércoles");
//         break;
//     case 4:
//         alert("El número corresponde al Jueves");
//         break;
//     case 5:
//         alert("El número corresponde al Viernes");
//         break;
//     case 6:
//         alert("El número corresponde al Sábado");
//         break;
//     case 7:
//         alert("El número corresponde al Domingo");
//         break;
//     default:
//         alert("El número no está entre 1 y 7");
//         break;
// }



// 5. Crear un programa que pida al usuario tres números y muestre en pantalla la
// suma de los dos mayores.

// let primero = parseInt(prompt("Introduce un primer número"));
// let segundo = parseInt(prompt("Introduce un segundo número"));
// let tercero = parseInt(prompt("Introduce un tercer número"));

// let mayor1;
// let mayor2;
// let menor;

// if (primero > segundo && primero > tercero && segundo > tercero){
//     mayor1 = primero;
// }



// 6. Crear un programa que pida al usuario tres números con un valor del 1 al 10,
// sacar el promedio de los tres números y mostrar true si el promedio es mayor
// a 5 caso contrario mostrar false, utilizar el operador ternario.


// 7. Crear un programa que pida al usuario su año de nacimiento y muestre en
// pantalla su edad actual.


// 8. Crear un programa que pida al usuario su edad y su género, y le ofrezca un
// descuento del 10% si es mayor de edad y del 15% si es menor de edad y de
// género femenino.


// 9. Crear un programa que pida al usuario su nombre y su edad, y determine si
// es mayor de edad y su nombre contiene más de 5 letras.


// 10. Pedir una calificación de 0 a 10 y mostrar de la siguiente manera:
// a. Insuficiente si tiene de 0 a 2


// b. Suficiente de 3 a 6
// c. Bien de 7 a 9

// d. Excelente 10

