const $d=document,
        $libros=$d.querySelector(".columnas"),
        $tLibro=$d.querySelector("#template-libro").content,
        $result=$d.getElementById("resultado"),
        $comprar=$d.querySelector('input[type="submit"]'),
        $limpiar=$d.querySelector('input[type="reset"]')

const libros=[
    {
        titulo:"Java 17 Fundamentos prácticos de programación",
        img:"imagenes/libro1.jpg",
        precio:30
    },
    {
        titulo:"HTML Y CSS",
        img:"imagenes/libro2.jpg",
        precio:40
    },
    {
        titulo:"JavaScript la guía definitiva",
        img:"imagenes/libro3.jpg",
        precio:20
    }
]

$total=0

function renderLibros(libros) {
    $libros.innerHTML=libros.map((libro,i)=>` 
    <div class="libro" data-id="${i}">
        <strong>${libro.titulo}</strong>
        <figure>
          <img src="${libro.img}" alt="#" />
        </figure>
        <p class="linea">
          <strong>${libro.precio}</strong>
          <input type="checkbox" name="libro" value="${libro.precio}" />
        </p>
    </div>`).join('')
}

$d.addEventListener("DOMContentLoaded",ev=>{
    renderLibros(libros) 
    $libros.addEventListener("click",ev=>{
        let target=ev.target
        while (!target.dataset.id){
            target=target.parentElement
        }
        console.log(target)
        let input=target.querySelector('input')
          console.log(input)
        
        if(input){
            if(!input.checked){
                input.checked=true
                $valor=parseInt(input.value)
                //console.log($result)
                //$total+=$valor
                $total+=input.checked ? $valor : -$valor
                $result.value=$total  
            }else{
                input.checked=false
                $valor=parseInt(input.value)
                $total-=!input.checked ? $valor : +$valor
                $result.value=$total
            }
        }
    })
})


$comprar.addEventListener("click",ev=>{
    renderLibros(libros)
})

$limpiar.addEventListener("click",ev=>{
    $total=0
    renderLibros(libros)
})
