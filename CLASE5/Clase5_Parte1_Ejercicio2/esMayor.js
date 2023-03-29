// EJERCICIO 2:
// 2. ¿Cuál es mayor?
// Creá el archivo esMayor.html su correspondiente archivo js y vinculalos.
//    a. En el archivo html creá una estructura base y dentro de body colocá:
//       i. Un elemento <p> con la pregunta: ¿Qué número es mayor?
//       ii. Debajo creá otro elemento <p> con la clase “respuesta” que esté vacío. Allí, usando js, pondremos la respuesta
//           dependiendo de una pregunta al usuario.

// b. Dentro del archivo js, mediante un prompt solicitá al usuario que ingrese un número y guardalo en una variable. Con otro prompt 
//    solicitá otro número y también guardalo en una variable.

// c. Mediante condicionales evaluá cual de los dos números es mayor colocá la respuesta dentro del elemento <p> con clase respuesta. 
//    Por ejemplo, si evaluamos 4 y 5 debe leerse “5 es el número mayor”.


const respuesta = document.querySelector('.respuesta');

const n1 = parseFloat(prompt("Ingrese un número:"));
const n2 = parseFloat(prompt("Ingrese otro número:"));

if (n1 > n2) {
  respuesta.innerText = `${n1} es el número mayor.`;
} else if (n2 > n1) {
  respuesta.innerText = `${n2} es el número mayor.`;
} else {
  respuesta.innerText = "Los dos números son iguales.";
}