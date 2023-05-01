const secciones = document.querySelectorAll('.seccion')
const loading = document.querySelector('.loading')
const home = document.querySelector('.home')
const hero = document.querySelector('.hero')
const lista = document.querySelector('.lista')
const carrito = document.querySelector('.carrito')
const carritoHeader = document.querySelector('#carritoHeader')
const contadorProductos = document.querySelector('.contadorProductos')
const modal = document.querySelector('.modal-body')
const categoriaProductos = document.querySelectorAll('.categoria_productos')
let contador = 0
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
            <button type="button"
            class="btn btn-warning btnVerMas " 
            data-bs-toggle="modal" 
            data-bs-target="#exampleModal">
                    ver mas
                </button>
            </div>
        </div>
        `
    modal.innerHTML = ''
    modal.innerHTML += `
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
        `
}

categoriaProductos.forEach(categoria => {
    categoria.addEventListener('click', (event) => {
        const categoriaSeleccionada = event.target.className;
        const productosFiltrados = productos.filter(producto => producto.category === categoriaSeleccionada)
        lista.innerHTML = '';
        productosFiltrados.forEach(producto => {
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
                    class="btn btn-primary ver-mas"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-id="${producto.id}">
                    ver mas
                </button>
                <button type="button" id="comprar" class="btn btn-primary">
                agregar al carrito
            </button>
        </div>`
            lista.innerHTML += productoHTML
            modal.innerHTML = ''
            const botonesVerMas = document.querySelectorAll('.ver-mas');
            botonesVerMas.forEach(boton => {
                boton.addEventListener('click', (event) => {
                    const productoId = parseInt(event.target.getAttribute('data-id'));
                    const productoSeleccionado = productos.find(producto => producto.id === productoId);
                    modal.innerHTML = `
            <img src="${productoSeleccionado.image}" alt="">
            <h5 class="modal-title" id="exampleModalLabel">${productoSeleccionado.title}</h5>
            <p>${productoSeleccionado.description}</p>
            <p>$ ${productoSeleccionado.price}</p>`;
                });
            });
        })
        home.classList.add('dNone');
        lista.classList.remove('dNone');

    })
})

let btnComprar = document.querySelector('#comprar')
btnComprar.addEventListener('click', () => {
    contador++
    contadorProductos.innerHTML = contador
    console.log(contador)
})

/* agregando productos al carrito */
let verCarrito = () => {
    alert('iendo al acarrito')
}


