
const secciones = document.querySelectorAll('.seccion')
const loading = document.querySelector('.loading')
const home = document.querySelector('.home')
const hero = document.querySelector('.hero')
const lista = document.querySelector('.lista')
const carrito = document.querySelector('.carrito')
const carritoHeader = document.querySelector('#carritoHeader')
const contadorProductos = document.querySelector('.contadorProductos')
const modal = document.querySelector('.modal-content')
const btn = document.querySelector('.btn')
const btnPrimary = document.querySelector('.btn-primary')
const btnComprar = document.querySelector('#comprar')
let contador = 0
let productos = []
let carritoCompra = []


fetch('https://fakestoreapi.com/products/')
    .then(res => res.json())
    .then(json => {
        productos = Object.values(json)
        console.log(productos, 'los productos extraidos')
        inicio
        productoRandom()
    })

    const cargarPagina = ()=>{
        loading.classList.add('dNone')
        home.classList.remove('dNone')
    /* poner todo en dnone y cuando termine volver a ver */
    }
    const inicio = setTimeout (cargarPagina, 2000)
    
/* producto random en el hero */
const productoRandom = () => {
    console.log('poniendo un prod rndm en el hero')
    let productRandom = []
    random = Math.floor(Math.random() * productos.length)
    productRandom.push(productos[random])
    hero.innerHTML = `
    <div class="container">
            <div class="col-6">
                <img src=${productRandom[0].image} alt="">
            </div>
            <div class="col-6">
                <h1>${productRandom[0].title}</h1>
                <button type="button" 
                    class="btn btn-primary" 
                    data-bs-toggle="modal" 
                    data-bs-target="#exampleModal">
                    ver mas
                </button>
            </div>
        </div>`
}
btn.addEventListener('click', () => {
    console.log('boton ver mas')
})
/*     mostrando la lista de cada*/
let hombre = () => {
    lista.innerHTML = ''
    lista.classList.remove('dNone')
    home.classList.add('dNone')
    console.log('ver lista de productos hombre')
    productos.forEach((prod) => {
        if (prod.category == "men's clothing") {
            lista.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${prod.image}" 
                class="card-img-top" 
                alt="...">
            <div class="card-body">
                <h5 class="card-title">${prod.title}</h5>
                <p class="card-text">${prod.category}</p>
                <button type="button" 
                    class="btn btn-primary" 
                    data-bs-toggle="modal" 
                    data-bs-target="#exampleModal">
                    ver mas
                </button>
            </div
            `
        }
    })
}
let mujer = () => {
    lista.innerHTML = ''
    lista.classList.remove('dNone')
    home.classList.add('dNone')
    console.log('ver lista de productos')
    productos.forEach((prod) => {
        if (prod.category == "women's clothing") {
            lista.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${prod.image}" 
                    class="card-img-top"
                    alt="...">
            <div class="card-body">
                <h5 class="card-title">${prod.title}</h5>
                <p class="card-text">${prod.category}</p>
                <button type="button" 
                class="btn btn-primary" 
                data-bs-toggle="modal" 
                data-bs-target="#exampleModal">
                ver mas
                </button>
            </div
            `
        }
    })
}
let joyeria = () => {
    lista.innerHTML = ''
    lista.classList.remove('dNone')
    home.classList.add('dNone')
    console.log('ver lista de productos')
    productos.forEach((prod) => {
        if (prod.category == "jewelery") {
            lista.innerHTML += `
                <div class="card" style="width: 18rem;">
                    <img src="${prod.image}" 
                    class="card-img-top" 
                    alt="...">
                <div class="card-body">
                    <h5 class="card-title">${prod.title}</h5>
                    <p class="card-text">${prod.category}</p>
                    <button type="button" 
                    class="btn btn-primary" 
                    data-bs-toggle="modal" 
                    data-bs-target="#exampleModal">
                    ver mas
                    </button>
                </div
                `
        }
    })
}
let electro = () => {
    lista.innerHTML = ''
    lista.classList.remove('dNone')
    home.classList.add('dNone')
    console.log('ver lista de productos')
    productos.forEach((prod) => {
        if (prod.category == "electronics") {
            lista.innerHTML += `
                <div class="card" style="width: 18rem;">
                    <img src="${prod.image}" 
                    class="card-img-top" 
                    alt="...">
                <div class="card-body">
                    <h5 class="card-title">${prod.title}</h5>
                    <p class="card-text">${prod.category}</p>
                    <button type="button" 
                        class="btn btn-primary" 
                        data-bs-toggle="modal" 
                        data-bs-target="#exampleModal"
                        ver mas
                    </button>
                </div
                `
        }
    })
}
/* agregando productos al carrito */
let verCarrito = (e) => {
    alert('iendo al acarrito')
}
/* boton home */
let volverHome = () => {
    home.classList.remove('dNone')
    lista.classList.add('dNone')
    productoRandom()
}

btnComprar.addEventListener('click', () => {
    contador++
    contadorProductos.innerHTML = contador
})

btnPrimary.addEventListener('click', () => {
    alert('ver producto')
    /* modal.innerHTML = `
    <div class="modal-body">
        <h5 class="modal-title" 
            id="exampleModalLabel">
            titulo del producto
        </h5>
        <button type="button" 
            class="btn-close" 
            data-bs-dismiss="modal" 
            aria-label="Close">
        </button>
        <img src="img/carro-de-la-compra.png" alt="">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A beatae eos hic, sequi, non totam
            dolor architecto suscipit,
            asperiores aspernatur amet sint debitis praesentium maxime eligendi alias. Accusamus,
            eveniet ad!
        </p>
    </div> 
    ` */
})