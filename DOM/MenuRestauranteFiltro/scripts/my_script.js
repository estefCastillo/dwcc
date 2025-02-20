const items = [
   {
      id: 1,
      name: "buttermilk pancakes",
      category: "desayuno",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
   },
   {
      id: 2,
      name: "diner double",
      category: "almuerzo",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
   },
   {
      id: 3,
      name: "godzilla milkshake",
      category: "batidos",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art item-img booth before they sold out organic viral.`,
   },
   {
      id: 4,
      name: "country delight",
      category: "desayuno",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
   },
   {
      id: 5,
      name: "egg attack",
      category: "almuerzo",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
   },
   {
      id: 6,
      name: "oreo dream",
      category: "batidos",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
   },
   {
      id: 7,
      name: "bacon overflow",
      category: "desayuno",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
   },
   {
      id: 8,
      name: "american classic",
      category: "almuerzo",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
   },
   {
      id: 9,
      name: "quarantine buddy",
      category: "batidos",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
   },
];

const $d = document,
   $categorias = $d.querySelector(".btn-categorias"),
   $items = $d.querySelector(".item-list"),
   $tItem = $d.querySelector("#item").content,
   $tcategoria = $d.querySelector("#btn-categoria").content;

   
   $d.addEventListener("DOMContentLoaded", (ev) => {
     
    function renderProductos(productos) {
        $items.innerHTML = "";
        const $frag = $d.createDocumentFragment();
        productos.forEach((producto) => {
           const $clon = $tItem.cloneNode(true);
           $clon.querySelector("h4").innerHTML = producto.name;
           $clon.querySelector("img").src = producto.img;
           $clon.querySelector(".item-precio").innerHTML = producto.price;
           $clon.querySelector("p").innerHTML = producto.desc;
           $frag.appendChild($clon);
        });
        $items.appendChild($frag);
     }
     
     function renderCategorias(categorias) {
     $categorias.innerHTML=categorias.map(categorias=>`
      <button type="buttom" class="btn-categoria" data-id="#">
      ${categorias}
      </buttom>`).join('');
     }
     
     function getCategorias(productos) {
      return productos.reduce((anterior, actual) => {
        if (!anterior.includes(actual.category)) {
          anterior.push(actual.category);
        }
        return anterior; 
      }, ["todos"]);
    }
    
     
     $categorias.addEventListener("click", (ev) => {
        ev.preventDefault();
        if (ev.target.tagName == "BUTTON") {
           let categoria = ev.target.textContent.toLowerCase().trim();
     
           if (categoria == "todos") {
              renderProductos(items);
           } else {
              const productosFiltrados = items.filter(
                 (producto)=>producto.category == categoria
              );
              renderProductos(productosFiltrados);
           }
        }
     });

     const categorias=getCategorias(items);
     renderCategorias(categorias);
     renderProductos(items);
});
