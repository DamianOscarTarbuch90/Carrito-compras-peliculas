const opcion_1 = 500;
const opcion_2 = 500;
const opcion_3 = 500;
const opcion_4 = 1000;
const opcion_5 = 1000;
const opcion_6 = 1000;

let ingresarUsuario = prompt("Por favor ingrese su nombre completo");

alert("Bienvenido a la tienda virtual " + ingresarUsuario);

let consultaCompra = prompt(
  ingresarUsuario + ", Desea realizar una compra SI o NO?"
);

while (consultaCompra != "NO" && consultaCompra != "no") {
  let primeraEleccion = prompt("Quiere comprar una serie o una película?");

  while (
    primeraEleccion != "SERIE" &&
    primeraEleccion != "serie" &&
    primeraEleccion != "Serie" &&
    primeraEleccion != "PELICULA" &&
    primeraEleccion != "pelicula" &&
    primeraEleccion != "Pelicula" &&
    primeraEleccion != "PELÍCULA" &&
    primeraEleccion != "película" &&
    primeraEleccion != "Película"
  ) {
    alert("Su respuesta es inválida");
    primeraEleccion = prompt("Quiere comprar una serie o una película");
  }

  alert(
    "Perfecto. A continuación le brindaremos un listado de nuestro catálogo con sus respectivos precios"
  );

  let segundaSeleccion = Number(
    prompt(
      "Seleccione el título que ud desee, escribiendo solo el número correspodiente al mismo según el siguiente listado: \n \n 1) El señor de los anillos \n 2) Harry Potter \n 3) Star wars \n 4) Breaking bad \n 5) Peaky blinders \n 6) Prison break"
    )
  );

  while (
    segundaSeleccion != 1 &&
    segundaSeleccion != 2 &&
    segundaSeleccion != 3 &&
    segundaSeleccion != 4 &&
    segundaSeleccion != 5 &&
    segundaSeleccion != 6
  ) {
    alert("Por favor seleccione una opción correcta");

    segundaSeleccion = Number(
      prompt(
        "Seleccione el título que ud desee, escribiendo solo el número correspodiente al mismo según el siguiente listado: \n \n 1) El señor de los anillos \n 2) Harry Potter \n 3) Star wars \n 4) Breaking bad \n 5) Peaky blinders \n 6) Prison break"
      )
    );
  }

  function calcularPrecio(segundaSeleccion)

  switch (segundaSeleccion) {
    case 1:
      alert("Ud seleccinó el señor de los anillos");
      break;

    case 2:
      alert("Ud seleccionó Harry Potter");
      break;

    case 3:
      alert("Ud seleccionó Star wars");
      break;

    case 4:
      alert("Ud seleccionó Breaking bad");
    
      break;

    case 5:
      alert("Ud seleccionó Peaky Blinders");
      break;

    case 6:
      alert("Ud seleccionó Prison Break");
      break;

    default:
      alert("Ud no seleccionó ninguna opción correctamente");
      break;
  }

  let consultaOtraCompra = prompt("Desea realizar otra compra?");

  if (consultaOtraCompra != "NO" && consultaOtraCompra != "No" && consultaOtraCompra != "no") {
    alert("Continuemos con la compra");
    
    segundaSeleccion = Number(
      prompt(
        "Seleccione el título que ud desee, escribiendo solo el número correspodiente al mismo según el siguiente listado: \n \n 1) El señor de los anillos \n 2) Harry Potter \n 3) Star wars \n 4) Breaking bad \n 5) Peaky blinders \n 6) Prison break"
      )
    );

  } else {
    alert("Gracias por su compra " + ingresarUsuario + ". Hasta pronto")
  }
}
alert("Gracias por tu visita" + " " + ingresarUsuario + ". Hasta pronto.");