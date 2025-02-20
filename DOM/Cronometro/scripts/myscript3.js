const $d=document,
    $hours=$d.querySelector(".horas"),
    $minutes=$d.querySelector(".minutos"),
    $seconds=$d.querySelector(".segundos"),
    $reset=$d.querySelector("#reset"),
    $start=$d.querySelector("#start")
;

let scds=0;
let interval=null;

function updateTime(){
    let hour= Math.floor(scds/3600).toString().padStart(2,"0");
    let min= Math.floor((scds%3600)/60).toString().padStart(2,"0");
    let seg= (scds%60).toString().padStart(2,"0");

    $hours.innerHTML=`${hour}`;
    $minutes.innerHTML = `${min}`;
    $seconds.innerHTML = `${seg}`;
}


$start.addEventListener("click",ev=>{
    ev.preventDefault();
    if (!interval) {
       interval=setInterval(() => {scds++;updateTime();}, 1000);
       $start.innerHTML=`Pause`;
    }else{
    clearInterval(interval)
    interval=null;
    $start.innerHTML=`Start`;
    }
});


$reset.addEventListener("click",ev=>{
    ev.preventDefault();
    clearInterval(interval)
    interval=null;
    scds=0;
    updateTime();
    $start.innerHTML=`Start`;
})

