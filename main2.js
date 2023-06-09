//Se declara el Local Storage con el getItem a todo el catálogo de productos

let carrito = JSON.parse(localStorage.getItem('carrito de compras')) || [];

//Creación de constantes para llamar a código del Html para usar con JS

const shopContent = document.getElementById("main__shopContent")
const verCarrito = document.getElementById("nav__carrito__p")
const modalContainer = document.getElementById("main__modalContainer")

//Creación de función con async en el que llamamos a todo el catálogo del archivo json con fetch y creamos el botón agregar al carrito

const getProducts = async() => {
  try {
  const response = await fetch("productos.json");
  const data = await response.json()
  data.forEach((producto) => {
    let contentImg = document.createElement("div");
    contentImg.className = "productCard"
    contentImg.innerHTML = `
    <img class="productImg" src="${producto.imagen}">
    <h3 class="productName"> ${producto.nombre} </h3>
    <p class="productPrice"> $${producto.precio} </p> `
  
    shopContent.append(contentImg);
  
    let botonComprar = document.createElement("button");
    botonComprar.className = "buyButton"
    botonComprar.innerText = 'AGREGAR AL CARRITO'
  
    if(botonComprar) {
    contentImg.append(botonComprar)
  }
  
//Evento creado para agregar el producto al carrito al presionar el botón agregar al carrito

    botonComprar.addEventListener('click',() => {
      const productoExistente = carrito.find((prod) => prod.id === producto.id)
      if(productoExistente) {
      productoExistente.cantidad++;
      } else {
    carrito.push({
      id: producto.id,
      imagen: producto.imagen,
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad: producto.cantidad,
    })
  }

  //Se declara el Local Storage con el setItem a todo el catálogo de productos cuando se presiona el botón agregar al carrito

    localStorage.setItem('carrito de compras', JSON.stringify(carrito));
    console.log(carrito)
    })
  })
} catch (err) {
  console.log(err)
}
}

getProducts()

//Evento creado para todo lo que pasa al apretar el botón del carrito arriba a la izquierda de la pantalla (creación del container modal en donde se almacenan los productos seleccionados en el carrito, se puede cerrar y abrir el modal con la X y se crea el botón de eliminar del carrito)

verCarrito.addEventListener('click', () => {

//Sweet Alert que indica que los productos seleccionados están abajo en el carrito

  Swal.fire({
    icon: 'info',
    title: 'Carrito',
    text: 'Al final de la pantalla podrás ver el resumen parcial de tu compra!',
  })

//Se crea la título carrito dentro del modal y se da la orden para que se abra al presionar en el ícono

  modalContainer.innerHTML = ""
  modalContainer.style.display = "flex"
  let modalHeader = document.createElement("div")
  modalHeader.className = "modalHeader"
  modalHeader.innerHTML = `
  <p class="modal--header--tittle">CARRITO</p>`;

  modalContainer.append(modalHeader)

  //Se crea el botón para cerrar el modal cuando esté abierto

  let modalButton = document.createElement("p")
  modalButton.className = "modalButton"
  modalButton.innerText = "❌";

  modalContainer.append(modalButton);

  let finalizarCompraButton = document.createElement("button")
  finalizarCompraButton.className = "finalizarCompraButton"
  finalizarCompraButton.innerText = "FINALIZAR COMPRA"

  modalContainer.append(finalizarCompraButton)

  finalizarCompraButton.addEventListener('click', () => {
    if(totalValor == 0) {    Swal.fire({
      icon: 'error',
      title: 'Carrito vacío',
      text: 'Seleccione un producto para sumar al carrito',
    })
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Compra exitosa',
        text: 'Se envió un mail a su dirección de correo electrónico con la confirmación de su compra',
      })
    }

  })

  //Evento creado para que al apretar la X del modal se cierre el mismo

  modalButton.addEventListener('click',() => {
    modalContainer.style.display = "none";
    })

  //Se recorre cada uno de los productos del carrito para llamar a todas sus propiedades cuando figuren en el carrito

  carrito.forEach((producto) => {
    let carritoContent = document.createElement("div")
    carritoContent.className = "carritoContent"
    carritoContent.innerHTML = `
    <img src="${producto.imagen}">
    <h3>${producto.nombre} </h3>
    <p>$${producto.precio}</p>
    <p>Cantidad: ${producto.cantidad}</p>
    <p>Subtotal: $${producto.precio * producto.cantidad}</p>
    `;

    modalContainer.append(carritoContent);

    //Se crea el botón para eliminar el producto del carrito

    const deleteButton = document.createElement("button")
    deleteButton.className = "deleteButton"
    deleteButton.innerText = "BORRAR DEL CARRITO"

    carritoContent.append(deleteButton)

//Evento creado para borrar el producto al presionar el botón de borrar del carrito

    deleteButton.addEventListener('click', () => {
      const index = carrito.findIndex((element) => element.id === producto.id)
      if(index !== -1) {
        carrito.splice(index,1)
        localStorage.setItem('carrito de compras', JSON.stringify(carrito));
      }
    })
  });
  
//Función acumuladora para calcular el valor total de toda la compra

  const totalValor = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

  let totalBuying = document.createElement("div")
  totalBuying.className = "totalBuying"
  totalBuying.innerHTML = `
  <p> El total de la compra es $ ${totalValor}</p>
  `
  modalContainer.append(totalBuying)
})