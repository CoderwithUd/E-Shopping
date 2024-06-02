<template>
  <footer class="bg-dark text-white py-4">
    <div class="container">
      <div class="row">
        <div class="col-md-3 text-center">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/006/547/178/small_2x/creative-modern-abstract-ecommerce-logo-design-colorful-gradient-online-shopping-bag-logo-design-template-free-vector.jpg" alt="Logo" class="mb-3 rounded-circle mb-3" style="width: 100px;">
          <p>&copy; 2024 E-Commerce. All Rights Reserved.</p>
        </div>
        <div class="col-md-3">
          <h5>About Us</h5>
          <p>We are committed to providing the best shopping experience with quality products and excellent customer service.</p>
        </div>
        <div class="col-md-3">
          <h5>Contact</h5>
          <p>Email: support@ecommerce.com</p>
          <p>Phone: +123-456-7890</p>
        </div>
        <div class="col-md-3">
          <h5>Follow Us</h5>
          <a href="#" class="text-white me-2"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="text-white me-2"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-white me-2"><i class="fab fa-instagram"></i></a>
          <a href="#" class="text-white me-2"><i class="fab fa-linkedin-in"></i></a>
          <a href="#" class="text-white me-2"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
      <hr class="my-3">
      <div class="row">
        <div class="col-md-3">
          <h6>Popular Categories</h6>
          <ul class="list-unstyled">
            <li><a href="#" class="text-white">Electronics</a></li>
            <li><a href="#" class="text-white">Fashion</a></li>
            <li><a href="#" class="text-white">Home & Kitchen</a></li>
            <li><a href="#" class="text-white">Beauty & Personal Care</a></li>
          </ul>
        </div>
        <div class="col-md-3">
          <h6>Customer Service</h6>
          <ul class="list-unstyled">
            <li><a href="#" class="text-white">Help & FAQs</a></li>
            <li><a href="#" class="text-white">Shipping & Delivery</a></li>
            <li><a href="#" class="text-white">Return Policy</a></li>
            <li><a href="#" class="text-white">Track Order</a></li>
          </ul>
        </div>
        <div class="col-md-3">
          <h6>My Account</h6>
          <ul class="list-unstyled">
            <li><a href="#" class="text-white">Login</a></li>
            <li><a href="#" class="text-white">Register</a></li>
            <li><a href="#" class="text-white">My Orders</a></li>
            <li><a href="#" class="text-white">Wishlist</a></li>
          </ul>
        </div>
        <div class="col-md-3">
          <h6>Company Info</h6>
          <ul class="list-unstyled">
            <li><a href="#" class="text-white">About Us</a></li>
            <li><a href="#" class="text-white">Careers</a></li>
            <li><a href="#" class="text-white">Press Releases</a></li>
            <li><a href="#" class="text-white">Blog</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer {
  background-color: #222;
  color: #ffcc80;
}
h5, h6 {
  color: #ff9800;
}
a {
  text-decoration: none;
  color: #ffcc80;
}
a:hover {
  color: #ff9800;
}
hr {
  border-top: 1px solid #ffcc80;
}
@media (max-width: 768px) {
  .container {
    text-align: center;
  }
  .row {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .col-md-3 {
    margin-bottom: 20px;
  }
}
</style>
