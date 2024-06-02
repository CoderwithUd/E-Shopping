<template>
  <div class="product-detail-page dark-mode">
    <div class="container py-5">
      <div class="row">
        <div class="col-md-6">
          <img :src="selectedProduct.thumbnail" class="img-fluid mb-3" :alt="selectedProduct.title">
        </div>
        <div class="col-md-6">
          <h2>{{ selectedProduct.title }}</h2>
          <p class="price">₹{{ selectedProduct.price }}</p>
          <div class="rating mb-3">
            <span v-for="star in 5" :key="star" class="star" :class="{ 'filled': star <= selectedProduct.rating }">★</span>
          </div>
          <p>{{ selectedProduct.description }}</p>
          <button class="btn btn-primary" @click="addToCart(selectedProduct)">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  props: {
    selectedProduct: Object, // Passed from parent component
  },
  methods: {
    addToCart(product) {
      // Implement add to cart functionality
      console.log('Product added to cart:', product);
      // Redirect to cart page or show confirmation message
    },
  },
};
</script>

<style scoped>
.product-detail-page {
  padding: 40px 0;
}

.product-detail-page .price {
  font-size: 1.5rem;
  color: #ffcc80;
}

.product-detail-page .rating .star {
  color: #ffcc80;
  font-size: 1.8rem;
}

.product-detail-page .rating .star.filled {
  color: #ff9800;
}
</style>