let carrito = JSON.parse(localStorage.getItem('carrito de compras')) || [];

const shopContent = document.getElementById("main__shopContent")
const verCarrito = document.getElementById("nav__carrito__p")
const modalContainer = document.getElementById("main__modalContainer")

catalogo.forEach((productos) => {
  let contentImg = document.createElement("div");
  contentImg.className = "productCard"
  contentImg.innerHTML = `
  <img class="productImg" src="${productos.imagen}">
  <h3 class="productName"> ${productos.nombre} </h3>
  <p class="productPrice"> $${productos.precio} </p> `

  shopContent.append(contentImg);

  let botonComprar = document.createElement("button");
  botonComprar.className = "buyButton"
  botonComprar.innerText = 'COMPRAR'

  if(botonComprar) {
  contentImg.append(botonComprar)
}

  botonComprar.addEventListener('click',() => {
  carrito.push({
    id: productos.id,
    imagen: productos.imagen,
    nombre: productos.nombre,
    precio: productos.precio})
  })
  localStorage.setItem('carrito de compras', JSON.stringify(carrito));

  console.log(carrito)

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

  carrito.forEach((productos) => {
    let carritoContent = document.createElement("div")
    carritoContent.className = "carritoContent"
    carritoContent.innerHTML = `
    <img src="${productos.imagen}">
    <h3>${productos.nombre} </h3>
    <p>${productos.precio}</p>
    `;

    modalContainer.append(carritoContent);
  });
  
  const totalValor = carrito.reduce((acc, el) => acc + el.precio, 0);

  let totalBuying = document.createElement("div")
  totalBuying.className = "totalBuying"
  totalBuying.innerHTML = `
  <p> El total a abonar es $ ${totalValor}</p>
  `
  modalContainer.append(totalBuying)
})