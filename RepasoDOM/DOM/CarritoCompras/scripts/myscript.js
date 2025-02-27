const productos=[
    {
        "precio": 500,
        "id": 1,
        "title": "Café",
        "thumbnailUrl": "https://picsum.photos/id/0/600"
    },
    {
        "precio": 300,
        "id": 2,
        "title": "Pizza",
        "thumbnailUrl": "https://picsum.photos/id/10/600"
    },
    {
        "precio": 100,
        "id": 3,
        "title": "Agua",
        "thumbnailUrl": "https://picsum.photos/id/20/600"
    },
    {
        "precio": 50,
        "id": 4,
        "title": "Sandía",
        "thumbnailUrl": "https://picsum.photos/id/30/600"
    },
    {
        "precio": 10,
        "id": 5,
        "title": "Mango",
        "thumbnailUrl": "https://picsum.photos/id/40/600"
    },
    {
        "precio": 150,
        "id": 6,
        "title": "Chela",
        "thumbnailUrl": "https://picsum.photos/id/50/600"
    }
]

const $d=document,
    $productos=$d.querySelector('#lista-productos'),
    $bodyCarrito=$d.querySelector('#body-carrito'),
    $footer=$d.querySelector('#footer-carrito')

const carrito = [] || JSON.parse(sessionStorage.getItem('carrito'))

function renderProductos(productos){
    $productos.innerHTML=productos.map(el=>`
    <div class="col-12 col-sm-4 col-md-3 col-lg-2 mb-3 d-flex justify-content-center">
            <div class="card">
                <img src="${el.thumbnailUrl}" class="card-img-top" alt="item-producto">
                    <div class="card-body">
                        <h5 class="card-title">${el.title}</h5>
                        <p class="card-text">${el.precio}</p>
                        <a href="#" class="btn btn-dark" data-id="${el.id}">Comprar</a>
                    </div>
                </div>
    </div>
    `).join('')
}
function renderCarrito(carrito){
    $bodyCarrito.innerHTML=carrito.map(el=>{
        let producto=productos.find(p=>p.id==el.id)
    return `
         <tr>
              <td>${producto.id}</td>
              <td>${producto.title}</td>
              <td>${el.cantidad}</td>
              <td>
                  <button class="btn btn-info btn-sm" data-id="${producto.id}">
                      +
                  </button>
                  <button class="btn btn-danger btn-sm" data-id="${producto.id}">
                      -
                  </button>
              </td>
              <td>${producto.precio*el.cantidad}</td>
            </tr>
    
    `}).join('')
    renderFooter()
}
function renderFooter(){
    if (carrito.length) {
        let total=carrito.reduce((anterior,actual)=>anterior + productos.find(el=>el.id==actual.id)  .precio*actual.cantidad,0)      
        $footer.innerHTML=`
            <th scope="row" colspan="2">Total productos</th>
            <td>${carrito.length}</td>
            <td>
                <button class="btn btn-danger btn-sm" id="vaciar-carrito">
                    Vaciar Carrito
                </button>
            </td>
            <td class="font-weight-bold"><span>${total}</span>&euro;</td>
        `
    }else{
        $footer.innerHTML=`
        <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
        `
    }
}
$productos.addEventListener('click',ev=>{
    ev.preventDefault();
    if(ev.target.dataset.id){
        let index=carrito.findIndex(el=>el.id==ev.target.dataset.id)
        if(index==-1){
            carrito.push({
                id:ev.target.dataset.id,
                cantidad:1
            })
        }else{
            carrito[index].cantidad++;
        }
        renderCarrito(carrito)
    }
})
$bodyCarrito.addEventListener('click',ev=>{
    ev.preventDefault();
    if(ev.target.dataset.id){
        let index=carrito.findIndex(el=>el.id==ev.target.dataset.id)
        if (ev.target.classList.contains('btn-info')) {
            carrito[index].cantidad++;
        }else{
            if (carrito[index].cantidad==1) {
                carrito.splice(index,1)
            }else{
            carrito[index].cantidad--;
            }
        }
        renderCarrito(carrito)
    }
})
$footer.addEventListener('click',ev=>{
    ev.preventDefault();
    if(ev.target.classList.contains('btn-danger')){
        carrito.length=0;
        renderCarrito(carrito)
    }
})

$d.addEventListener('DOMContentLoaded',ev=>{
    renderProductos(productos)
    renderCarrito(carrito)
})