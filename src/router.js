// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import AboutUsPage from './views/AboutUs.vue'; // Correct import statement
import Products from './views/Products.vue';
import ContactUsPage from './views/ContactUs.vue';
import ProductDetail from './components/ProductDetail.vue'; // Import ProductDetail component
import AddToCart from './components/AddToCart.vue'; // Import AddToCart component


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'AboutUs', component: AboutUsPage }, // Use correct component name
  { path: '/products', name: 'Products', component: Products },
  { path: '/contact', name: 'ContactUs', component: ContactUsPage },
  { path: '/product/:id', name: 'ProductDetail', component: ProductDetail, props: true }, // Dynamic route for product detail
  { path: '/add-to-cart', name: 'AddToCart', component: AddToCart } // Route for add to cart page
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

