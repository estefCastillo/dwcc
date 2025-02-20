const $d = document,
   //$forms=$d.forms[0]
   $form = $d.querySelector("form"),
   $textArea = $d.querySelector("#textArea"),
   $comments = $d.querySelector("#comentarios"),
   $template = $d.querySelector("#template-comentario").content,
   $commentCount=$d.querySelector("#commentCount"),
   [$addComment,$delComment,$insertComment]=$d.getElementsByName("nodeAction");

const comments = [];
/*let nComentarios=1;*/

/* $form.addEventListener("submit", (ev) => {
//     ev.preventDefault();

//     if($textArea.value.length){
//     const $article=$d.createElement("article");
    
//     const $h4=$d.createElement("h4");
//     const $cabecera=$d.createTextNode(`Comentario ${nComentarios}`);
//     $h4.appendChild($cabecera);

//     const $p=$d.createElement("p");
//     const $texto=$d.createTextNode($textArea.value);
//     $p.appendChild($texto);

//     $article.append($h4,$p)

//     $comments.appendChild($article);

//         nComentarios++;
//         $form.reset();
//         $textArea.focus();
//     }else{
//         alert("Hay que escribir algo");
//     }
// });
*/

/* $form.addEventListener("submit",(ev)=>{
//     ev.preventDefault();

//     const $comentario=$template.cloneNode(true);

//     $comentario.querySelector("h4").innerHTML=`Comenatrio ${nComentarios}`;
//     $comentario.querySelector("p").textContent=$textArea.value;

//     $comments.appendChild($comentario);
//     $form.reset();
//     $textArea.focus();
//     nComentarios++;
// })
*/

/* $form.addEventListener("submit",(ev)=>{
//     ev.preventDefault();

// $comments.innerHTML+=`
// <article>
// <h4>Comentario ${nComentarios}</h4>
// <p>${$textArea.value}</p>
// </article>`;

//     $form.reset();
//     $textArea.focus();
//     nComentarios++;
// })*/

/*function renderComments(comments){
//     $comments.innerHTML="";
    
//     const $fragmento=$d.createDocumentFragment()
//     comments.forEach((comment,i)=> {
//         const $comentario=$template.cloneNode(true);
//         $comentario.querySelector("h4").innerHTML=`Comenatrio ${i+1}`;
//         $comentario.querySelector("p").textContent=comment.texto;
//         $fragmento.appendChild($comentario);
//     });
//     $comments.appendChild($fragmento)

//     $form.reset();
//     $textArea.focus();
// }*/

function renderComments(comments) {
   // $comments.innerHTML=comments.map((coment,i)=>`
   //     <article>
   //         <h4>Comentario ${i+1}</h4>
   //         <p>${coment.texto}/p>
   //     </article>`).join('');

   $comments.innerHTML=comments.reduce(
      (anterior, actual, i) =>anterior +`
    <article data-id=${actual.id}>
    <h4 ${actual.selected?"class='seleccionado'":''}>Comentario ${i + 1}</h4>
     <p ${actual.selected?"class='seleccionado'":''}>${actual.texto}</p>
     </article>`,'');

     $commentCount.innerHTML=comments.map((comment,i)=>`
      <option value="${i}">
      ${i+1}
      </option>`).join('')

   $form.reset();
   $textArea.focus();
}

$form.addEventListener("submit", (ev) => {
   ev.preventDefault();

if ($addComment.checked) {
   
   if ($textArea.value.length) {
      const comment = {
         id: new Date().getTime(),
         selected:false,
         texto: $textArea.value
      };
      comments.push(comment);
      
   }
}

if ($delComment.checked) {
   if (comments.length) {
      comments.splice($commentCount.value,1);
   }
}

if ($insertComment.checked) {
   if ($textArea.value.length) {
      const comment={
         id:new Date().getTime(),
         texto:$textArea.value
      }
      comments.splice($commentCount.value,0,comment);
   }
}


   renderComments(comments);
});

$comments.addEventListener("click",ev=>{
   let target=ev.target

   while (!target.dataset.id) {
      target=target.parentElement
   }

   const comment=comments.find(el=>el.id==target.dataset.id)
   comment.selected=!comment.selected
   renderComments(comments)
})

$d.addEventListener("keyup",ev=>{
   if(ev.key=="Delete"){
      const selected=comments.filter(el=>el.selected)

      selected.forEach(el=>comments.splice(comments.findIndex(comment=>comment.id==el.id),1))
      renderComments(comments)

   }
})