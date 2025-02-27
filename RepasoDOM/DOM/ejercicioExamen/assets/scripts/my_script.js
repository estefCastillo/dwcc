const cursos=[
    {
        id:0,
        src:"assets/img/curso1.jpg",
        title:"HTML5, CSS3, JavaScript para Principiantes",
        teacher:"Fernanda Zahory",
        oldPrice:200,
        newPrice:15
    },
    {
        id:1,
        src:"assets/img/curso1.jpg",
        title:"Photoshop avanzado",
        teacher:"Luis Miguel",
        oldPrice:230,
        newPrice:15
    },
    {
        id:2,
        src:"assets/img/curso1.jpg",
        title:"Cocina Mexica",
        teacher:"Chef Oropeza",
        oldPrice:210,
        newPrice:15
    },
    {
        id:3,
        src:"assets/img/curso1.jpg",
        title:"Excel Experto",
        teacher:"Ruben Blades",
        oldPrice:350,
        newPrice:15
    },
    {
        id:4,
        src:"assets/img/curso1.jpg",
        title:"Giutarra facil",
        teacher:"Fernanda Zahory",
        oldPrice:150,
        newPrice:15
    },
    {
        id:5,
        src:"assets/img/curso1.jpg",
        title:"Illustrator para Diseñadores",
        teacher:"Leonardo",
        oldPrice:200,
        newPrice:15
    },
    {
        id:6,
        src:"assets/img/curso1.jpg",
        title:"AutoCAD",
        teacher:"Fernanda Zahory",
        oldPrice:400,
        newPrice:15
    },
    {
        id:7,
        src:"assets/img/curso1.jpg",
        title:"Word para principiantes",
        teacher:"Luis Antonio",
        oldPrice:200,
        newPrice:15
    },
    {
        id:8,
        src:"assets/img/curso1.jpg",
        title:"Curso de Diseño WEB",
        teacher:"Fernanda Zahory",
        oldPrice:450,
        newPrice:15
    },
    {
        id:9,
        src:"assets/img/curso1.jpg",
        title:"Aprende a Crear Macros Excel",
        teacher:"Fernanda Zahory",
        oldPrice:400,
        newPrice:15
    },
    {
        id:10,
        src:"assets/img/curso1.jpg",
        title:"Animaciones en Power Point",
        teacher:"Fernanda Zahory",
        oldPrice:150,
        newPrice:15
    },
    {
        id:11,
        src:"assets/img/curso1.jpg",
        title:"Edicion de audio profesional",
        teacher:"Fernanda Zahory",
        oldPrice:200,
        newPrice:15
    },
]
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const $d=document,
$carrito=$d.querySelector('#carrito'),
$listaCursos=$d.querySelector('.cards'),
$total = $d.querySelector(".submenu span"),
$vaciar=$d.querySelector('#vaciar-carrito'),
$buscador=$d.querySelector('#buscador')

function renderCursos(cursos){
    $listaCursos.innerHTML=cursos.map(curso=>
    `<div class="card">
        <img src="${curso.src}" class="imagen-curso u-full-width" alt="${curso.title}" />
        <div class="info-card">
          <h4>${curso.title}</h4>
          <p>${curso.teacher}</p>
          <img src="assets/img/estrellas.png" />
          <p class="precio">
           ${curso.oldPrice}<span class="u-pull-right"
              >${curso.newPrice}</span
            >
          </p>
          <a
            href="#"
            class="u-full-width button-primary button input agregar-carrito"
            data-id="${curso.id}">Agregar al Carrito</a
          >
        </div>
      </div>
    `).join('')
}
function renderCarrito(carrito){
    const $tbody=$carrito.querySelector('tbody')      
    $tbody.innerHTML=carrito.map(el=>`
      <tr>
        <td><img src="${el.src}" class="imagen-curso u-full-width" /></td>
        <td>${el.title}</td>
        <td>${el.newPrice}</td>
        <td>${el.cantidad}</td>
        <td><i class="fa fa-trash" data-id="${el.id}"></i></td>
      </tr>
    `).join('')
    let total=carrito.reduce((anterior,actual)=>anterior + 
    actual.newPrice*actual.cantidad,0)
    $total.textContent = `${total}€`;

}
$d.addEventListener('DOMContentLoaded',ev=>{
    renderCursos(cursos)
    renderCarrito(carrito)

    $listaCursos.addEventListener('click',ev=>{
        ev.preventDefault();
        if(ev.target.dataset.id){
            let index=carrito.findIndex(el=>el.id==ev.target.dataset.id)
            if(index==-1){
                let el=cursos.find(el=>el.id==ev.target.dataset.id)
                carrito.push({
                    id:el.id,
                    title: el.title,
                    src: el.src,
                    newPrice: el.newPrice,
                    cantidad: 1
                })
            }else{
                carrito[index].cantidad++
            }      
            localStorage.setItem("carrito", JSON.stringify(carrito));
            renderCarrito(carrito)   
            $vaciar.style.display='block';        
        }
    })
    $carrito.addEventListener('click',ev=>{
        ev.preventDefault();
        if(ev.target.dataset.id){
           let index=carrito.findIndex(el=>el.id==ev.target.dataset.id)
           if(carrito[index].cantidad==1){
            carrito.splice(index,1)
           }else{
               carrito[index].cantidad--;
           }
           localStorage.setItem("carrito", JSON.stringify(carrito));
           renderCarrito(carrito)
        }
        if(ev.target.classList.contains('button')){
            carrito.length=0
            localStorage.setItem("carrito", JSON.stringify(carrito));
            renderCarrito(carrito)
            $vaciar.style.display='none';          
        }
    })
    $buscador.addEventListener('input',ev=>{
        ev.preventDefault();
        const busqueda=ev.target.value.toLowerCase();
        let cursosB=cursos.filter(el=>
            el.title.toLowerCase().includes(busqueda)
        )
        renderCursos(cursosB)
    })
})

