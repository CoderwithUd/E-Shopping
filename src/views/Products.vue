<template>
  <div id="product-list-page" class="dark-mode">
    <!-- Salecopy and TextSlider components -->
    <section
      id="sale-section"
      class="sale-section"
      style="
        background-image: url('https://t3.ftcdn.net/jpg/03/20/68/66/360_F_320686681_Ur6vdYQgDC9WiijiVfxlRyQffxOgfeFz.jpg');
      "
    >
      <div class="container text-center">
        <div class="sale-content">
          <h2 class="fade-in-text">Big Sale Today!</h2>
          <p class="fade-in-text">
            Up to 50-90% off on selected items. Grab your favorites now!
          </p>
          <router-link to="/products" class="btn btn-primary fade-in-text"
            >Shop Now</router-link
          >
        </div>
      </div>
    </section>

    <TextSlider />
    <div class="heading-page">
      <h1 class="page-title text-center pt-5">Product List</h1>
    </div>
    <header class="header">
      <button @click="toggleFilters" class="toggle-filters-btn">Filters</button>
    </header>
    <div class="filters-container d-flex justify-content-end">
      <div class="filter-group mx-2">
        <label for="price-filter" class="text-center">Price</label>
        <select
          id="price-filter"
          v-model="selectedPrice"
          @change="applyFilters"
        >
          <option value="">Select</option>
          <option value="low-to-high">Low to High</option>
          <option value="high-to-low">High to Low</option>
        </select>
      </div>
      <div class="filter-group mx-2">
        <label for="rating-filter">Rating</label>
        <select
          id="rating-filter"
          v-model="selectedRating"
          @change="applyFilters"
        >
          <option value="">Select</option>
          <option value="5">5 Stars</option>
          <option value="4">4 Stars & Up</option>
          <option value="3">3 Stars & Up</option>
          <option value="2">2 Stars & Up</option>
          <option value="1">1 Star & Up</option>
        </select>
      </div>
    </div>
    <main class="product-list">
      <div class="row">
        <div
          class="col-md-4"
          v-for="product in filteredProducts"
          :key="product.id"
        >
          <div class="card product-card">
            <img
              :src="product.thumbnail"
              class="card-img-top"
              :alt="product.title"
            />
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">{{ product.description }}</p>
              <p class="price">₹{{ product.price }}</p>
              <div class="rating">
                <span
                  v-for="star in 5"
                  :key="star"
                  class="star"
                  :class="{ filled: star <= product.rating }"
                  >★</span
                >
              </div>
              <div class="button-group">
                <router-link
                  to="/add-to-cart"
                  class="btn btn-primary"
                  role="button"
                  >Add to Cart</router-link
                >
                <button
                  class="btn btn-secondary"
                  @click="showProductDetail(product)"
                >
                  Product Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <pagination
        :current-page="currentPage"
        :total-pages="totalPages"
        @page-changed="fetchProducts"
      ></pagination>
    </main>

    <!-- Product Detail Modal 
    <div class="modal" :class="{ 'is-active': showModal }">
      <div class="modal-background" @click="closeProductDetailModal"></div>
      <div class="modal-content">
        <div class="box">
          <h1 class="title">{{ selectedProduct.title }}</h1>
          <div class="product-detail">
         
            <img :src="selectedProduct.thumbnail" :alt="selectedProduct.title" class="product-image">
            <div class="product-info">
              <p class="description">{{ selectedProduct.description }}</p>
              <div class="rating">
                <span v-for="star in 5" :key="star" class="star" :class="{ 'filled': star <= selectedProduct.rating }">★</span>
              </div>
              <div class="additional-info">
                <p class="price">Price: ₹{{ selectedProduct.price }}</p>
                <p class="views"><i class="fas fa-eye"></i> {{ selectedProduct.views }}</p>
                <p class="likes"><i class="fas fa-heart"></i> {{ selectedProduct.likes }}</p>
              </div>
              <div class="feedback">
                <h3>Customer Feedback</h3>
                <div class="feedback-item" v-for="(feedback, index) in selectedProduct.feedback" :key="index">
                  <div class="user-info">
                    <img :src="feedback.avatar" :alt="feedback.name" class="user-avatar">
                    <p class="user-name">{{ feedback.name }}</p>
                  </div>
                  <p class="comment">{{ feedback.comment }}</p>
                  <div class="rating">
                    <span v-for="star in 5" :key="star" class="star" :class="{ 'filled': star <= feedback.rating }">★</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="closeProductDetailModal"></button>
    </div>-->
    <div class="modal" :class="{ 'is-active': showModal }">
      <div class="modal-background" @click="closeProductDetailModal"></div>
      <div class="modal-content">
        <div class="box">
          <div class="columns">
            <div class="column is-one-third">
              <img
                :src="selectedProduct.thumbnail"
                :alt="selectedProduct.title"
                class="product-image"
              />
              <div class="product-size">
                <h3>Available Sizes:</h3>
                <div class="size">S</div>
                <div class="size">M</div>
                <div class="size">L</div>
                <div class="size">XL</div>
                <div class="size">XLL</div>
              </div>
            </div>
            <div class="column">
              <h1 class="title">{{ selectedProduct.title }}</h1>
              <div class="product-detail">
                <p class="description">{{ selectedProduct.description }}</p>
                <div class="rating">
                  <span
                    v-for="star in 5"
                    :key="star"
                    class="star"
                    :class="{ filled: star <= selectedProduct.rating }"
                    >★</span
                  >
                </div>
                <div class="additional-info d-flex justify-content-between">
                  <p class="price">Price: ₹{{ selectedProduct.price }}</p>
                  <p class="views">
                    <i class="fas fa-eye"></i> {{ selectedProduct.views }} views
                  </p>
                  <p class="likes">
                    <i class="fas fa-heart"></i>
                    {{ selectedProduct.likes }} likes
                  </p>
                </div>
                <div class="feedback">
                  <h3>Customer Reviews</h3>
                  <div
                    class="feedback-item"
                    v-for="(feedback, index) in selectedProduct.feedback"
                    :key="index"
                  >
                    <div class="user-info">
                      <img
                        :src="feedback.avatar"
                        :alt="feedback.name"
                        class="user-avatar"
                      />
                      <p class="user-name">{{ feedback.name }}</p>
                    </div>
                    <p class="comment">{{ feedback.comment }}</p>
                    <div class="rating">
                      <span
                        v-for="star in 5"
                        :key="star"
                        class="star"
                        :class="{ filled: star <= feedback.rating }"
                        >★</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="modal-close is-large"
        aria-label="close"
        @click="closeProductDetailModal"
      ></button>
    </div>
  </div>
</template>

<script>
import Pagination from "../components/Pagination.vue";
import Salecopy from "../components/Salecopy.vue";
import TextSlider from "../components/TextSlider.vue";

export default {
  name: "ProductList",
  components: {
    Pagination,
    Salecopy,
    TextSlider,
  },
  data() {
    return {
      products: [],
      filteredProducts: [],
      currentPage: 1,
      totalPages: 0,
      selectedPrice: "",
      selectedName: "",
      selectedRating: "",
      showFilters: false,
      selectedProduct: {},
      showModal: false, // Track modal visibility
    };
  },
  mounted() {
    this.fetchProducts();
    // Trigger animations on component mount
    this.animateText(".fade-in-text");
  },
  methods: {
    fetchProducts(page = 1) {
      fetch(`https://dummyjson.com/products?limit=10&skip=${(page - 1) * 10}`)
        .then((res) => res.json())
        .then((data) => {
          this.products = data.products;
          this.totalPages = Math.ceil(data.total / 10);
          this.applyFilters();
        });
    },
    applyFilters() {
      let filtered = this.products;

      if (this.selectedPrice) {
        filtered = filtered.slice().sort((a, b) => {
          if (this.selectedPrice === "low-to-high") return a.price - b.price;
          if (this.selectedPrice === "high-to-low") return b.price - a.price;
        });
      }

      if (this.selectedName) {
        filtered = filtered.filter((product) =>
          product.title.toLowerCase().includes(this.selectedName.toLowerCase())
        );
      }

      if (this.selectedRating) {
        filtered = filtered.filter(
          (product) => product.rating >= this.selectedRating
        );
      }

      this.filteredProducts = filtered;
    },
    toggleFilters() {
      this.showFilters = !this.showFilters;
    },
    showProductDetail(product) {
      this.selectedProduct = product;
      this.showModal = true; // Show modal
    },
    closeProductDetailModal() {
      this.showModal = false; // Hide modal
    },
    animateText(selector) {
      setInterval(() => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el) => {
          el.classList.remove("fade-in-text");
          void el.offsetWidth; // Trigger reflow
          el.classList.add("fade-in-text");
        });
      }, 5000); // Adjust interval as needed (5 seconds here)
    },
  },
};
</script>

<style scoped>
.dark-mode {
  background-color: #121212;
  color: #ffffff;
}

.sale-section {
  position: relative;
  background-size: cover;
  background-position: center;
  height: auto; /* Adjust height as needed */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 4rem 0; /* Adjust padding as needed */
}

.sale-content {
  background: rgba(0, 0, 0, 0.5); /* Dark overlay for better text readability */
  padding: 2rem;
  border-radius: 8px;
}

.fade-in-text {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInText 1.5s ease-in-out;
}

@keyframes fadeInText {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.sale-content h2 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.sale-content p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.btn-primary {
  background-color: #ff9800; /* Orange button background color */
  color: #fff;
  border-color: #ff9800; /* Orange button border color */
  padding: 0.75rem 1.5rem;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #ffcc80; /* Lighter orange on hover */
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.page-title {
  text-align: center;
}

.heading-page {
  position: relative;
  background-image: url("https://img.freepik.com/free-vector/gradient-network-connection-background_23-2148872043.jpg");
  /* Replace with your image URL */
  background-size: cover;
  background-position: center;
  height: 200px;
  /* Full screen height */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

.toggle-filters-btn {
  display: none;
}

.filters-container {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}

.filter-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.filter-group input,
select {
  border: 2px solid #ffb74d;
  border-radius: 2rem;
}

.product-list {
  padding: 20px;
}

.card.product-card {
  background-color: #222222;
  color: #ffffff;
  margin-bottom: 20px;
}

.card-title {
  color: #ffb74d;
}

.price {
  font-size: 1.2rem;
  color: #ffcc80;
}

.filter-group label {
  margin: 10px 5px;
  text-align: center;
  font-size: 25px;
}

.rating .star {
  color: #ffcc80;
  font-size: 1.5rem;
}

.rating .star.filled {
  color: #ff9800;
}

.button-group {
  display: flex;
  justify-content: space-between;
}

.btn-primary {
  background-color: #ff9800;
  border-color: #ff9800;
}

.btn-secondary {
  background-color: #ffb74d;
  border-color: #ffb74d;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  justify-content: center;
  align-items: center;
}

.modal.is-active {
  display: flex;
}

.modal-content {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
}

.modal-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  cursor: pointer;
}
/*--------*/
.modal-content {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.box {
  padding: 20px;
}

.title {
  font-size: 2rem;
  color: #333;
}

.product-image {
  width: 100%;
  max-height: 400px;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

.product-size {
  margin: 20px 30px;
  display: flex;
  flex-direction: row;
}

.product-size h3 {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 10px;
}

.product-size .size {
  background-color: #ff9800;
  color: white;
  margin: 0px 5px;
  width: 5px3;
  padding: 5px;
}

.description {
  font-size: 1.1rem;
  color: #444;
  line-height: 1.5;
}

.additional-info {
  margin-top: 20px;
}

.price {
  font-size: 1.9rem;
  margin-bottom: 10px;
}

.views,
.likes {
  font-size: 1rem;
  color: #777;
  margin-bottom: 5px;
}

.feedback {
  margin-top: 20px;
}

.feedback h3 {
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 10px;
}

.feedback-item {
  margin-top: 15px;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.user-info {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.user-name {
  font-size: 1rem;
  color: #555;
}

.comment {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 10px;
  line-height: 1.5;
}

.rating {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.rating .star {
  color: #ffcc80;
  font-size: 1.5rem;
  margin-right: 5px;
}

.rating .star.filled {
  color: #ff9800;
}
</style>
