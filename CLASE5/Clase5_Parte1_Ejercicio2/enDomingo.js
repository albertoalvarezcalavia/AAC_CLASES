// EJERCICIO 2:
// 1. Sólo en domingo
// Creá el archivo enDomingo.html su correspondiente archivo js y vinculalos.
//    a. En el archivo html creá una estructura base y dentro de body colocá:
//       i. Un elemento <p> con la pregunta: ¿Ponemos a hervir el agua?
//       ii. Debajo creá otro elemento <p> con la clase “respuesta” que esté vacío. Allí, usando js, pondremos la respuesta
//           dependiendo de una pregunta al usuario.

//    b. En el archivo js, mediante un prompt preguntá al usuario qué día es hoy. Si el usuario ingresa “domingo” en el elemento <p> con 
//       clase respuesta debe leerse “¡Pongamos la olla, hoy se comen pastas!" para cualquier otro día la frase debe ser "Mejor lo dejamos 
//       para el domingo". Atento a cómo escribís el día y cómo los estás evaluando dentro del if.

const respuesta = document.querySelector('.respuesta');

const dia = prompt('¿Qué día es hoy?');

if (dia.toLowerCase() === 'domingo') {
  respuesta.innerText = '¡¡¡Domingo!!! ¡Pongamos la olla, que hoy se come pasta!';
  //respuesta.innerText = `¡¡¡${dia}!!! ¡Pongamos la olla, que hoy se come pasta!`;
} else {
  respuesta.innerText = 'Mejor lo dejamos para el Domingo.';
}