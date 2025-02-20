const $d=document,
$ol=$d.querySelector("#xhr")

let url="https://jsonplaceholder.typicode.com/users";

async function getData(url) {
    try {
        let respuesta=await fetch(url,{method:"GET"})
        if(!respuesta.ok){
            let statusText=respuesta.statusText || "Algo ha ido mal!";
            throw{
                status:respuesta.status,
                statusText
            }
            
        }
    const json=await respuesta.json()
    console.log(json);
    $ol.innerHTML=json.map(usuario=>`
        <li>${usuario.name}-${usuario.address.city}</li>
        `).join('')

    } catch (error) {
    console.log(`Error: ${error.status} ${error.statusText}`);
    }
    
}

getData(url)