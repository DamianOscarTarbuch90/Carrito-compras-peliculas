//Se crean objetos, uno por cada producto seleccionable en la tienda con sus propiedades básicas

const catalogo = [
{nombre: "El señor de los anillos", precio: 1000},
{nombre: "Harry Potter", precio: 1000},
{nombre: "Star wars", precio: 1000},
{nombre: "Breaking bad", precio: 1500}, 
{nombre: "Game of thrones", precio: 1500},
{nombre: "Prison break", precio: 1500},
]

//Creo función constructora para agregar nuevos objetos

function Opcion(nombre, precio)  {
  this.nombre = nombre;
  this.precio = precio;
}

let opcion_7 = new Opcion('Vikingos', '1500');
let opcion_8 = new Opcion ('Los Simpsons', '1500');

//Creamos una función para obtener el producto con switch

const obtenerProducto = (segundaSeleccion) => {

  switch (segundaSeleccion) {
    case 1:
      alert("Ud seleccinó " + catalogo[0].nombre);
      return catalogo[0].nombre + " $" + catalogo[0].precio ;

    case 2:
      alert("Ud seleccinó " + catalogo[1].nombre);
      return catalogo[1].nombre + " $" + catalogo[1].precio;

    case 3:
      alert("Ud seleccinó " + catalogo[2].nombre);
      return catalogo[2].nombre + " $" + catalogo[2].precio;

    case 4:
      alert("Ud seleccinó " + catalogo[3].nombre);
      return catalogo[3].nombre + " $" + catalogo[3].precio;

    case 5:
      alert("Ud seleccinó " + catalogo[4].nombre);
      return catalogo[4].nombre + " $" + catalogo[4].precio;

    case 6:
      alert("Ud seleccinó " + catalogo[5].nombre);
      return catalogo[5].nombre + " $" + catalogo[5].precio;

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

alert(`Bienvenido a la tienda virtual ${ingresarUsuario}`);

let consultaCompra = prompt(
  ingresarUsuario + ", desea realizar una compra SI o NO?"
);

while (consultaCompra.toLowerCase() != 'no' && consultaCompra.toLowerCase() != 'si') {
  alert("Por favor ingrese solamente SI o NO");
  consultaCompra = prompt(
    `${ingresarUsuario}, desea realizar una compra SI o NO?`
  );
}

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

  if (primeraEleccion.toLowerCase() == 'serie') {
    const opcionCompra_1 = catalogo.filter((opciones) => opciones.precio === 1000);
    alert(opcionCompra_1)
  } else if (primeraEleccion.toLowerCase() == 'pelicula') {
    const opcionCompra_2 = catalogo.filter((opciones) => opciones.precio === 1500)
    alert(opcionCompra_2)
  } 

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
    alert(`Ud compró los siguientes títulos con sus precios: ${carrito.join(", ")}`);
  }
}

//Final del código cuando el cliente no quiere comprar más y salimos del while

alert(`Gracias por su visita ${ingresarUsuario}. Hasta pronto`);

//Interacción con el DOM con id y modificación de elemento con innertext

let titulo = document.getElementById("main__div__h1");
console.log(titulo.innerHTML);

titulo.innerText = "TU TIENDA DE PELÍCULAS Y SERIES"
console.log(titulo.innerText)

//Se agregan datos al local Storage

localStorage.setItem("Compra", "Peliculas y series")

let verLocalS = localStorage.getItem("Compra")

console.log(verLocalS)

//Se agregan datos al session Storage

sessionStorage.setItem("Email", "compras@carrito.com")
sessionStorage.setItem("Página", "www.tiendadepeliculas.com.ar")

//Remover dato del session storage

sessionStorage.removeItem("Página")

let verSessionS = sessionStorage.getItem("Email")

console.log(verSessionS)