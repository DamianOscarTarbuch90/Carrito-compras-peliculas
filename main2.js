let carrito = JSON.parse(localStorage.getItem('carrito de compras')) || [];

const shopContent = document.getElementById("main__shopContent")
const verCarrito = document.getElementById("nav__carrito__p")
const modalContainer = document.getElementById("main__modalContainer")

catalogo.forEach((producto) => {
  let contentImg = document.createElement("div");
  contentImg.className = "productCard"
  contentImg.innerHTML = `
  <img class="productImg" src="${producto.imagen}">
  <h3 class="productName"> ${producto.nombre} </h3>
  <p class="productPrice"> $${producto.precio} </p>
 `

  shopContent.append(contentImg);

  let botonComprar = document.createElement("button");
  botonComprar.className = "buyButton"
  botonComprar.innerText = 'AGREGAR AL CARRITO'

  if(botonComprar) {
  contentImg.append(botonComprar)
}

  botonComprar.addEventListener('click',() => {
    const productoExistente = carrito.find((prod) => prod.id === producto.id)
    if(productoExistente) {
    productoExistente.cantidad++
    } else {
  carrito.push({
    id: producto.id,
    imagen: producto.imagen,
    nombre: producto.nombre,
    precio: producto.precio,
    cantidad: producto.cantidad,
  })
}
  localStorage.setItem('carrito de compras', JSON.stringify(carrito));
  console.log(carrito)
  })
  
})

verCarrito.addEventListener('click', () => {
  Swal.fire({
    icon: 'info',
    title: 'Carrito',
    text: 'Al final de la pantalla podrás ver el resumen parcial de tu compra!',
  })
  modalContainer.innerHTML = ""
  modalContainer.style.display = "flex"
  let modalHeader = document.createElement("div")
  modalHeader.className = "modalHeader"
  modalHeader.innerHTML = `
  <p class="modal--header--tittle">CARRITO</p>`;

  modalContainer.append(modalHeader)

  let modalButton = document.createElement("p")
  modalButton.className = "modalButton"
  modalButton.innerText = "❌";

  modalButton.addEventListener('click',() => {
    modalContainer.style.display = "none";
    })
    
  modalContainer.append(modalButton);

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

    const deleteButton = document.createElement("button")
    deleteButton.className = "deleteButton"
    deleteButton.innerText = "BORRAR DEL CARRITO"

    carritoContent.append(deleteButton)

    deleteButton.addEventListener('click', () => {
      const index = carrito.findIndex((element) => element.id === producto.id)
      if(index !== -1) {
        carrito.splice(index,1)
        localStorage.setItem('carrito de compras', JSON.stringify(carrito));
      }
    })

  });
  
  const totalValor = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

  let totalBuying = document.createElement("div")
  totalBuying.className = "totalBuying"
  totalBuying.innerHTML = `
  <p> El total a abonar es $ ${totalValor}</p>
  `
  modalContainer.append(totalBuying)
})