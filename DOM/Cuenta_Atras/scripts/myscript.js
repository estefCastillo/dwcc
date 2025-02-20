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

    $hours.value=hour;
    $minutes.value=min;
    $seconds.value =seg;
}

function selectors() {
    for (let i = 0; i < 24; i++) {
        const option=document.createElement("option");
        option.value = i.toString().padStart(2, "0");
        option.textContent=i.toString().padStart(2,"0");
        $hours.appendChild(option);     
    }
    for (let i = 0; i < 60; i++) {
        const option=document.createElement("option");
        option.value = i.toString().padStart(2, "0");
        option.textContent=i.toString().padStart(2,"0");
        $minutes.appendChild(option);     
        $seconds.appendChild(option.cloneNode(true));
    }
}

$start.addEventListener("click",ev=>{
    if (!interval) {
       scds=(parseInt($hours.value)*3600)+(parseInt($minutes.value)*60)+parseInt($seconds.value);      
       if (scds > 0) {
        interval = setInterval(() => {
            scds--;
            updateTime();

            if (scds <= 0) {
                clearInterval(interval);
                interval = null;
                $start.innerHTML = `Start`;
            }
        }, 1000);
        $start.innerHTML = `Pause`;
    }
    }else{
     clearInterval(interval)
     interval=null;
     $start.innerHTML=`Start`;
    }
 });
 
 
 $reset.addEventListener("click",ev=>{
     clearInterval(interval)
     interval=null;
     scds=0;
     $start.innerHTML=`Start`;
     updateTime();
 })

selectors();
$hours.value = "00";
$minutes.value = "00";
$seconds.value = "00";
updateTime();
