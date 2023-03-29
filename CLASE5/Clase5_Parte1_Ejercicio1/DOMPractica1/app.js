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


if (confirmacion) {
    document.querySelector('h2').innerText = 'Qué alegría que quieras continuar tu visita';
    const nombre = prompt('Ingrese su nombre:');
    document.querySelector('h1').innerText = `Bienvenido ${nombre}`;

    const edad = prompt('¿Cuántos años tienes?');
    if (edad >= 18) {
        const teGustaProgramar = confirm('¿Te gusta la programación?');

        if (teGustaProgramar) {
            document.querySelector('.background-img').style.backgroundImage = 'url(img/programmer.jpeg)';
        } else {
            document.querySelector('.background-img').style.backgroundImage = 'url(img/gatito.jpeg)';
        };

        const rutaImagenAvatar = prompt('Ingresa la ruta con la imagen de tu avatar:');
        // const avatarImagen = document.querySelector('.avatar');
        // avatarImagen.setAttribute('src', rutaImagenAvatar);
        document.querySelector('.avatar').src = `${rutaImagenAvatar}`;

        const pelicula = {
            nombre: '',
            director: '',
            duracion: 0,
            actor: ''
        };
          
        pelicula.nombre = prompt('Introduce el nombre de una película:');
        pelicula.director = prompt('Introduce el nombre del director:');
        pelicula.duracion = parseInt(prompt('Introduce la duración de la película en minutos:'));
        pelicula.actor = prompt('Introduce el nombre del actor principal:');

        const listaPelicula = document.querySelector('#pelicula');
        listaPelicula.innerHTML = `
            <ul>
                <li><strong>Nombre:</strong> ${pelicula.nombre}</li>
                <li><strong>Director:</strong> ${pelicula.director}</li>
                <li><strong>Duración:</strong> ${pelicula.duracion} minutos</li>
                <li><strong>Actor:</strong> ${pelicula.actor}</li>
            </ul>
        `;

        listaPelicula.style.display = "block";

    } else {
        document.querySelector('.container-general').style.display = 'none';
        document.querySelector('#accesoDenegado').style.display = 'block';
    }

} else {
    document.querySelector('h2').innerText = 'Lamentamos que no quieras continuar tu visita';
};
