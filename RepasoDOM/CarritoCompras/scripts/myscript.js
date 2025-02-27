const $d=document,
    $listaProductos=$d.querySelector('#lista-productos')

    function ajax(options){
        const {url,method,fSuccess,fError,data}=options

        fetch(url,{
            method:method || "GET",
            headers:{
                "Content-type":"application/json; charset=uth-8"
            },
            body:JSON.stringify(data)
        })
        .then
    }