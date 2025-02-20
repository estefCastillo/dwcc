const $d=document,
    $category=$d.querySelector('#category')



const categories=[],
        products=[],
        conditions=[]

let urlCategories="http://localhost:3000/categories"        
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

function renderCategories(categories){
    $category.innerHTML=categories.map(el=>`
        <option value="${el.id}">${el.name}</option>
    `).join('')
}