// EJERCICIO 2:
// 3. ¿De qué signo sos?
// Creá el archivo signo.html su correspondiente archivo js y vinculalos.
//    a. En el archivo html creá una estructura base y dentro de body colocá:
//       i. Un elemento <p> con la pregunta: ¿De qué signo sos?
//       ii. Debajo creá otro elemento <p> con la clase “respuesta” que esté vacío. Allí, usando js, pondremos la respuesta
//           dependiendo de una pregunta al usuario.

//    b. Dentro del archivo js, mediante un prompt solicitá al usuario que ingrese un número y guardalo en una variable.

//    c. Mediante condicionales evaluá el número y colocá la respuesta dentro del elemento <p> con clase “respuesta” la siguiente frase:
//       i. El número “n” es positivo.
//       ii. El número “n” es cero.
//       iii. El número “n” es negativo.

const respuesta = document.querySelector('.respuesta');

const num = parseFloat(prompt("Ingresa un número:"));

if (num > 0) {
  respuesta.innerText = `El número ${num} es positivo.`;
} else if (num < 0) {
  respuesta.innerText = `El número ${num} es negativo.`;
} else {
  respuesta.innerText = "El número es cero.";
}