
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
let contador = 0
let productos = []
let carritoCompra = []

fetch('https://fakestoreapi.com/products/')
    .then(res => {
        if (!res.ok) {
            throw new Error(`Error: ${res.status} - ${res.statusText}`);
        }
        return res.json();
    })
    .then(productos => {
        console.log(productos, 'los productos extraidos');
        productoRandom(productos);
    })
    .catch(error => {
        console.error(error);
    });


// fetch('https://fakestoreapi.com/products/')
// .then(res => res.json())
// .then(json => {
//     productos = Object.values(json)
//     console.log(productos, 'los productos extraidos')
//     productoRandom()
// })
// .catch(error => console.error(error))

const cargarPagina = () => {
    loading.classList.add('dNone')
    home.classList.remove('dNone')
}

const inicio = setTimeout(cargarPagina, 2000)

const productoRandom = (productos) => {
    const random = Math.floor(Math.random() * productos.length)
    const productRandom = productos[random]
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
    console.log(hero)
    const btnVerMas = document.querySelector('#btnVerMas')
    console.log(btnVerMas)
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

// document.addEventListener('click', (event) => {
    //     let categoria = event.target.id
    //     console.log(categoria);
// //     lista.innerHTML = ''
// //     lista.classList.remove('dNone')
// //     home.classList.add('dNone')
// //     console.log(`ver lista de productos ${categoria}`)
// //     productos.forEach((prod) => {
// //         if (prod.category == categoria) {
// //             lista.innerHTML += `
// //                 <div class="card" style="width: 18rem;">
// //                     <img src="${prod.image}" 
// //                     class="card-img-top" 
// //                     alt="...">
// //                     <div class="card-body">
// //                         <h5 class="card-title">${prod.title}</h5>
// //                         <p class="card-text">${prod.category}</p>
// //                         <button type="button" 
// //                             class="btn btn-primary" 
// //                             data-bs-toggle="modal" 
// //                             data-bs-target="#exampleModal">
// //                             ver mas
// //                         </button>
// //                     </div>
// //                 </div>
// //                 `
// //         }
// //     })
// })
// /*     mostrando la lista de cada*/

// let mujer = () => {
//     lista.innerHTML = ''
//     lista.classList.remove('dNone')
//     home.classList.add('dNone')
//     console.log('ver lista de productos')
//     productos.forEach((prod) => {
//         if (prod.category == "women's clothing") {
//             lista.innerHTML += `
//             <div class="card" style="width: 18rem;">
//                 <img src="${prod.image}" 
//                     class="card-img-top"
//                     alt="...">
//             <div class="card-body">
//                 <h5 class="card-title">${prod.title}</h5>
//                 <p class="card-text">${prod.category}</p>
//                 <button type="button" 
//                 class="btn btn-primary" 
//                 data-bs-toggle="modal" 
//                 data-bs-target="#exampleModal">
//                 ver mas
//                 </button>
//             </div>
//             </div>
//             `
//         }
//     })
// }
// let joyeria = () => {
//     lista.innerHTML = ''
//     lista.classList.remove('dNone')
//     home.classList.add('dNone')
//     console.log('ver lista de productos')
//     productos.forEach((prod) => {
//         if (prod.category == "jewelery") {
//             lista.innerHTML += `
//                 <div class="card" style="width: 18rem;">
//                     <img src="${prod.image}" 
//                     class="card-img-top" 
//                     alt="...">
//                 <div class="card-body">
//                     <h5 class="card-title">${prod.title}</h5>
//                     <p class="card-text">${prod.category}</p>
//                     <button type="button" 
//                     class="btn btn-primary" 
//                     data-bs-toggle="modal" 
//                     data-bs-target="#exampleModal">
//                     ver mas
//                     </button>
//                 </div>
//                 </div>
//                 `
//         }
//     })
// }
// let electro = () => {
//     lista.innerHTML = ''
//     lista.classList.remove('dNone')
//     home.classList.add('dNone')
//     console.log('ver lista de productos')
//     productos.forEach((prod) => {
//         if (prod.category == "electronics") {
//             lista.innerHTML += `
//                 <div class="card" style="width: 18rem;">
//                     <img src="${prod.image}" 
//                     class="card-img-top" 
//                     alt="...">
//                 <div class="card-body">
//                     <h5 class="card-title">${prod.title}</h5>
//                     <p class="card-text">${prod.category}</p>
//                     <button type="button" 
//                         class="btn btn-primary verMas" 
//                         data-bs-toggle="modal" 
//                         data-bs-target="#exampleModal">
//                         ver mas
//                     </button>
//                 </div>
//                 </div>
//                 `
//         }
//     })
// }
// /* agregando productos al carrito */
// let verCarrito = (e) => {
//     alert('iendo al acarrito')
// }
// /* boton home */
// let volverHome = () => {
//     home.classList.remove('dNone')
//     lista.classList.add('dNone')
//     productoRandom()
// }


// const productDescription = (productoRandom, index) => {
//     const { image, title, description, price } = productoRandom[index]
//     console.log('ver mas')
// }


