const $d=document,
      $listaProductos=$d.querySelector("#lista-productos"),
      $bodyCarrito=$d.querySelector("#body-carrito"),
      $footerCarrito=$d.querySelector("#footer-carrito")


let urlProductos="http://localhost:3000/productos"
let urlCarritos="http://localhost:3000/carritos"

const productos=[],
      carrito=[]

function ajax(options) {
    const {url,method,fExito,fError,data}=options

    fetch(url,{
        method:method||"GET",
        headers:{
            "Content-type":"application/json; charset=utf-8"
        },
        body:JSON.stringify(data)
    })
    .then(resp=>resp.ok?resp.json():Promise.reject(resp))
    .then(json=>fExito(json))
    .catch(error=>fError(error))
}

function renderProductos(productos) {
    $listaProductos.innerHTML=productos.reduce((anterior,actual)=>anterior+`<div class="col-12 col-sm-4 col-md-3 col-lg-2 mb-3 d-flex justify-content-center">
            <div class="card">
                    <img src="${actual.thumbnailUrl}" class="card-img-top" alt="item-producto">
                    <div class="card-body">
                        <h5 class="card-title">${actual.title}</h5>
                        <p class="card-text">${actual.precio}</p>
                        <a href="#" class="btn btn-dark" data-id="${actual.id}">Comprar</a>
                    </div>
                </div>
            </div>
    `,'')
}

function renderCarrito(carrito,productos) {
    let total=0
    $bodyCarrito.innerHTML=carrito.reduce((anterior,actual,i)=>{
        const producto=productos.find(el=>actual.productoId==el.id)
        total+=actual.cantidad*producto.precio
        return anterior+`
        <tr>
              <td>${i+1}</td>
              <td>${producto.title}</td>
              <td>${actual.cantidad}</td>
              <td>
                  <button class="btn btn-info btn-sm" data-id="${actual.id}">
                      +
                  </button>
                  <button class="btn btn-danger btn-sm" data-id="${actual.id}">
                      -
                  </button>
              </td>
              <td>${actual.cantidad*producto.precio}</td>
            </tr>`
    },'')
    renderFooterCarrito(carrito,total)
}

function renderFooterCarrito(carrito,total) {
    if(carrito.length){
        $footerCarrito.innerHTML=`
        <th scope="row" colspan="2">Total productos</th>
            <td>${carrito.reduce((anterior,actual)=>anterior+actual.cantidad,0)}</td>
            <td>
                <button class="btn btn-danger btn-sm" id="vaciar-carrito" data-id="${carrito.id}">
                    Vaciar Carrito
                </button>
            </td>
            <td class="font-weight-bold"><span>${total}</span>&euro;</td>`

        }else{
        $footerCarrito.innerHTML=`<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`
    }
}

$footerCarrito.addEventListener("click",ev=>{
    ev.preventDefault()
    console.log('HEY');
    
    if(ev.target.id=="vaciar-carrito"){
             
        Promise.all(carrito.map(el=>fetch(`${urlCarritos}/${el.id}`,{method:"DELETE"})))
        .then(resps=>Promise.all(resps.map(resp=>resp.ok?resp.json():Promise.reject(resp))))
        .then(jsons=>{
            carrito.splice(0,carrito.length)
            renderCarrito(carrito,productos)
        })
        .catch(errors=>console.log(errors))
        
    }
})
function getData() {
    Promise.all([fetch(urlProductos),fetch(urlCarritos)])
    .then(resps=>Promise.all(resps.map(resp=>resp.ok?resp.json():Promise.reject(resp))))
    .then(([prods,cart])=>{
        //console.log(prods,cart)
        productos.splice(0,productos.length,...prods)
        carrito.splice(0,carrito.length,...cart)
        renderProductos(productos)
        renderCarrito(carrito,productos)
    })
    .catch(errors=>console.log(errors))
}

function addCarrito(productoId) {
    ajax({
        url:urlCarritos,
        method:"POST",
        fExito:json=>{
            carrito.push(json)
            renderCarrito(carrito,productos)
        },
        fError:error=>console.log(error),
        data:{
            cantidad:1,
            productoId
        }
    })
}
function deleteCarrito(id){
    ajax({
        url:`${urlCarritos}/${id}`,
        method:"DELETE",
        fExito:json=>{
            carrito.splice(carrito.findIndex(el=>el.id==id),1)
            renderCarrito(carrito,productos)
        },
        fError:error=>console.log(error)
        
    })
}
function updateCarrito(productoCarrito,cantidad) {
        ajax({
            url:`${urlCarritos}/${productoCarrito.id}`,
            method: "PATCH",
            fExito:json=>{
                productoCarrito.cantidad=json.cantidad
                if(productoCarrito.cantidad==0){
                    deleteCarrito(productoCarrito.id);
                }else{
                    renderCarrito(carrito,productos)
                }
            },
            fError:error=>console.log(error),
            data:{
                cantidad:productoCarrito.cantidad+cantidad
            }
        })
}
$bodyCarrito.addEventListener('click',ev=>{
    ev.preventDefault();
    let id=ev.target.dataset.id
    const productoCarrito=carrito.find(el=>el.id==id)

    if (ev.target.classList.contains('btn-info')) {
      //Incrementar cantidad +1
      updateCarrito(productoCarrito,1)
    }else{
        //Decrementar cantidad -1
        updateCarrito(productoCarrito,-1)
    }
})

$listaProductos.addEventListener("click",ev=>{
    ev.preventDefault()
    let id=ev.target.dataset.id
    if(id){
        let productoCarrito=carrito.find(producto=>producto.productoId==id)
        if(productoCarrito){
            updateCarrito(productoCarrito,1)
            //Incrementar
        }else{
            //añadir producto
            addCarrito(id)
        }
    }
})


$d.addEventListener("DOMContentLoaded",getData)