// Ejercicio 1
// Simpsonizate y elegí tus personajes favoritos
// Desde el departamento de diseño nos envían una maqueta terminada del sitio de Los Simpsons junto con una lista de requerimientos que
// tendremos que implementar usando JavaScript.
// Queremos que el usuario ingrese al sitio y que:
// 1) Cuando pase el mouse por el título "Empecemos" se le dispare un mensaje preguntándole el nombre
//    a) Capturar el título y asignarle el evento correspondiente

//    b) Dentro del evento, disparar un prompt con mensaje "¿CÓMO TE LLAMÁS?"

//    c) Guardar el dato en la variable nombre.


// 2) Si no completa nada, darle la bienvenida con un mensaje genérico. Si completa con su nombre, darle una bienvenida personalizada.
//    a) Capturar el párrafo con id "saludo" y guardarlo en la variable saludo

//    b) Usar un condicional para evaluar qué hay en la variable nombre

//    c) Si está vacía, escribir dentro del párrafo el texto "BIENVENID@"

//    d) Si no, escribir dentro del párrafo el texto "BIENVENID@ USUARIO", en donde USUARIO deberá ser reemplazado por el nombre que ingresó


// 3) Por una cuestión estética queremos que, aunque el usuario complete el nombre con minúscula, en el navegador se muestre en mayúscula
//    a) A la variable saludo aplicarle la propiedad que nos permite cambiar los estilos de css de un elemento

//    b) Sobre esa propiedad, usar textTransform para convertir el texto a mayúsculas


// 4) Una vez que se le dio el saludo al usuario, ocultar el título y hacer visible la etiqueta <span>, que está oculta desde el 
//    css (revisar el selector .bienvenida span)
//    a) Sobre la variable titulo, usar style y la propiedad que corresponda para ocultar el elemento en el html

//    b) Capturar la etiqueta <span>, usar style y la propiedad que corresponda para mostrar el elemento en el html


// 5) Cuando haga click sobre el <span>, ocultar la sección con clase "bienvenida" y mostrar la sección con clase "personajes"
//    a) Capturar ambos elementos

//    b) Usar style y la propiedad que corresponda para ocultar la sección bienvenida

//    c) Usar style y la propiedad que corresponda para mostrar la sección personajes. En este caso deberás asignar como valor 
//       el string “flex”


// 6) Cada personaje tiene una forma diferente de seleccionarse. Asignarle la funcionalidad que corresponda a cada uno
//    a) Capturar cada uno de los personajes usando el id

//    b) Asignarle el evento a cada uno según corresponda

//    c) Sugerimos crear las variables respetando el id de cada elemento. En la variable bart guardar el elemento con id="bart", etc…


// 7) Cuando seleccione un personaje, el mismo deberá verse seleccionado con un fondo amarillo. Cuando lo deseleccione, ese
// fondo amarillo deberá desaparecer.
//    a) Usar la clase "personaje-seleccionado", definida en el archivo main.css

//    b) Dentro del evento de cada personaje, usar la propiedad que nos permite saber si el elemento tiene o no tiene asignada una 
//       clase de css


// 8) Cuando haga click sobre el texto "Ver por consola los personajes que elegí", se vean por la consola del navegador todos los 
// elementos que haya seleccionado
//    a) Capturar el texto con clase "boton"

//    b) Asignarle el evento correspondiente

//    c) Capturar todos los elementos que tengan asignada la clase "personaje-seleccionado"

//    d) Mostrar por consola ese resultado


// ########################################################################################################################################
// ########################################################################################################################################
// 
// Ejercicio 2
// Para esta práctica deberás trabajar principalmente en el archivo /assets/js/main.js. Aquí encontrarás todo el material base. 
// En algunas de las consignas puede que encuentres que también deberás modificar el archivo HTML.

// 1. Primero lo primero: asegurarnos de no tener problemas de carga. Tenés 2 opciones para resolver este punto.
//    a. Asegurarte de que la llamada al archivo javascript esté al final del HTML antes de cerrar la etiqueta <body>

//    b. Encerrá todo tu código dentro del evento load. Tu trabajo entonces, es definir este evento.


// 2. Si optaste por la opción 1.b revisá que esté todo bien vinculado agregando un alert en el archivo dentro del evento load. 
// Luego y con la tranquilidad de que todo funciona bien, eliminaremos la alerta.


// 3. Hora de definir un primer evento:
//    a. Debes definir un evento al hacer click en el botón que dice Abracadabra

//    b. Al hacer click deberás lanzar un prompt que le diga al usuario que ingrese  su nombre

//    c. Tras ingresar su nombre, debes reemplazar el texto que dice “Hi, I’m Jane Doe” por “Hi, I’m NOMBRE” donde NOMBRE debe ser 
//       el nombre ingresado por el usuario


// 4. Vamos con un segundo evento que suceda en el botón que dice Get in touch with  me pero cuando se haga doble click sobre el mismo. 
// En ese caso, modificar el color del párrafo con clase “parrafo-color” (se encuentra arriba del botón) al color rojo.
// (Todo esto se encuentra en el footer de nuestro HTML)


// 5. Definir una función colorAlAzar. Esta función debe armar un array con 5 colores.
// Luego, sortear al azar un número entre 0 y 4 y retornar el color correspondiente del array. 
// Para tomar un indice del array al azar te dejamos una combinación de funciones de javascript que te pueden ayudar: 
// Math.floor(Math.random()*5)
// Math.random(): retorna un número random entre 0 y 1.
// Math.floor(): retorna la parte entera de un número con decimales.
// La multiplicación final *5 está buscando obtener un número entre 0 y 5.
// Te sugerimos que guardes el resultado en una variable para luego utilizarlo.


// 6. Modificar el evento de doble click sobre el botón Get in touch with me para que el texto se modifique a un color al azar en vez 
// de siempre pasar a rojo…


// 7. Definir 3 eventos sobre los 3 elementos que se presentan en la foto (Estamos refiriendonos a las etiquetas section aunque tendrás 
// que modificar el HTML para poder ser específico). Al hacer click sobre estos elementos deberás:
//    a. Obtener el h3 dentro del elemento clickeado. Para esto recomendamos utilizar this.querySelector. Funciona muy similar al
//       document.querySelector pero solo busca dentro del elemento clickeado.

//    b. Imprimir en un alerta el mensaje “Clickeaste sobre Consequat Lorem”. Donde el texto debe ser reemplazado por el contenido 
//       del h3


// 8. Generar 2 eventos sobre el botón que dice “See some of my recent work”
//    a. Cuando se pase el mouse por encima, el párrafo que se encuentra justo encima debe cambiar de color a un color al azar

//    b. Al quitar el mouse del botón, el párrafo debe volver a su color original #888


// 9. Definiremos un evento al clickear en la foto de la lechuza:
//    a. Primero debe disparar una alerta que diga “Preparate para el futuro…”

//    b. Luego de 5 segundos disparar una segunda alerta que diga “Y el futuro ya llegó!”


// 10. Definir un evento que al presionar cualquier tecla diga “Ey, tocaste el teclado!”


// 11. Modificar el evento anterior para que el mensaje sea “Ey, tocaste la barra!” y solo se
// vea ese mensaje si el usuario presiona la barra espaciadora


// 12. Modificar el evento anterior para que el evento solo suceda si se presiona la barra espaciadora estando en el campo de email. 
// Además, el evento debe evitar el comportamiento por defecto (no se debería poder escribir un espacio en un campo de email).


// 13. Vamos con un desafío bastante más complejo… vamos a crear una maquina de estados. Nuestro objetivo será detectar cuando el 
// usuario tipee de corrido la palabra “secreto”. El problema es que solamente podemos definir un evento cuando el
// usuario presiona una tecla y no cuando escribe toda una palabra. Por eso es que para empezar el ejercicio vamos a definir una 
// variable estadoSecreto que empiece con el número 0. A partir de ahí, vamos a implementar un código interno que solo
// nosotros sabemos:
// 0 significa que todavía no escribió nada
// 1 significa que escribió “s”
// 2 significa que escribió “se”
// 3 significa que escribió “sec”
// 4 significa que escribió “secr”
// 5 significa que escribió “secre”
// 6 significa que escribió “secret”
// ¿Qué debe hacer nuestro código?

// Definiremos un evento al presionar una tecla que implemente la siguiente lógica:
// 1) Si el estado es 0 y se presiona la tecla S, la variable estadoSecreto pasa a 1
// 2) Si el estado es 1 y se presiona la tecla E, la variable estadoSecreto pasa a 2
// 3) Si el estado es 2 y se presiona la tecla C, la variable estadoSecreto pasa a 3
// 4) Si el estado es 3 y se presiona la tecla R, la variable estadoSecreto pasa a 4
// 5) Si el estado es 4 y se presiona la tecla E, la variable estadoSecreto pasa a 5
// 6) Si el estado es 5 y se presiona la tecla T, la variable estadoSecreto pasa a 6
// 7) Si el estado es 6 y se presiona la tecla O, la variable estadoSecreto vuelve a 0 y se dispara una alerta que diga “SECRETO MAGICO”
// 8) Si no se cumple ninguna de las condiciones el estado vuelve a 0
