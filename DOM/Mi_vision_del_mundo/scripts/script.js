const datos = [
   {
      id: 1,
      url: "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      titulo: "Explorar el Mundo",
   },
   {
      id: 2,
      url: "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      titulo: "Bosques Salvajes",
   },
   {
      id: 3,
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
      titulo: "Playas Soleadas",
   },
   {
      id: 4,
      url: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
      titulo: "La Ciudad en Invierno",
   },
   {
      id: 5,
      url: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      titulo: "Montañas y Nubes",
   },
];

const $d = document
// 1era forma
// $d.addEventListener("DOMContentLoaded",ev => {
//    const $paneles = $d.querySelectorAll(".panel")

//     $paneles.forEach(panel=>
//         panel.addEventListener("click",ev => {
//            if (!ev.target.classList.contains("active")) {
//               $panelActivo = $d.querySelector(".active")
//               $panelActivo.classList.remove("active")
//               ev.target.classList.add("active")
//            }
     
//         })

//     )

// })


// 2da forma
// $d.addEventListener("DOMContentLoaded",ev => {
//     const $container = $d.querySelector(".container")
 
//     $container.addEventListener("click",ev=>{
//         if(ev.target.classList.contains("panel")){
//             if (!ev.target.classList.contains("active")) {
//                 const $panelActivo = $d.querySelector(".active")
//                 $panelActivo.classList.remove("active")
//                   ev.target.classList.add("active")
//             }
//         }
//     })
 
//  })
 
// 3era forma 

 $d.addEventListener("DOMContentLoaded",ev => {
    const $container = $d.querySelector(".container")

    $container.innerHTML=datos.reduce((anterior,actual)=>anterior+`
        <div class="panel" style="background-image: url('${actual.url}');">
          <h3>${actual.titulo}</h3>
        </div>
    `,'')

    $container.querySelector(".panel").classList.add("active")

    $container.addEventListener("click",ev=>{
        if(ev.target.classList.contains("panel")){
            if (!ev.target.classList.contains("active")) {
                const $panelActivo = $d.querySelector(".active")
                $panelActivo.classList.remove("active")
                  ev.target.classList.add("active")
            }
        }
    })
 
 })
 

