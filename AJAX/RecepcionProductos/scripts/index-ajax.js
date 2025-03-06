const $d = document,
   $category = $d.querySelector("#category"),
   $condition = $d.querySelector("#condition"),
   $tableBody = $d.querySelector("#tableBody");

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

function renderProductos(products){
    $tableBody.innerHTML=products.map(el=>
        let categories=categories.find(c.id==el.categoryId)
    return `
    `).join('')
}
$d.addEventListener("DOMContentLoaded", (ev) => {
   renderCategories(categories);
   renderCondiciones(conditions);
});
