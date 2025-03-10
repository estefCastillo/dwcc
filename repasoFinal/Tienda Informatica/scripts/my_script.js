const $d=document,
$productos=$d.querySelector('.productos'),
$carrito=$d.querySelector('.cart-productos'),
$productosCarrito=$d.querySelector('.card-items'),
$total=$d.querySelector('.price-total'),
$imgcart=$d.querySelector('.cart')


const urlProductos = "http://localhost:3000/productos";
const urlCarrito = "http://localhost:3000/carrito";

const carrito = [],
   productos = [];

function ajax(options) {
   const { url, method, fSuccess, fError, data } = options;
   fetch(url, {
      method: method || "GET",
      headers: {
         "Content-type": "application/json charset=utf-8",
      },
      body: JSON.stringify(data),
   })
      .then((resp) => (resp.ok ? resp.json() : Promise.reject(resp)))
      .then((json) => fSuccess(json))
      .then((error) => fError(error));
}

function renderProductos(productos){
    $productos.innerHTML=productos.map(el=>
    `<div class="producto">
      <div>
        <img src="${el.img}" alt="${el.nombre}" />
        <p>
          <span>${el.precio}</span>€
        </p>
      </div>
      <p class="title">${el.nombre}</p>
      <a href="#" class="btn-add-cart" data-id="${el.id}">Comprar !</a>
    </div>`
    ).join('')
}
function renderCarrito(carrito) {
    let total=0
    $productosCarrito.innerHTML=carrito.map(el=>{
    let product=productos.find(p=>p.id==el.productoId)
    total+=product.precio*el.cantidad
    return `
    <div class="item">
      <img src="${product.img}" alt="${product.nombre}" />
      <div class="item-content">
        <h5>${product.nombre}</h5>
        <h5 class="cart-price">${product.precio.toFixed(2)}€</h5>
        <h6>
          Cantidad:${el.cantidad}</span>
        </h6>
      </div>
      <span class="delete-product" data-id="${el.id}">X</span>
    </div>`
    }).join('')
    $total.textContent=parseFloat(total).toFixed(2)
}

function getData() {
   Promise.all([fetch(urlProductos), fetch(urlCarrito)])
   .then((resp) =>
      Promise.all(resp.map((r) => (r.ok ? r.json() : Promise.reject(resp))))
   )
   .then(([prods,cart])=>{
    productos.splice(0,productos.length,...prods)
    carrito.splice(0,carrito.length,...cart)
    renderProductos(productos)
    renderCarrito(carrito)
   })
   .catch(erros=>console.log(erros)
   )
}

function addCarrito(productoId){
ajax({
    url:urlCarrito,
    method:"POST",
    fSuccess:json=>{
        carrito.push(json)
        renderCarrito(carrito)
    },
    fError:error=>console.log(error),
    data:{
        cantidad:1,
        productoId
    }
})
}
function updateCarrito(prodCarrito){
ajax({
    url:`${urlCarrito}/${prodCarrito.id}`,
    method:"PATCH",
    fSuccess:json=>{
        prodCarrito.cantidad+=json.cantidad
        renderCarrito(carrito)
    },
    fError:error=>console.log(error),
    data:{
        cantidad:prodCarrito.cantidad+1
    }
    
})
}

$productos.addEventListener('click',ev=>{
    ev.preventDefault()

    if(ev.target.dataset.id){
        let productoId=ev.target.dataset.id
        let index=carrito.findIndex(el=>el.productoId==productoId)
        if(index==-1){
            addCarrito(productoId)
        }else{
            let prodCarrito=carrito.find(el=>el.productoId==productoId)
            updateCarrito(prodCarrito)
        }
    }
})

$d.addEventListener('DOMContentLoaded',getData)

$imgcart.addEventListener('mouseover',ev=>{
    $carrito.style.display="block";
})
$carrito.addEventListener('click',ev=>{
    if(ev.target.classList.contains('close-btn')){
        $carrito.style.display="none";
    }
    if(ev.target.classList.contains('delete-product')){
        if (ev.target.dataset.id) {
            console.log(ev.target.dataset.id);
            
        }
    }
})
