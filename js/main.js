const secciones = document.querySelectorAll('.seccion')
const loading = document.querySelector('.loading')
const home = document.querySelector('.home')
const hero = document.querySelector('.hero')
const lista = document.querySelector('.lista')
const carrito = document.querySelector('.carrito')
const carritoHeader = document.querySelector('#carritoHeader')
const contadorProductos = document.querySelector('.contadorProductos')
const modal = document.querySelector('.modal-content')
const categoriaProductos = document.querySelectorAll('.categoria_productos')
const contador = 0
let productos = []
let carritoCompra = []

fetch('https://fakestoreapi.com/products/')
    .then(res => res.json())
    .then(json => {
        productos = Object.values(json)
        console.log(productos, 'los productos extraidos')
        productoRandom()
    })
    .catch(error => console.error(error))

/* boton home */
const volverHome = () => {
    console.log('volviendo al inicio')
    home.classList.remove('dNone')
    lista.classList.add('dNone')
    productoRandom()
}

const cargarPagina = () => {
    loading.classList.add('dNone')
    home.classList.remove('dNone')
}

const inicio = setTimeout(cargarPagina, 2000)

const productoRandom = () => {
    const random = Math.floor(Math.random() * productos.length);
    const productRandom = productos[random];
    hero.innerHTML = `
    <div class="container">
            <div class="col-6">
                <img src=${productRandom.image} alt="">
            </div>
            <div class="col-6">
            <h1>${productRandom.title}</h1>
            <button type="button" id="btnVerMas"
            class="btn btn-warning " 
            data-bs-toggle="modal" 
            data-bs-target="#exampleModal">
                    ver mas
                </button>
            </div>
        </div>`
    const btnVerMas = document.querySelector('#btnVerMas');
    btnVerMas.addEventListener('click', () => {
        console.log('Soy un btn recien nacido')
        modal.innerHTML = '';
        modal.innerHTML += `
            <div class="modal-body">
            <button type="button" 
            class="btn-close" 
            data-bs-dismiss="modal" 
                    aria-label="Close">
                </button>    
                <img src="${productRandom.image}" alt="">
                <h5 class="modal-title" 
                    id="exampleModalLabel">
                        ${productRandom.title}
                </h5>
                <p>${productRandom.description}</p>
                <p>$ ${productRandom.price}</p>
                <button type="button" id="comprar" 
                class="btn btn-primary">
                comprar
                </button>
            </div>`
        const btnComprar = document.querySelector('#comprar')
        console.log(btnComprar)
        btnComprar.addEventListener('click', () => {
            contador++
            contadorProductos.innerHTML = contador
        })
    })
}

categoriaProductos.forEach(categoria => {
    categoria.addEventListener('click', (event) => {
        const categoriaSeleccionada = event.target.className;
            //console.log(categoriaSeleccionada)
        const productosFiltrados = productos.filter(producto => producto.category === categoriaSeleccionada)
            //console.log(productosFiltrados)
        lista.innerHTML = '';
        productosFiltrados.forEach(producto => {
            //console.log(producto)
            const productoHTML = `
                <div class="card" style="width: 18rem;">
                    <img src="${producto.image}"
                        class="card-img-top"
                        alt="${producto.title}">
                <div class="card-body">
                    <h3>${producto.title}</h3>
                    <p>${producto.price}</p>
                </div>
                <button type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal">
                    ver mas
                </button>
        </div>
        `
            lista.innerHTML += productoHTML
        })
        home.classList.add('dNone');
        lista.classList.remove('dNone');
    })
})

/* agregando productos al carrito */
let verCarrito = () => {
    alert('iendo al acarrito')
}


