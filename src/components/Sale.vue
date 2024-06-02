<template>
  <div>
    <!-- Sale Section -->
    <section id="sale-section" class="sale-section" style="background-image: url('https://joburg.co.za/wp-content/uploads/2020/08/641.jpg');">
      <div class="container text-center">
        <div class="sale-content">
          <h2 class="fade-in-text">Big Sale Today!</h2>
          <p class="fade-in-text">Up to 50-90% off on selected items. Grab your favorites now!</p>
          <router-link to="/products" class="btn btn-primary fade-in-text">Buy 1 Get 2 Free</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SaleSection',
  mounted() {
    // Trigger animations on component mount
    this.animateText('.fade-in-text');
  },
  methods: {
    animateText(selector) {
      setInterval(() => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          el.classList.remove('fade-in-text');
          void el.offsetWidth; // Trigger reflow
          el.classList.add('fade-in-text');
        });
      }, 3000); 
    }
  }
}
</script>

<style scoped>
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
  background-color: #ff9800; 
  color: #fff;
  border-color: #ff9800;
  padding: 0.75rem 1.5rem;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #ffcc80; 
}
</style>
