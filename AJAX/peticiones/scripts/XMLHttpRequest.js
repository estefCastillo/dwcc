const $d=document,
        $ol=$d.querySelector("#xhr")

const xhr= new XMLHttpRequest()

xhr.addEventListener("readystatechange",ev=>{
    if(ev.target.readyState!=4) return;
    if (ev.target.status>=200 && ev.target.status<300) {
        console.log("Exito !");
        console.log(ev.target.responseText);
        const usuariosJson=ev.target.responseText;
        $ol.innerHTML=JSON.parse(usuariosJson).map(usuario=>`
            <li>${usuario.name}-${usuario.address.city}</li>
            `).join('')
    }
}
)


xhr.open("GET","https://jsonplaceholder.typicode.com/users")
xhr.send()