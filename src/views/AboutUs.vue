<template>
  <div class="about-page">
    <div class="hero-section">
      <img src="https://www.shutterstock.com/image-photo/fashion-style-panoramic-full-body-260nw-1953666523.jpg" class="hero-image" />
      <div class="hero-text">
        <h1 class="display-3">Welcome to  <br> Our E-commerce Store</h1>
        <p>Where quality meets affordability</p>
      </div>
    </div>
    <hr>
    <div class="content">
      <section class="our-vision">
        <h2>Our Vision</h2>
        <p>To be the leading e-commerce platform, offering unparalleled shopping experiences with a diverse range of high-quality products and exceptional customer service.</p>
      </section>
      <hr>
      <section class="our-promise">
        <h2>Our Promise</h2>
        <div class="promise-content">
          <img src="https://media.istockphoto.com/id/1434119137/photo/business-people-meeting-and-handshake-for-partnership-b2b-contract-deal-or-woman-inclusion.webp?b=1&s=170667a&w=0&k=20&c=mZeLfaPi78CzCuExJSnqF7NkkqELIJ-AkyObGp2llVU=" alt="Our Promise" />
          <div class="promise-text">
            <p>At Our Store, we promise to deliver high-quality products at the best prices. We offer a wide range of items including t-shirts, jeans, watches, sunglasses, and much more. Our commitment to excellence ensures that every product is carefully selected to meet our high standards.</p>
            <ul>
              <li><i class="fas fa-check-circle"></i> Premium Quality Products</li>
              <li><i class="fas fa-check-circle"></i> Best Prices Guaranteed</li>
              <li><i class="fas fa-check-circle"></i> 100% Satisfaction Guarantee</li>
            </ul>
          </div>
        </div>
      </section>
      <hr>
      <section class="services">
        <h2>Services We Provide</h2>
        <div class="services-icons">
          <div class="service">
            <i class="fas fa-shipping-fast"></i>
            <p>Fast Shipping</p>
          </div>
          <div class="service">
            <i class="fas fa-sync-alt"></i>
            <p>Easy Returns</p>
          </div>
          <div class="service">
            <i class="fas fa-headset"></i>
            <p>24/7 Support</p>
          </div>
        </div>
      </section>
      <hr>
      <section class="products">
        <div class="best-sellers">
          <h2>Best Sellers</h2>
          <div class="product-images">
            <img src="https://m.media-amazon.com/images/I/41cJHytOGDL._SY300_SX300_.jpg" alt="Best Seller 1">
            <img src="https://images-eu.ssl-images-amazon.com/images/I/51oMWaW7tKL._AC_UL450_SR450,320_.jpg" alt="Best Seller 2">
            <img src="https://images-eu.ssl-images-amazon.com/images/I/51k9wNfghBS._AC_UL450_SR450,320_.jpg" alt="Best Seller 3">
          </div>
        </div>
        <hr>
        <div class="new-releases">
          <h2>New Releases</h2>
          <div class="product-images">
            <img src="https://images-eu.ssl-images-amazon.com/images/I/61okssN3Y6L._AC_UL450_SR450,320_.jpg" alt="New Release 1">
            <img src="https://images-eu.ssl-images-amazon.com/images/I/51-6iqXgVcL._AC_UL450_SR450,320_.jpg" alt="New Release 2">
            <img src="https://images-eu.ssl-images-amazon.com/images/I/618DOTC0+5L._AC_UL165_SR165,165_.jpg" alt="New Release 3">
          </div>
        </div>
      </section>
      <hr>
      <section class="customer-statistics">
        <h2>Customer Statistics</h2>
        <div class="statistics">
          <div class="stat-item">
            <i class="fas fa-smile "></i>
            <h4> Happy Customers</h4>
            <p id="working-hours">0</p>
          </div>
          <div class="stat-item">
            <i class="fas fa-shopping-cart"></i>
            <h4>Monthly Sales</h4>
            <p id="monthly-sales">0</p>
          </div>
          <div class="stat-item">
            <i class="fas fa-award"></i>
            <h4>Awards Received</h4>
            <p id="happy-customers">0</p>
          </div>
          <div class="stat-item">
            <i class="fas fa-clock"></i>
            <h4> Working Hours</h4>
            <p id="awards-received">0</p>
          </div>
        </div>
      </section>
      <hr>
      <section class="customer-support">
        <h2>Customer Support</h2>
        <div class="support-content">
          <img src="https://www.graphicpear.com/wp-content/uploads/2022/11/Customer-Service-Illustration.jpg" alt="Customer Support" />
          <div class="support-text">
            <p>We are here to assist you 24/7. Contact us anytime for any queries or support. Our customer support team is dedicated to ensuring a smooth shopping experience for you. Whether you need help with a purchase or have questions about our products, we are always ready to help.</p>
            <ul>
              <li><i class="fas fa-phone"></i> Call Us: 123-456-7890</li>
              <li><i class="fas fa-envelope"></i> Email: support@ourstore.com</li>
              <li><i class="fas fa-comments"></i> Live Chat: Available 24/7</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  mounted() {
    this.counterUp('working-hours', 5000, 24 * 7 * 30);  // e.g., 5000 working hours
    this.counterUp('monthly-sales', 500, 1000);  // e.g., 500,000 monthly sales
    this.counterUp('happy-customers', 50, 200);  // e.g., 50,000 happy customers
    this.counterUp('awards-received', 10, 20);  // e.g., 10 awards received
  },
  methods: {
    counterUp(id, speed, target) {
      let count = 0;
      const updateCount = () => {
        const increment = target / speed;
        count = Math.min(count + increment, target);
        document.getElementById(id).innerText = Math.floor(count);
        if (count < target) {
          requestAnimationFrame(updateCount);
        }
      };
      requestAnimationFrame(updateCount);
    }
  }
}
</script>

<style scoped>
.about-page {
  background-color: #121212;
  color: #f5f5f5;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.hero-section {
  position: relative;
  text-align: center;
  margin-bottom: 40px;
}

.hero-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  filter: brightness(0.5);
  animation: fadeIn 2s ease-in-out;
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}

.hero-text h1 {
  font-size: 3em;
  margin: 0;
  animation: slideInFromLeft 1s ease-in-out;
}

.hero-text p {
  font-size: 1.5em;
  animation: slideInFromRight 1s ease-in-out;
}

.content {
  margin-top: 20px;
}

.content section {
  margin-bottom: 40px;
}

.content h2 {
  color: #f9a825;
  margin-bottom: 20px;
}

.our-promise .promise-content,
.customer-support .support-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
}

.promise-content img,
.support-content img {
  width: 100%;
  max-width: 500px;
  margin-right: 20px;
  border-radius: 10px;
}

.promise-text,
.support-text {
  flex: 1;
}

.promise-text ul,
.support-text ul {
  list-style: none;
  padding: 0;
}

.promise-text ul li,
.support-text ul li {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.promise-text ul li i,
.support-text ul li i {
  margin-right: 10px;
  color: #ffb300;
}

.services-icons {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.service {
  text-align: center;
  margin: 10px;
}

.service i {
  font-size: 2em;
  color: #ffb300;
  margin-bottom: 10px;
}

.product-images {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px;
}

.product-images img {
  width: 30%;
  height: auto;
  border-radius: 10px;
  transition: transform 0.3s;
  margin: 10px;
}

.product-images img:hover {
  transform: scale(1.1);
}

.customer-statistics {
  text-align: center;
}

.statistics {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.statistics p{
font-size:35px;
}
.stat-item {
  margin: 20px;
}

.stat-item i {
  font-size: 2em;
  color: #ffb300;
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .hero-text h1 {
    font-size: 2em;
  }

  .hero-text p {
    font-size: 1em;
  }

  .promise-content,
  .support-content {
    flex-direction: column;
  }

  .promise-content img,
  .support-content img {
    margin-right: 0;
    margin-bottom: 20px;
  }

  .product-images img {
    width: 45%;
  }
}

@media (max-width: 480px) {
  .hero-text h1 {
    font-size: 1.5em;
  }

  .hero-text p {
    font-size: 0.9em;
  }

  .product-images img {
    width: 100%;
  }

  .service i {
    font-size: 1.5em;
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInFromLeft {
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes slideInFromRight {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
</style>
