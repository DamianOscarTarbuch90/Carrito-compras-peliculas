//Declaración de variables de precios de películas y seriers

const opcion_1 = 500;
const opcion_2 = 500;
const opcion_3 = 500;
const opcion_4 = 1000;
const opcion_5 = 1000;
const opcion_6 = 1000;

//Aplicando funcionalidad a la función con un switch

const calcularPrecio = (segundaSeleccion) => {

  switch (segundaSeleccion) {
    case 1:
      alert("Ud seleccinó el señor de los anillos");
      return 1000;

    case 2:
      alert("Ud seleccionó Harry Potter");
      return 1000;

    case 3:
      alert("Ud seleccionó Star wars");
      return 1000;

    case 4:
      alert("Ud seleccionó Breaking bad");
      return 1500;

    case 5:
      alert("Ud seleccionó Game of thrones");
      return 1500;

    case 6:
      alert("Ud seleccionó Prison Break");
      return 1500;

    default:
      alert("Ud no seleccionó ninguna opción correctamente");
      break;
  }
}

//Inicialización de variable que determina si después de hacer la primera compra sigue comprando o no

let continuarCompra = true;

let ingresarUsuario = prompt("Por favor ingrese su nombre completo");

//Validación con While de ingreso de nombre con campo vacío

while (ingresarUsuario === "") {
  alert("Por favor ingrese un nombre válido");
  ingresarUsuario = prompt("Por favor ingrese su nombre completo");
}

alert("Bienvenido a la tienda virtual " + ingresarUsuario);

let consultaCompra = prompt(
  ingresarUsuario + ", desea realizar una compra SI o NO?"
);

//While principal de elección de compra por si o por no

while (consultaCompra != "NO" && consultaCompra != "no" && continuarCompra) {
  let primeraEleccion = prompt("Quiere comprar una serie o una película?");

  while (
    primeraEleccion.toLowerCase() != "serie" &&
    primeraEleccion.toLowerCase() != "pelicula"
  ) {
    alert("Su respuesta es inválida");
    primeraEleccion = prompt("Quiere comprar una serie o una película");
  }

  alert(
    "Perfecto. A continuación le brindaremos un listado de nuestro catálogo con sus respectivos precios"
  );

  //Elección del usuario del producto en caso de querer comprar.

  let segundaSeleccion = Number(
    prompt(
      "Seleccione el título que ud desee, escribiendo solo el número correspodiente al mismo según el siguiente listado: \n \n 1) El señor de los anillos - $1000 \n 2) Harry Potter - $1000 \n 3) Star wars - $1000 \n 4) Breaking bad - $1500 \n 5) Gameof thrones - $1500 \n 6) Prison break - $1500"
    )
  );

  while (segundaSeleccion > 6 || segundaSeleccion < 1) {
    alert("Por favor seleccione una opción correcta");

    segundaSeleccion = Number(
      prompt(
        "Seleccione el título que ud desee, escribiendo solo el número correspodiente al mismo según el siguiente listado: \n \n 1) El señor de los anillos - $1000 \n 2) Harry Potter - $1000 \n 3) Star wars - $1000 \n 4) Breaking bad - $1500 \n 5) Game of thrones - $1500 \n 6) Prison break - $1500"
      )
    );
  }

//Llamado a función declarada al prinicpio del código

  const precio = calcularPrecio(segundaSeleccion)

  alert("Ud compró un producto de " + precio)

  let consultaOtraCompra = prompt("Desea realizar otra compra?");

//Condicional que determina si se sigue o no con la compra

  if (consultaOtraCompra.toLowerCase() != "no") {
    alert("Continuemos con la compra");

  } else {
    continuarCompra = false
  }
}

//Final del código cuando el cliente no quiere comprar más y salimos del while

alert("Gracias por su visita" + " " + ingresarUsuario + ". Hasta pronto!");