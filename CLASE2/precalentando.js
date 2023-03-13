//1. Precalentando
//Creá el archivo precalentando.html su correspondiente archivo js y vincularlos.
//Ahora diseñaremos un programa que le pregunte al usuario “¿Vas a salir de tu casa?” por medio de un confirm.
//● Si responde afirmativo tendrá que mostrar un alert con el texto «Chequeá el pronóstico del tiempo antes de salir».
//● En caso contrario mostrará un alert con el texto «Que bueno que te quedes. Va a llover mucho hoy.».


let vSalir = confirm("¿Vas a salir de tu casa?");

vSalir === true ? alert("Chequea el pronóstico del tiempo antes de salir") : alert("Que bueno que te quedes. Va a llover mucho hoy");

