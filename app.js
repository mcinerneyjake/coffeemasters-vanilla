import Store from './services/Store.js';
import API from './services/API.js';
import Router from './services/Router.js';
import { loadData } from './services/Menu.js';

// Link my Web Components
import { DetailsPage } from './components/DetailsPage.js';
import { MenuPage } from './components/MenuPage.js';
import { OrderPage } from './components/OrderPage.js';

window.app = {};
app.store = Store;
app.router = Router;

// It's better to wait for the event for manipulation
window.addEventListener("DOMContentLoaded", async () => {
  loadData();
  app.router.init();
});
