'use strict'

// ########################################################################################################################################
// ########################################################################################################################################
// 
// EJERCICIO 1:
// 1. Interactuando con el usuario y modificando el DOM.
// Para este ejercicio necesitarás descargar los archivos de este link.
// Primero creá una carpeta con un archivo Javascript y vincularlo con el HTML.
// 
// a. Mediante un alert mostrar el saludo de bienvenida: "Bienvenidos a mi sitio.".

alert('Bienvenidos a mi sitio.');

// b. Usá un confirm para preguntar: “¿Está seguro de querer avanzar?”.
//    i. En el caso que quiera continuar mostrar en el <h2> el mensaje "Qué alegría que quieras continuar tu visita”.
//    ii. En caso que no quiera avanzar debe modificarse el <h2> con el mensaje "Lamentamos que no quieras continuar tu visita” y
//        no debería seguir el flujo de la aplicación. Es decir, ya no deberían ejecutarse más puntos de esta práctica.

let confirmacion = confirm('¿Estás seguro de querer avanzar?')

const mensajeBienvenida = document.querySelector('.bienvenida h2')
if(confirmacion){
    mensajeBienvenida.innerText = 'Qué alegría que quieras continuar tu visita'
} else {
    mensajeBienvenida.innerText = 'Lamentamos que no quieras continuar tu visita'
}

// c. Con un prompt pedí al usuario ingrese su nombre y guardalo en una variable.

// d. Modificá el <h1> para que diga “Bienvenido NOMBRE” donde NOMBRE debe ser el nombre ingresado por el usuario.

// e. A través de un prompt preguntá “¿Cuántos años tenés?”.
//    i. Si es mayor a 17 podrá continuar con el proceso.
//    ii. En caso de que sea menor de 18 ocultá el div con clase container-general y mostrar el div con id accesoDenegado.

// f. Preguntar mediante un confirm “¿Te gusta la programación?”.
//    i. Si al usuario no le gusta la programación incluí dentro del div clase ‘background-img’ la imagen gatito.jpeg que está en la
//       carpeta img.
//    ii. En caso que sí le guste la programación incluí dentro del div clase ‘background-img’ la imagen programmer.jpeg que está
//        en la carpeta img.

// g. Captura la etiqueta <img> de clase avatar para cambiar la imagen que se muestra. En su lugar inserta una imagen tuya. 
//    Para obtener esa imagen preguntá al usuario mediante un prompt la ruta de la imagen.
//    No es necesario descargar la imagen, puedes googlear una imagen e indicar la URL donde se encuentra.
//    Para reemplazar la imagen debes usar el atributo src y asignarle la nueva ruta de la imagen. ¿Se te ocurre cómo hacerlo?

// h. A continuación vamos a pedirle al usuario datos los datos de su película favorita para poder mostrarla:
//    i. Primero vamos a crear un objeto literal llamado pelicula con las siguientes propiedades:
//    ii. nombre (String)
//    iii. director (String)
//    iv. duracion (Number)
//    v. actor (String)

// i. Luego vamos a pedirle al usuario que ingrese la información usando prompts (uno para cada dato) y guardarlos como propiedades de
//    nuestro objeto pelicula.

// j. Para mostrar los datos ingresados vamos utilizar la lista desordenada (<ul>) oculta en el archivo HTML (dentro del <div id=”pelicula”>).

// k. Recuerda desocultar la lista una vez que el usuario haya cargado los datos.


// ########################################################################################################################################
// ########################################################################################################################################
// 
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


// 5. Dark mode
// Creá el archivo darkMode.html su correspondiente archivo js y vinculalos.
//    a. En el archivo html creá una estructura base y dentro de body colocá:
//       i. Un elemento <p> con la pregunta: ¿Querés aplicar dark mode en el sitio?

//    b. Dentro del archivo js, mediante un confirm preguntá al usuario “¿Querés aplicar dark mode en el sitio? “
//       i. Si la respuesta es afirmativa cambiá el color del body a #444 el color de la tipografía a #fff e mostrá en el 
//          elemento <p> con clase “respuesta” las frases “Dark Mode activado”.
//       ii. En caso de que no quiera mostrá en el elemento <p> con clase “respuesta” las frases “Ok. Lo activo en otro momento.”


// ########################################################################################################################################
// ########################################################################################################################################
// 
// EJERCICIO 3:
// Objetivo: generar un reporte de gastos diarios de una familia.

// a. Mediante un confirm preguntarle al visitante que recién ingresa si quiere iniciar.
//    i. Si la respuesta es negativa deberá mostrarse una alerta que diga "Gracias por haber venido" y luego será direccionado al
//       sitio web de Netflix. Usá el método: window.location.href = ‘https://netflix.com’

//    ii. Si la respuesta es positiva:
//        1. Mediante un prompt pedile que ingrese la cantidad de integrantes de su familia. Tal vez debas pasar el valor
//           ingresado dentro de los paréntesis de la función Number() para asegurarnos de que se guarde como número.
//        2. Validá que el dato ingresado sea un número y que sea mayor a 2.
//           Para chequear que sea número podrías usar la función typeof(variable) === “number”.
//           Si el usuario coloca algo diferente a un número o es un número menor igual a 2 deberá alertar que el valor
//           necesario debe ser un número mayor a 2 y volver a cargar la página con la función nativa:
//           (window.location.reload()).

// b. Con la cantidad de integrantes lista vamos a pedir mediante un prompt para cada uno: nombre y gastos del día validando que:
//    i. El nombre no puede estar vacío.
//    ii. El valor de gasto no puede estar vacío y debe ser un número. Para chequear que sea número podrías usar la 
//        función typeof(variable). En cualquiera de esos casos, alertar del error y volver a cargar la página.

// c. Con todos los datos usando un bucle y métodos de arrays creá un array de objetos literales. Ejemplo final:
//    let integrantes = [
//    {nombre: "Ada", gastos: 300},
//    {nombre: "Tim", gastos: 570},
//    {nombre: "Vincent", gastos: 80},
//    ]

// d. Mostrar dicho array por consola.

// e. Imprimir por consola el nombre y gasto de cada integrante.

// f. Obtener:
//    i. Los gastos de toda la familia e imprimirlos por consola.
//    ii. Si el gasto total supera los $1000 mostrar una alerta con el mensaje “Debemos pedir un préstamo”.
//    iii. El promedio de gasto del día e imprimirlo por consola.
//    iv. Si el gasto promedio es inferior a $500 mostrar una alerta con el mensaje “¡Festejamos!”