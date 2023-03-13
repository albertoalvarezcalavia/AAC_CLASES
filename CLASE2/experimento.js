// 2. Interactuando con el usuario desde la consola:
//   a. Creá un archivo experimento.html agregá una etiqueta H1 que diga: “La magia sucede en la consola!”. Creá un archivo
//      javascript y vincularlos.


//   b. Dentro del archivo js, mediante un prompt solicitá al usuario que ingrese su nombre. Guarda la respuesta en un variable
//      llamada “nombre”. Imprimí el nombre del usuario en la consola.

let nombre = prompt("Ingrese su nombre");
console.log("Su nombre es: ", nombre);


//   c. Mediante otro prompt solicitá al usuario que ingrese su edad. Guarda la respuesta en una variable llamada “edad”.
//      Imprimí la edad del usuario en la consola.

let edad = prompt("Ingrese su edad");
console.log("Su edad es: ", edad);


//   d. Mediante un confirm preguntale al usuario si le gustan los deportes. Guarda la respuesta en un variable llamada
//      “fanDeportes”. Imprimí el valor por consola.

let fanDeportes = confirm("Te gustan los deportes?");
console.log("Al usuario le gustan los deportes?: ", fanDeportes);


//   e. Mediante un alert se tendrá que mostrar la leyenda “Muchas gracias Nombre por responder nuestras preguntas”.
//      En el mensaje deberá figurar el nombre del usuario guardado en la variable “nombre”.

alert(`Muchas gracias ${nombre} por responder nuestras preguntas.`);



// 3. Crear un programa que genere un número aleatorio entre el 1 y 20, si es par mostrar true seguido el número,
//    si es impar mostrar false seguido del número. Utilizar el operador ternario.

let aleatorio = Math.floor(Math.random() * (20 - 0));
// console.log(aleatorio);

aleatorio % 2 === 0 ? console.log("true, el número aleatorio es par: ", aleatorio) : console.log("false, el número aleatorio es impar: " , aleatorio);



// 4. Crear un programa que pida al usuario un número del 1 al 7 y muestre en pantalla el día de la semana correspondiente
//    (1: Lunes, 2: Martes, etc.).

let numUser = parseInt(prompt("Introduce un número del 1 al 7"));
// console.log(numUser);

switch (numUser){
    case 1:
        alert("El número corresponde al Lunes");
        break;
    case 2:
        alert("El número corresponde al Martes");
        break;
    case 3:
        alert("El número corresponde al Miércoles");
        break;
    case 4:
        alert("El número corresponde al Jueves");
        break;
    case 5:
        alert("El número corresponde al Viernes");
        break;
    case 6:
        alert("El número corresponde al Sábado");
        break;
    case 7:
        alert("El número corresponde al Domingo");
        break;
    default:
        alert("El número no está entre 1 y 7");
        break;
}



// 5. Crear un programa que pida al usuario tres números y muestre en pantalla la suma de los dos mayores.

let n1 = parseInt(prompt("Introduce un primer número para sumarlo y ver cual es mayor"));
let n2 = parseInt(prompt("Introduce un segundo número para sumarlo y ver cual es mayor"));
let n3 = parseInt(prompt("Introduce un tercer número para sumarlo y ver cual es mayor"));
let mayor1;
let mayor2;
let suma;

if (n1 >= n2 && n1 >= n3 && n2 >= n3){
    mayor1 = n1;
    mayor2 = n2;
    suma = mayor1 + mayor2;
//    console.log(`El primer número introducido es: ${n1}, el segundo es: ${n2} y el tercero es: ${n3}.`);
//    console.log(`El mayor es: ${mayor1}. El segundo mayor es ${mayor2}`);
    alert(`Los números mayores son el ${mayor1} y el ${mayor2}, y su suma es: ${suma}`);
 } else if (n1 >= n2 && n1 >= n3 && n3 >= n2){
    mayor1 = n1;
    mayor2 = n3;
    suma = mayor1 + mayor2;
//    console.log(`El primer número introducido es: ${n1}, el segundo es: ${n2} y el tercero es: ${n3}.`);
//    console.log(`El mayor es: ${mayor1}. El segundo mayor es: ${mayor2}`);
    alert(`Los números mayores son el ${mayor1} y el ${mayor2}, y su suma es: ${suma}`);
 } else if (n2 >= n1 && n2 >= n3 && n1 >= n3){
    mayor1 = n2;
    mayor2 = n1;
    suma = mayor1 + mayor2;
//    console.log(`El primer número introducido es: ${n1}, el segundo es: ${n2} y el tercero es: ${n3}.`);
//    console.log(`El mayor es: ${mayor1}. El segundo mayor es: ${mayor2}`);
    alert(`Los números mayores son el ${mayor1} y el ${mayor2}, y su suma es: ${suma}`);
 } else if (n2 >= n1 && n2 >= n3 && n3 >= n1){
    mayor1 = n2;
    mayor2 = n3;
    suma = mayor1 + mayor2;
//    console.log(`El primer número introducido es: ${n1}, el segundo es: ${n2} y el tercero es: ${n3}.`);
//    console.log(`El mayor es: ${mayor1}. El segundo mayor es: ${mayor2}`);
    alert(`Los números mayores son el ${mayor1} y el ${mayor2}, y su suma es: ${suma}`);
 } else if (n3 >= n1 && n3 >= n2 && n1 >= n2){
    mayor1 = n3;
    mayor2 = n1;
    suma = mayor1 + mayor2;
//    console.log(`El primer número introducido es: ${n1}, el segundo es: ${n2} y el tercero es: ${n3}.`);
//    console.log(`El mayor es: ${mayor1}. El segundo mayor es: ${mayor2}`);
    alert(`Los números mayores son el ${mayor1} y el ${mayor2}, y su suma es: ${suma}`);
 } else if (n3 >= n1 && n3 >= n2 && n2 >= n1){
    mayor1 = n3;
    mayor2 = n2;
    suma = mayor1 + mayor2;
//    console.log(`El primer número introducido es: ${n1}, el segundo es: ${n2} y el tercero es: ${n3}.`);
//    console.log(`El mayor es: ${mayor1}. El segundo mayor es: ${mayor2}`);
    alert(`Los números mayores son el ${mayor1} y el ${mayor2}, y su suma es: ${suma}`);
 } else{
    console.log("ALGO ESTÁ MAL");
 }



// 6. Crear un programa que pida al usuario tres números con un valor del 1 al 10, sacar el promedio de los tres números y 
//    mostrar true si el promedio es mayor a 5 caso contrario mostrar false. Utilizar el operador ternario.

let n11 = parseInt(prompt("Introduce un primer número del 1 al 10:"));
let n21 = parseInt(prompt("Introduce un segundo número del 1 al 10:"));
let n31 = parseInt(prompt("Introduce un tercer número del 1 al 10:"));

let promedio = (n11 + n21 + n31) / 3;
// console.log(`El primer número introducido es: ${n11}, el segundo es: ${n21} y el tercero es: ${n31}.`);
console.log(`El promedio es: ${promedio}`);

promedio > 5 ? console.log(true) : console.log(false);



// 7. Crear un programa que pida al usuario su año de nacimiento y muestre en pantalla su edad actual.

let año = parseInt(prompt("Introduce tu año de nacimiento:"));
let edadActual = 2023 - año;
console.log(`Tu edad en 2023 es de ${edadActual} años`);



// 8. Crear un programa que pida al usuario su edad y su género, y le ofrezca un descuento del 10% si es mayor de edad y 
//    del 15% si es menor de edad y de género femenino.

let edadUser1 = parseInt(prompt("Introduce tu edad:"));
let genero = (prompt("Introduce tu género (Masculino/Femenino):"));
let descuento;
alert(`Tu edad es ${edadUser1} y tu género es ${genero}`);

if (edadUser1 >= 18){
    descuento = 10;
}else if (edadUser1 < 18 && genero == "Femenino"){
    descuento = 15;
}
descuento >=10 ? alert(`Te corresponde un descuento del ${descuento}%`) : alert(`No te corresponde ningún descuento por ser varon menor de edad`);



// 9. Crear un programa que pida al usuario su nombre y su edad, y determine si es mayor de edad y su nombre contiene más 
//    de 5 letras.

let nombreUser = prompt("Introduce tu nombre para ver si tiene 5 letras o más:");
let edadUser2 = parseInt(prompt("Introduce tu edad para ver si eres adult@:"));

edadUser2 >= 18 ? console.log(`Tienes ${edadUser2} años, si eres mayor de edad`) : console.log(`Tienes ${edadUser2} años, no eres mayor de edad`);
nombreUser.length >= 5 ? console.log(`Tu nombre es ${nombreUser} y tiene 5 letras o más`) : console.log(`Tu nombre es ${nombreUser} y tiene menos de 5 letras`);



// 10. Pedir una calificación de 0 a 10 y mostrar de la siguiente manera:
//   a. Insuficiente si tiene de 0 a 2
//   b. Suficiente de 3 a 6
//   c. Bien de 7 a 9
//   d. Excelente 10

let calificacion = parseInt(prompt("Introduce tu calificación (0 - 10):"));

if (calificacion >=0 && calificacion <=2){
    console.log("Insuficiente");
}else if (calificacion >=3 && calificacion <=6){
    console.log("Suficiente");
}else if (calificacion >=7 && calificacion <=9){
    console.log("Bien");
}else if (calificacion ==10){
    console.log("Excelente");
}else {
    console.log(`La calificación introducida, ${calificacion}, no es correcta"`);
}







