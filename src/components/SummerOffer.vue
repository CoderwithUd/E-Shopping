<template>
  <section id="summer-offer" class="offer-section">
    <div class="container text-center">
      <div class="offer-content">
        <h2 class="fade-in">Summer Offer is Live!</h2>
        <p class="fade-in">Enjoy exclusive discounts on a wide range of products this summer. Don't miss out on our special deals and offers!</p>
        <router-link to="/products" class="btn btn-primary fade-in">Upto 50% Discounts</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SummerOffer',
  mounted() {
    // Trigger animations on component mount
    setTimeout(() => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(el => {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      });
    }, 100);
  }
}
</script>

<style scoped>
.offer-section {
  position: relative;
  background-image: url('https://png.pngtree.com/background/20230524/original/pngtree-shopping-cart-next-to-colorful-neonlit-blocks-on-a-dark-background-picture-image_2711783.jpg'); /* Replace with your image URL */
  background-size: cover;
  background-position: center;
  height: auto; /* Full screen height */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

.offer-content {
  background: rgba(0, 0, 0, 0.5); /* Dark overlay for better text readability */
  padding: 2rem;
  border-radius: 8px;
}

.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.offer-content h2 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.offer-content p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.btn-primary {
  background-color: #ff5733; /* Customize button color */
  color: #fff;
  border-color: #ff5733;
  padding: 0.75rem 1.5rem;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #c70039;
}
</style>
