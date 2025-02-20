const $d=document,
$ol=$d.querySelector("#xhr")

let url="https://jsonplaceholder.typicode.com/users";

function ajaxAxios(options){
    const {url,method,fSuccess,fError,data}=options

    axios(url,{
        method:method || "GET",
        headers:{
            'Content-type':'application/json; chrset=utf-8'
        },
        body:JSON.stringify(data)
    })
    .then((resp)=>fSuccess(resp.data))
    .catch(error=>fError({
        status:error.response.status,
        statusText:error.response.statusText || "Algo fue mal !"
    }))
}

ajaxAxios({
    url,
    fSuccess:(json)=>{console.log(json)},
    fError:error=>{console.log(`Error ${error.status}:${error.statusText}`)}

})

