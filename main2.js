// //Se crean objetos, uno por cada producto seleccionable en la tienda con sus propiedades básicas

// const catalogo = [
// {id: 1, nombre: "El señor de los anillos", precio: 1000},
// {id: 2, nombre: "Harry Potter", precio: 1000},
// {id: 3, nombre: "Star wars", precio: 1000},
// {id: 4, nombre: "Breaking bad", precio: 1500}, 
// {id: 5, nombre: "Game of thrones", precio: 1500},
// {id: 6, nombre: "Prison break", precio: 1500},
// ]

// //Creo función constructora para agregar nuevos objetos

// function Opcion(id, nombre, precio)  {
//   this.id = id,
//   this.nombre = nombre;
//   this.precio = precio;
// }

// let opcion_7 = new Opcion(7, 'Vikingos', 1500);
// let opcion_8 = new Opcion (8, "Los Simpsons", 1500);

// catalogo.push(opcion_7, opcion_8)

// //Se declara un array para el carrito de compras

// let carrito = [];

// //Inicialización de variable que determina si después de hacer la primera compra sigue comprando o no

// let continuarCompra = true;

// let ingresarUsuario = prompt("Por favor ingrese su nombre completo");

// //Validación con While de ingreso de nombre con campo vacío

// while (ingresarUsuario === "") {
//   alert("Por favor ingrese un nombre válido");
//   ingresarUsuario = prompt("Por favor ingrese su nombre completo");
// }

// alert(`Bienvenido a la tienda virtual ${ingresarUsuario}`);

// let consultaCompra = prompt(
//   ingresarUsuario + ", desea realizar una compra SI o NO?"
// );

// while (consultaCompra.toLowerCase() != 'no' && consultaCompra.toLowerCase() != 'si') {
//   alert("Por favor ingrese solamente SI o NO");
//   consultaCompra = prompt(
//     `${ingresarUsuario}, desea realizar una compra SI o NO?`
//   );
// }

// //While principal de elección de compra por si o por no

// while (consultaCompra != "NO" && consultaCompra != "no" && continuarCompra) {
//   let primeraEleccion = prompt("Quiere comprar una serie o una película?");

//   while (
//     primeraEleccion.toLowerCase() != "serie" &&
//     primeraEleccion.toLowerCase() != "pelicula"
//   ) {
//     alert("Su respuesta es inválida");
//     primeraEleccion = prompt("Quiere comprar una serie o una película");
//   }

//   alert(
//     "Perfecto. A continuación le brindaremos un listado de nuestro catálogo con sus respectivos precios"
//   );

//   const seleccionSeriePelicula = (primeraEleccion) => {
//   if (primeraEleccion.toLowerCase() == 'serie') {
//     const opcionCompra_1 = catalogo.filter(series => series.precio >= 1500);
//     let texto_1 = ""
//     opcionCompra_1.forEach((opcion) => {
//       texto_1 += "Nombre: " + opcion.nombre + ", precio: " + opcion.precio + "\n";
//     })

//     alert(texto_1)
//   } else if (primeraEleccion.toLowerCase() == 'pelicula' || primeraEleccion.toLowerCase() == 'película') {
//     const opcionCompra_2 = catalogo.filter(peliculas => peliculas.precio <= 1000);
//     let texto_2 = ""
//     opcionCompra_2.forEach((opcion) => {
//       texto_2 += "Nombre: " + opcion.nombre + ", precio: " + opcion.precio + "\n";
//     })

//     alert(texto_2)
//   } else {
//     alert("Opción incorrecta")
//   }
//    }

//    seleccionSeriePelicula(primeraEleccion);

//    let segundaSeleccion = Number(
//     prompt(
//       "Seleccione el título que ud desee, escribiendo solo el número correspodiente al mismo según el siguiente listado: \n \n 1) El señor de los anillos - $1000 \n 2) Harry Potter - $1000 \n 3) Star wars - $1000 \n 4) Breaking bad - $1500 \n 5) Gameof thrones - $1500 \n 6) Prison break - $1500 \n 7) Vikingos - $1500 \n 8) Los Simpsons - $1500"
//     )
//   );

//   while (segundaSeleccion > 8 || segundaSeleccion < 1) {
//     alert("Por favor seleccione una opción correcta");

//     segundaSeleccion = Number(
//       prompt(
//         "Seleccione el título que ud desee, escribiendo solo el número correspodiente al mismo según el siguiente listado: \n \n 1) El señor de los anillos - $1000 \n 2) Harry Potter - $1000 \n 3) Star wars - $1000 \n 4) Breaking bad - $1500 \n 5) Game of thrones - $1500 \n 6) Prison break - $1500 \n Vikingos - $1500 \n 8) Los Simpsons - $1500"
//       )
//     );
//   }

//   //Aplicamos find para encontrar el producto que el usuario puso en "segunda selección" según su id

//   const productoEncontrado = catalogo.find(producto => producto.id === segundaSeleccion || producto.id == 7 && producto.id == 8)

// productoEncontrado ? alert("Ud compró: " + productoEncontrado.nombre) : alert("El producto no se encuentra disponible")

// let producto = productoEncontrado.nombre + ' $' + productoEncontrado.precio;

// //Por cada venta sumamos al carrito el producto que se vendió con la función push del array

//   carrito.push(producto);

//   let consultaOtraCompra = prompt("Desea realizar otra compra?");

// //Condicional que determina si se sigue o no con la compra

//   if (consultaOtraCompra.toLowerCase() != "no") {
//     alert("Continuemos con la compra");

//   } else {
//     continuarCompra = false;
//     alert(`Ud compró los siguientes títulos con sus precios: ${carrito.join(", ")}`);
//   }
// }

// //Final del código cuando el cliente no quiere comprar más y salimos del while

// alert(`Gracias por su visita ${ingresarUsuario}. Hasta pronto`);

// //Interacción con el DOM con id y modificación de elemento con innertext

// let titulo = document.getElementById("main__div__h1");
// console.log(titulo.innerHTML);

// titulo.innerText = "TU TIENDA DE PELÍCULAS Y SERIES"
// console.log(titulo.innerText)

// //Se agregan datos al local Storage

// localStorage.setItem("Compra", "Peliculas y series")

// let verLocalS = localStorage.getItem("Compra")

// console.log(verLocalS)

// //Se agregan datos al session Storage

// sessionStorage.setItem("Email", "compras@carrito.com")
// sessionStorage.setItem("Página", "www.tiendadepeliculas.com.ar")

// //Remover dato del session storage

// sessionStorage.removeItem("Página")

// let verSessionS = sessionStorage.getItem("Email")

// console.log(verSessionS)



let carrito = [];

const shopContent = document.getElementById("main__shopContent")
const verCarrito = document.getElementById("nav__carrito__p")
const verModalHeader = document.getElementById("main__modalHeader")

catalogo.forEach((productos) => {
  let contentImg = document.createElement("div");
  contentImg.className = "productCard"
  contentImg.innerHTML = `
  <img class="productImg" src="${productos.imagen}">
  <h3 class="productName"> ${productos.nombre} </h3>
  <p class="productPrice"> $${productos.precio} </p> `

  main__shopContent.append(contentImg);

  let botonComprar = document.createElement("button");
  botonComprar.className = "buyButton"
  botonComprar.innerText = 'COMPRAR'

  contentImg.append(botonComprar)

  botonComprar.addEventListener('click',() => {
  carrito.push(productos.id, productos.nombre, productos.precio)
  })
  console.log(carrito)
})

verCarrito.addEventListener('click', () => {
  let modalHeader = document.createElement("div")
  modalHeader.className = "modalHeader"
  modalHeader.innerHTML = `
  <p class="modal--header--tittle">Carrito</p>`;

  verModalHeader.append(modalHeader)

  let modalButton = document.createElement("p")
  modalButton.innerText = "x"
  modalButton.className = "modalButton"

  modalHeader.append(modalButton)

  carrito.forEach((productos) => {
    let carritoContent = document.createElement("div")
    carritoContent.className = "CarritoContent"
    carritoContent.innerHTML = `
    <img src="${productos.imagen}">
    <h3>${productos.nombre} </h3>
    <p>${productos.precio}</p>
    `

    verModalHeader.append(carritoContent);
  }) 
  
})

