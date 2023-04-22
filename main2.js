//Se crean objetos, uno por cada producto seleccionable en la tienda con sus propiedades básicas

const opcion_1 = {
  nombre: "El señor de los anillos",
  precio: 1000
}

const opcion_2 = {
  nombre: "Harry Potter",
  precio: 1000
}

const opcion_3 = {
  nombre: "Star wars",
  precio: 1000
}

const opcion_4 = {
  nombre: "Breaking bad",
  precio: 1500
}

const opcion_5 = {
  nombre: "Game of thrones",
  precio: 1500
}

const opcion_6 = {
  nombre: "Prison break",
  precio: 1500
}

function Opcion(nombre, precio)  {
  this.nombre = nombre;
  this.precio = precio;
}

let opcion_7 = new Opcion('Vikingos', '1500')

let opcion_8 = new Opcion ('Los Simpsons', '1500')


//Creamos una función para obtener el producto

const obtenerProducto = (segundaSeleccion) => {

  switch (segundaSeleccion) {
    case 1:
      alert("Ud seleccinó " + opcion_1.nombre);
      return opcion_1.nombre + " $" + opcion_1.precio;

    case 2:
      alert("Ud seleccinó " + opcion_2.nombre);
      return opcion_2.nombre + " $" + opcion_2.precio;

    case 3:
      alert("Ud seleccinó " + opcion_3.nombre);
      return opcion_3.nombre + " $" + opcion_3.precio;

    case 4:
      alert("Ud seleccinó " + opcion_4.nombre);
      return opcion_4.nombre + " $" + opcion_4.precio;

    case 5:
      alert("Ud seleccinó " + opcion_5.nombre);
      return opcion_5.nombre + " $" + opcion_5.precio;

    case 6:
      alert("Ud seleccinó " + opcion_6.nombre);
      return opcion_6.nombre + " $" + opcion_6.precio;

      case 7:
      alert("Ud seleccinó " + opcion_7.nombre);
      return opcion_7.nombre + " $" + opcion_7.precio;

      case 8:
      alert("Ud seleccinó " + opcion_8.nombre);
      return opcion_8.nombre + " $" + opcion_8.precio;


    default:
      alert("Ud no seleccionó ninguna opción correctamente");
      break;
  }
}

const sumarSeleccion = (segundaSeleccion) => {
  
}

//Se declara un array para el carrito de compras

let carrito = [];


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

while (consultaCompra.toLowerCase() != 'no' && consultaCompra.toLowerCase() != 'si') {
  alert("Por favor ingrese solamente SI o NO");
  consultaCompra = prompt(
    ingresarUsuario + ", desea realizar una compra SI o NO?"
  );
}

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
      "Seleccione el título que ud desee, escribiendo solo el número correspodiente al mismo según el siguiente listado: \n \n 1) El señor de los anillos - $1000 \n 2) Harry Potter - $1000 \n 3) Star wars - $1000 \n 4) Breaking bad - $1500 \n 5) Gameof thrones - $1500 \n 6) Prison break - $1500 \n 7) Vikingos - $1500 \n 8) Los Simpsons - $1500"
    )
  );

  while (segundaSeleccion > 8 || segundaSeleccion < 1) {
    alert("Por favor seleccione una opción correcta");

    segundaSeleccion = Number(
      prompt(
        "Seleccione el título que ud desee, escribiendo solo el número correspodiente al mismo según el siguiente listado: \n \n 1) El señor de los anillos - $1000 \n 2) Harry Potter - $1000 \n 3) Star wars - $1000 \n 4) Breaking bad - $1500 \n 5) Game of thrones - $1500 \n 6) Prison break - $1500 \n Vikingos - $1500 \n 8) Los Simpsons - $1500"
      )
    );
  }

//Llamado a función declarada al prinicpio del código

  const producto = obtenerProducto(segundaSeleccion)

//Por cada venta sumamos al carrito el producto que se vendió con la función push del array

  carrito.push(producto);


  let consultaOtraCompra = prompt("Desea realizar otra compra?");

//Condicional que determina si se sigue o no con la compra

  if (consultaOtraCompra.toLowerCase() != "no") {
    alert("Continuemos con la compra");

  } else {
    continuarCompra = false;
    alert("Ud compró los siguientes títulos con sus precios: " + carrito);
  }
}

//Final del código cuando el cliente no quiere comprar más y salimos del while

alert("Gracias por su visita" + " " + ingresarUsuario + ". Hasta pronto!");