import Store from './services/Store.js';
import Router from './services/Router.js';
import { loadData } from './services/Menu.js';

import { DetailsPage } from './components/DetailsPage.js';
import { MenuPage } from './components/MenuPage.js';
import { OrderPage } from './components/OrderPage.js';
import CartItem from './components/CartItem.js';
import ProductItem from './components/ProductItem.js';

window.app = {};
app.store = Store;
app.router = Router;

// Link my Web Components
customElements.define("details-page", DetailsPage);
customElements.define("menu-page", MenuPage);
customElements.define("order-page", OrderPage);
customElements.define("cart-item", CartItem);
customElements.define("product-item", ProductItem);

// It's better to wait for the event for manipulation
window.addEventListener("DOMContentLoaded", async () => {
  loadData();
  app.router.init();
});

window.addEventListener("appCartChange", event => {
  const badge = document.getElementById("badge");
  const qty = app.store.cart.reduce((acc, item) => acc + item.quantity, 0);
  badge.textContent = qty;
  badge.hidden = qty == 0;
});
