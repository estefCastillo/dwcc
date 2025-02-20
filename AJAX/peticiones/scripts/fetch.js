const $d=document,
        $ol=$d.querySelector("#xhr")

let url="https://jsonplaceholder.typicode.com/users";

function ajaxFetch(options){
    const {url,method,fSuccess,fError,data}=options;

    fetch(url,{
        method:method || "GET",
        headers:{
            'Content-type':'application/json; chrset=utf-8'
        },
        body:JSON.stringify(data)
    })

    .then(respuesta=>respuesta.ok
        ?respuesta.json()
        :Promise.reject(respuesta))

    .then((resp) => fSuccess(resp))

    .catch((error) => fError({
        status: error.status,
        statusText: error.statusText || "Algo fue mal !"
    }))
    
}

ajaxFetch({
    url,
    fSuccess:(json)=>{console.log(json)},
    fError:error=>{console.log(`Error ${error.status}:${error.statusText}`)}

})

// Antes
// fetch(url,{method:"GET"})
// .then(respuesta=>respuesta.ok
//                     ?respuesta.json()
//                     :Promise.reject(respuesta))
// .then(json=>{
//     console.log(json)
//     $ol.innerHTML=json.map(usuario=>`
//             <li>${usuario.name}-${usuario.address.city}</li>
//             `).join('')
// })
// .catch(error=>{
//     let statusText=error.statusText || "Algo ha ido mal!";
//     console.log(`Error: ${error.status} ${statusText}`);
 
// })