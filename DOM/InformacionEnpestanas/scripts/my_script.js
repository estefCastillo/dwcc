const $d=document,
    $container=$d.querySelector('.btn-container'),
    $contenido=$d.querySelector(".page-content")

$container.addEventListener('click',ev=>{
    let id=ev.target.dataset.id

    $container.querySelector(".active").classList.remove("active")
    ev.target.classList.add("active")

    $contenido.querySelector(".active").classList.remove("active")
    $contenido.querySelector(`#${id}`).classList.add("active")
})