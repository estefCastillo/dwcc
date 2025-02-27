const productos=[
      {
        "id": 1,
        "img": "./images/products/keyboard-1.jpg",
        "nombre": "Tempest Cataclysm Combo 3 En 1 Gaming Teclado",
        "precio": 20
      },
      {
        "id": 2,
        "img": "./images/products/keyboard-2.jpg",
        "nombre": "Newskill Suiko Ivory Teclado Mecánico Gaming Full RGB",
        "precio": 35
      },
      {
        "id": 3,
        "img": "./images/products/keyboard-3.jpg",
        "nombre": "Aukey KM-G16 Teclado Mecánico Gaming Retroiluminado",
        "precio": 15.5
      },
      {
        "id": 4,
        "img": "./images/products/keyboard-4.jpg",
        "nombre": "Razer Huntsman Elite Teclado Mecánico Gaming RGB",
        "precio": 20.2
      },
      {
        "id": 5,
        "img": "./images/products/keyboard-5.jpg",
        "nombre": "Trust GXT 856 Torac Teclado Metálico Gaming RGB",
        "precio": 19
      },
      {
        "id": 6,
        "img": "./images/products/keyboard-1.jpg",
        "nombre": "MSI Vigor GK30 Teclado Gaming RGB",
        "precio": 45
      },
      {
        "id": 7,
        "img": "./images/products/keyboard-2.jpg",
        "nombre": "Genesis Thor 300 RGB Teclado Mecánico Gaming RGB Switch Rojo",
        "precio": 23.99
      },
      {
        "id": 8,
        "img": "./images/products/keyboard-3.jpg",
        "nombre": "Mars Gaming MKXTKL Teclado Mecánico Gaming RGB",
        "precio": 50
      },
      {
        "id": 9,
        "img": "./images/products/keyboard-4.jpg",
        "nombre": "Trust GXT 881 Odyss Teclado Gaming Semi-Mecánico RGB",
        "precio": 16
      },
      {
        "id": 10,
        "img": "./images/products/keyboard-5.jpg",
        "nombre": "Krom Krusher Teclado Gaming Híbrido RGB + Ratón",
        "precio": 17.5
      },
      {
        "id": 11,
        "img": "./images/products/keyboard-1.jpg",
        "nombre": "Corsair K55 RGB PRO XT Teclado Gaming Retroiluminado Negro",
        "precio": 45
      }
]
const carrito=[
    {
      "productoId": "4",
      "cantidad": 2,
      "id": 1
    }
]
const $d=document,
$productos=$d.querySelector('.productos'),
$productosCarrito=$d.querySelector('.card-items'),
$carrito=$d.querySelector('.cart-productos'),
$cart=$d.querySelector('.cart'),
$total=$d.querySelector('.price-total')

function renderProductos(productos){
  $productos.innerHTML=productos.map(producto=>
    `  <div class="producto">
        <div>
          <img src="${producto.img}" alt="${producto.nombre}" />
          <p>
            <span>${producto.precio}</span>€
          </p>
        </div>
        <p class="title">${producto.nombre}</p>
        <a href="#" class="btn-add-cart" data-id='${producto.id}'>Comprar !</a>
      </div>
    `).join('')
}

function renderCarrito(carrito) {
  let total=0
   $productosCarrito.innerHTML=carrito.map(productosCarrito=>{
    const producto=productos.find((producto)=>producto.id==productosCarrito.id)
    total+=producto.precio*productosCarrito.cantidad;
    return `<div class="item">
         <img src="${producto.img}" alt="${producto.nombre}" />
         <div class="item-content">
           <h5>${producto.nombre}</h5>
           <h5 class="cart-price">${producto.precio}</h5>
           <h6>
             Cantidad: ${productosCarrito.cantidad}</span>
           </h6>
         </div>
         <span class="delete-product" data-id="${productosCarrito.id}">X</span>
       </div>
     `})
     $total.textContent=total
}
$d.addEventListener("DOMContentLoaded", ev => {
  renderProductos(productos);
  renderCarrito(carrito)
});

$cart.addEventListener('mouseover', ev => {
  $carrito.style.display="block";
});

$carrito.addEventListener('click',ev=>{
  ev.preventDefault();
  if(ev.target.classList.contains('close-btn')){
    $carrito.style.display="none";
  }

  if(ev.target.classList.contains("delete-product")){
    const indice=carrito.findIndex(el=>el.id==ev.target.dataset.id);
    if(indice!=-1){

      if (carrito[indice].cantidad==1) {
        carrito.splice(indice,1)
      }else{
        carrito[indice].cantidad--;
      }
    }
    renderCarrito(carrito)
  }
})

$productos.addEventListener('click',ev=>{
  ev.preventDefault();
  if(ev.target.dataset.id){
    const index=carrito.findIndex(el=>el.id==ev.target.dataset.id)
    console.log(index);
    
    if(index==-1){
      carrito.push({
        "productoId":ev.target.dataset.id,
        "cantidad":1,
        "id":carrito.length+1
      })
    }else{
      carrito[index].cantidad++;
    }
    renderCarrito(carrito)
  }
})