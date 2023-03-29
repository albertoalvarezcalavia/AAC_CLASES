// EJERCICIO 3:
// Objetivo: generar un reporte de gastos diarios de una familia.

// a. Mediante un confirm preguntarle al visitante que recién ingresa si quiere iniciar.

const pregunta = confirm("¿Quieres comenzar?");

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


if (pregunta) {
  // Pedimos la cantidad de integrantes de la familia
  let cantidadIntegrantes = prompt("¿Cuántos integrantes tiene tu familia? (Introduce el número)");

  cantidadIntegrantes = Number(cantidadIntegrantes);
  
  // Validamos que la cantidad ingresada sea un número y mayor a 2
  if (typeof cantidadIntegrantes !== "number" || cantidadIntegrantes <= 2) {
    alert("La cantidad de integrantes debe ser un número mayor a 2.");
    window.location.reload();
  } else {
    // Creamos un array vacío para guardar los datos de cada integrante
    const integrantes = [];
    
    // Pedimos los datos de cada integrante y los guardamos en el array
    for (let i = 0; i < cantidadIntegrantes; i++) {
      let nombre = prompt(`Nombre del integrante ${i+1}`);
      let gastos = prompt(`Gastos del día para ${nombre}`);
      
      // Validamos que el nombre y los gastos no estén vacíos y que los gastos sean un número
      if (nombre === "" || gastos === "" || typeof Number(gastos) !== "number") {
        alert("Debes ingresar un nombre del integrante familiar y un valor numérico para sus gastos.");
        window.location.reload();
      } else {
        integrantes.push({ nombre: nombre, gastos: Number(gastos) });
      }
    }
    
    // Mostramos el array de integrantes por consola
    console.log(integrantes);
    
    // Imprimimos por consola el nombre y gasto de cada integrante
    integrantes.forEach((integrante) => {
      console.log(`Nombre: ${integrante.nombre} => Gasto: ${integrante.gastos}€`);
    });
    
    // Calculamos los gastos totales de la familia
    const gastosTotales = integrantes.reduce((total, integrante) => {
      return total + integrante.gastos;
    }, 0);
    
    // Mostramos los gastos totales por consola
    console.log(`Gastos totales: ${gastosTotales}€`);
    
    // Si los gastos totales superan $1000 mostramos una alerta
    if (gastosTotales > 1000) {
      alert("Debemos pedir un préstamo.");
    }
    
    // Calculamos el promedio de gasto del día
    const promedioGasto = gastosTotales / cantidadIntegrantes;
    
    // Mostramos el promedio de gasto por consola
    console.log(`Promedio de gasto del día: ${promedioGasto}€`);
    
    // Si el promedio de gasto es inferior a $500 mostramos una alerta
    if (promedioGasto < 500) {
      alert("¡Festejamos!");
    }else {
      alert("¡Cuidado! ¡Has gastado más de 500€ diarios!");
    };
  }
} else {
  // Mostramos una alerta de despedida y redirigimos al usuario a Netflix
  alert("Gracias por haber venido.");
  window.location.href = 'https://netflix.com';
}