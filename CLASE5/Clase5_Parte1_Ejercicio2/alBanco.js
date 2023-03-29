// EJERCICIO 2:
// 4. ¿Podemos ir al banco?
// Antes de pensar el ejercicio recordemos que un banco comercial en Argentina está abierto de Lunes a Viernes entre las 10 y las 15 horas.
// Tal vez debas recurrir a varias condiciones dentro del if y a algún operador especial...
// Ahora sí, creá el archivo alBanco.html su correspondiente archivo js y vinculalos.
//    a. En el archivo html creá una estructura base y dentro de body colocá:
//       i. Un elemento <p> con la pregunta: ¿Podemos ir al banco?
//       ii. Debajo creá otro elemento <p> con la clase “respuesta” que esté vacío. Allí, usando js, pondremos la respuesta
//           dependiendo de una pregunta al usuario.

//    b. Dentro del archivo js, mediante un prompt solicitá al usuario que ingrese un día de la semana y guardalo en una variable. Con otro
//       prompt pedile que ingrese la hora actual.

//    c. Mediante condicionales evaluá las siguientes situaciones y colocá en el elemento <p> con clase “respuesta” las frases correspondientes.
//       i. Si es un día de la semana y está dentro del horario permitido: “¡Bien! Todavía estamos a tiempo de llegar”.
//       ii. Para los demás casos: “Uf… No llegamos”.

const respuesta = document.querySelector('.respuesta');

const dia = prompt("Ingresa qué día de la semana es hoy:").toLowerCase();
const hora = parseFloat(prompt("Ingresa la hora actual (formato 24 hrs.):"));

if (dia !== "sábado" && dia !== "sabado" && dia !== "domingo" && hora >= 10 && hora < 15) {
  respuesta.innerText = "¡Bien! Todavía estamos a tiempo de llegar.";
} else {
  respuesta.innerText = "Uf… No llegamos.";
}