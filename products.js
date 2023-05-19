const catalogo = [
    {id: 1, nombre: "El señor de los anillos", precio: 1000, imagen: "https://gamerstyle.com.mx/wp-content/uploads/2023/02/The-Lord-of-the-Rings-1.jpg"},
    {id: 2, nombre: "Harry Potter", precio: 1000, imagen: "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2021/01/harry-potter-1.jpg?fit=2500%2C1576&quality=50&strip=all&ssl=1"},
    {id: 3, nombre: "Star wars", precio: 1000, imagen: "https://i.blogs.es/1da08b/1366_2000-9-/1366_2000.jpeg"},
    {id: 4, nombre: "Breaking bad", precio: 1500, imagen: "https://okdiario.com/img/series/2015/11/Breaking-Bad.jpg"}, 
    {id: 5, nombre: "Game of thrones", precio: 1500, imagen: "https://t.ctcdn.com.br/wQkKKDBe1HpwEmbJ7ADMfLznS_Q=/990x557/smart/i350335.jpeg"},
    {id: 6, nombre: "Prison break", precio: 1500, imagen: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/star/6CA97D28A7739B90C589916E8B0338280CBFA7E9A3DE3304AAD40C91289B8007/scale?width=1200&aspectRatio=1.78&format=jpeg"},
    ]
    
    //Creo función constructora para agregar nuevos objetos
    
    function Opcion(id, nombre, precio, imagen)  {
      this.id = id,
      this.nombre = nombre;
      this.precio = precio;
      this.imagen = imagen;
    }
    
    let opcion_7 = new Opcion(7, 'Vikingos', 1500, "https://es.web.img3.acsta.net/pictures/20/12/04/10/04/4859166.jpg");
    let opcion_8 = new Opcion (8, "Los Simpsons", 1500, "https://www.cronista.com/files/image/524/524425/643feacd1901e.jpg");

    //Agrego las 2 opciones creadas al catálogo
    
    catalogo.push(opcion_7, opcion_8)