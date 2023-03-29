// EJERCICIO 2:
// 5. Dark mode
// Creá el archivo darkMode.html su correspondiente archivo js y vinculalos.
//    a. En el archivo html creá una estructura base y dentro de body colocá:
//       i. Un elemento <p> con la pregunta: ¿Querés aplicar dark mode en el sitio?

//    b. Dentro del archivo js, mediante un confirm preguntá al usuario “¿Querés aplicar dark mode en el sitio? “
//       i. Si la respuesta es afirmativa cambiá el color del body a #444 el color de la tipografía a #fff y mostrá en el 
//          elemento <p> con clase “respuesta” las frases “Dark Mode activado”.
//       ii. En caso de que no quiera mostrá en el elemento <p> con clase “respuesta” las frases “Ok. Lo activo en otro momento.”

const respuesta = document.querySelector('.respuesta');

const darkMode = confirm("¿Quieres aplicar dark mode en el sitio?");

if (darkMode) {
  document.body.style.backgroundColor = "#444";
  document.body.style.color = "#fff";
  respuesta.innerText = "Dark Mode activado.";
} else {
  respuesta.innerText = "Ok. Lo activo en otro momento.";
}