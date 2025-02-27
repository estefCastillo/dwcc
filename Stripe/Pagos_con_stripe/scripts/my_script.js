import STRIPE_KEYS from "./stripe-keys.js";
const $d = document,
   $cuadros = $d.querySelector("#cuadros");

const fetchoptions = {
   headers: {
      Authorization: `Bearer ${STRIPE_KEYS.secret}`,
   },
};
let products, prices;
Promise.all([
   fetch("https://api.stripe.com/v1/products", fetchoptions),
   fetch("https://api.stripe.com/v1/prices", fetchoptions),
])
   .then((repspuestas) =>
      Promise.all(
         repspuestas.map((resp) =>
            resp.ok ? resp.json() : Promise.reject(resp)
         )
      ).then((json) => {
         console.log(json);
         products = json[0].data;
         prices = json[1].data;
         $cuadros.innerHTML = products.reduce((anterior, actual) => {
            let price = prices.find((el) => el.id == actual.default_price);
            return (
               anterior +
               `
        <figure class="cuadro"  data-price="${price.id}">
            <img src="${actual.images[0]}" alt="${actual.name}">
            <figcaption>
            ${actual.name}
            <br/>
            ${price.unit_amount / 100} ${price.currency}
            </figcaption>
        </figure>`
            );
         }, "");
      })
   )
   .catch((error) => console.log(error));

$d.addEventListener("click", (ev) => {
   if (ev.target.matches(".cuadro *")) {
      let priceId = ev.target.parentElement.dataset.price;
      //   console.log(priceId);
      Stripe(STRIPE_KEYS.public)
         .redirectToCheckout({
            lineItems: [
               {
                  price: priceId,
                  quantity: 1,
               },
            ],
            mode: "subscription",
            successUrl:
               "http://127.0.0.1:5500/Stripe/Pagos_con_stripe/assets/stripe-success.html",
            cancelUrl: "http://127.0.0.1:5500/assets/stripe-cancel.html",
         })
         .then((resp) => {
            if (resp.error) {
               $cuadros.insertAdjacentHTML("afterend", resp.error.message);
            }
         });
   }
});
