const $d=document,
    $productos=$d.querySelector("#lista-productos"),
    $bodycarrito=$d.querySelector("#body-carrito")
    $footerCarrito=$d.querySelector("#footer-carrito")

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


$d.addEventListener("DOMContentLoaded",ev=>{
    
    function renderProductos1(productos) {
        /* $productos.innerHTML=productos.map(producto=>`
            <div class="col-12 col-sm-4 col-md-3 col-lg-2 mb-3 d-flex justify-content-center">
                    <div class="card">
                        <img src="${producto.thumbnailUrl}" class="card-img-top" alt="item-producto">
                        <div class="card-body">
                            <h5 class="card-title">${producto.title}</h5>
                            <p class="card-text">${producto.precio} &euro;</p>
                            <a href="#" class="btn btn-dark" data-producto-id="${producto.id}">Comprar</a>
                        </div>
                    </div>
                </div>`).join('') */
        $productos.innerHTML=productos.reduce((anterior,actual)=>anterior+`
        <div class="col-12 col-sm-4 col-md-3 col-lg-2 mb-3 d-flex justify-content-center">
                    <div class="card">
                        <img src="${actual.thumbnailUrl}" class="card-img-top" alt="item-producto">
                        <div class="card-body">
                            <h5 class="card-title">${actual.title}</h5>
                            <p class="card-text">${actual.precio}</p>
                            <a href="#" class="btn btn-dark" data-producto-id="${actual.id}">Comprar</a>
                        </div>
                    </div>
                </div>`,'')
    }
    
    function renderProductos2(productos) {
        const $tProducto=$d.querySelector("#template-producto").content
        const $fragmento=$d.createDocumentFragment()
    
        productos.forEach(producto => {
            const $clon=$tProducto.cloneNode(true)
            const $img=$clon.querySelector("img")
            /* $img.setAttribute(src,producto.thumbnailUrl) */
            $img.src=producto.thumbnailUrl
            const $title=$clon.querySelector(".card-title")
            $title.innerHTML=producto.title
            const $precio=$clon.querySelector("p")
            $precio.innerHTML=`${producto.precio} &euro;`
            $btn=$clon.querySelector("a")
            $btn.dataset.productoId=producto.id
    
            $fragmento.appendChild($clon)
        });
        $productos.appendChild($fragmento)
    }
    
    function renderCarrito(carrito) {
        sessionStorage.setItem("carrito",JSON.stringify(carrito));
        $bodycarrito.innerHTML=carrito.map((productocarrito,i)=>`
        <tr>
        <td>${i+1}</td>
        <td>${productos.find(producto=>producto.id==productocarrito.id).title}</td>
        <td>${productocarrito.cantidad}</td>
        <td>
        <button class="btn btn-info btn-sm" data-id="${productocarrito.id}">
        +
        </button>
        <button class="btn btn-danger btn-sm" data-id="${productocarrito.id}">
        -
        </button>
        </td>
        <td>${productos.find(producto=>producto.id==productocarrito.id).precio * productocarrito.cantidad} &euro;</td>
        </tr>`).join('');
    
        renderfooter(carrito);
    }
    
    function renderfooter(carrito) {
        let nProductosTotales=carrito.reduce((anterior,actual)=>anterior+actual.cantidad,0);
        let precioTotal=carrito.reduce((anteior,actual)=>anteior+actual.cantidad*productos.find(producto=>producto.id==actual.id).precio,0)
        if (carrito.length) {
            $footerCarrito.innerHTML=
            `<th scope="row" colspan="2">Total productos</th>
                <td>${nProductosTotales}</td>
                <td>
                    <button class="btn btn-danger btn-sm" id="vaciar-carrito">
                        Vaciar Carrito
                    </button>
                </td>
                <td class="font-weight-bold"><span>${precioTotal}</span>&euro;</td>
                `       
        }else{
            $footerCarrito.innerHTML=
            `<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`;
        }
    
    }
    
    $bodycarrito.addEventListener("click", (ev) => {
        ev.preventDefault();
        if (ev.target.dataset.id) {
            if (ev.target.classList.contains("btn-info")) {
    
                carrito.find(el => el.id == ev.target.dataset.id).cantidad++;
            } else {
                let producto = carrito.find(el => el.id == ev.target.dataset.id);
                producto.cantidad--;
                
                // Si la cantidad llega a 0, eliminamos el producto
                if (producto.cantidad === 0) {
                    carrito.splice(carrito.findIndex(el => el.id == ev.target.dataset.id), 1);
                }
            }
            renderCarrito(carrito);
        }
    });
    
    
    $footerCarrito.addEventListener("click",ev=>{
        ev.preventDefault();
        if(ev.target.id==="vaciar-carrito"){
            carrito.length=0;
            $footerCarrito.innerHTML=
            `<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`;
            renderCarrito(carrito);
        }
        
    })
    
    $productos.addEventListener("click",ev=>{
        ev.preventDefault()
        if(ev.target.dataset.productoId){
            //console.log(`Has comprado el producto ${ev.target.dataset.productoId}`)
            const producto=carrito.find(producto=>producto.id==ev.target.dataset.productoId)
            if(producto){
                producto.cantidad++
            }else{
                const producto={
                    id:ev.target.dataset.productoId,
                    cantidad:1
                }
                carrito.push(producto)
            }
            renderCarrito(carrito)
            renderfooter(carrito);
        }
    })
    const carrito=JSON.parse(sessionStorage.getItem("carrito")) || []
    renderProductos1(productos);
    renderCarrito(carrito);
})
