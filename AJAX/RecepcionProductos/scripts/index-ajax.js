const $d = document,
  $category = $d.querySelector("#category"),
  $condition = $d.querySelector("#condition"),
  $tableBody = $d.querySelector("#tableBody"),
  $search = $d.querySelector("#search"),
  $tableFoot = $d.querySelector("#tableFoot"),
  $form = $d.querySelector("form");

let categories = [
    {
      name: "Teléfono",
      id: "1",
    },
    {
      name: "TV",
      id: "2",
    },
    {
      name: "Portátil",
      id: "3",
    },
  ],
  products = [
    {
      name: "Samsung",
      price: "200",
      categoryId: "1",
      conditionId: "1",
      id: 1,
    },
    {
      name: "LG",
      price: "300",
      categoryId: "2",
      conditionId: "2",
      id: 2,
    },
    {
      name: "Motorola",
      price: "350",
      categoryId: "3",
      conditionId: "3",
      id: 3,
    },
  ],
  conditions = [
    {
      name: "Excelente",
      id: "1",
    },
    {
      name: "Bueno",
      id: "2",
    },
    {
      name: "Malo",
      id: "3",
    },
  ];

function renderCategories(categories) {
  $category.innerHTML = categories
    .map(
      (el) => `
        <option value="${el.id}">${el.name}</option>
    `
    )
    .join("");
}

function renderCondiciones(conditions) {
  $condition.innerHTML = conditions
    .map(
      (el) => `
        <option class="bg-success text-white" value="${el.id}">
            ${el.name}
          </option>
        `
    )
    .join("");
}

function renderProductos(products) {
  $tableBody.innerHTML = products
    .map((el) => {
      let category = categories.find((c) => c.id == el.categoryId).name;
      let estado = conditions.find((c) => c.id == el.conditionId).name;
      return `
            <tr>
              <td>${el.id}</td>
              <td>${el.name}</td>
              <td>${el.price}</td>
              <td>${category}</td>
              <td>${estado}</td>
              <td>
              <i class="fa-solid fa-trash" data-id="${el.id}"></i> 
               <i class="fa-solid fa-pencil" data-id="${el.id}"></i>
            </td>
            </tr>
    `;
    })
    .join("");
  renderFooter();
}
function renderFooter() {
  if (products.length != 0) {
    $tableFoot.innerHTML = `
      <tr>
                   <td colspan="6">
                       <button
                           id="btnVaciar"
                           class="btn mb-1 mb-sm-0 btn-outline-danger"
                           type="button"
                       >
                           Borrar Todos Los Productos
                       </button>
                   </td>
               </tr>
      `;
  } else {
    $tableFoot.innerHTML = `
               <tr>
                <td colspan="6">
                 <h4 class="text-white bg-danger">No hay productos</h4>
                </td>
            </tr>`;
  }
}
$d.addEventListener("DOMContentLoaded", (ev) => {
  renderCategories(categories);
  renderCondiciones(conditions);
  renderProductos(products);
});
$search.addEventListener("input", (ev) => {
  ev.preventDefault();
  const busqueda = ev.target.value.toLowerCase();
  const resultados = products.filter((el) =>
    el.name.toLowerCase().includes(busqueda)
  );
  renderProductos(resultados);
});
$tableBody.addEventListener("click", (ev) => {
  ev.preventDefault();
  if (ev.target.classList.contains("fa-trash")) {
    let index = products.findIndex((el) => el.id == ev.target.dataset.id);
    products.splice(index, 1);
    renderProductos(products);
  }
  if (ev.target.classList.contains("fa-pencil")) {
    console.log(ev.target);
  }
});

$tableFoot.addEventListener("click", (ev) => {
  if (ev.target.id == "btnVaciar") {
    products.length = 0;
    renderProductos(products);
  }
});

$form.addEventListener("submit", (ev) => {
  ev.preventDefault();
});
