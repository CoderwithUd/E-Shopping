<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">E-Shopping</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mx-5">
          <li class="nav-item mx-3">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item mx-3">
            <router-link class="nav-link" to="/about">About Us</router-link>
          </li>
          <li class="nav-item mx-3">
            <router-link class="nav-link" to="/products">Products</router-link>
          </li>
          <li class="nav-item mx-3">
            <router-link class="nav-link" to="/contact">Contact Us</router-link>
          </li>
        </ul>
        <div class="d-flex align-items-center">
          <form class="d-flex me-2">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-warning" type="submit"><i class="fas fa-search"></i></button>
          </form>
          <!-- User Sign In Icon -->
          <a href="#" class="text-decoration-none text-white me-3" data-bs-toggle="modal" data-bs-target="#signUpModal">
            <i class="fas fa-user"></i>
          </a>
          <!-- Add to Cart Icon -->
          <router-link to="/add-to-cart" class="text-decoration-none text-white">
     
            <i class="fas fa-shopping-cart"></i>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Sign Up Modal -->
    <div class="modal fade" id="signUpModal" tabindex="-1" aria-labelledby="signUpModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="signUpModalLabel">Sign Up</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password">
              </div>
              <div class="mb-3">
                <label for="confirmPassword" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="confirmPassword">
              </div>
              <div class="mb-3 d-flex justify-content-between">
                <a href="#" class="text-decoration-none">Forgot password?</a>
                <a href="#" class="text-decoration-none">Login</a>
              </div>
              <button type="submit" class="btn btn-primary">Sign Up</button>
            </form>
            <div class="mt-3 d-flex justify-content-around">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-google"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.navbar {
  background-color: #343a40; /* Dark background color */
}

.nav-link {
  color: #ffcc80; /* Yellow text color */
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #ff9800; /* Orange text color on hover */
}

.btn-outline-warning {
  color: #ffcc80; /* Yellow button text color */
  border-color: #ffcc80; /* Yellow button border color */
}

.btn-outline-warning:hover {
  color: #ff9800; /* Orange button text color on hover */
  border-color: #ff9800; /* Orange button border color on hover */
}

.modal-content {
  background-color: #2d2d2d; /* Dark background for modal */
  color: #ffcc80; /* Yellow text color */
}

.modal-header {
  border-bottom: 1px solid #ffcc80; /* Yellow border */
}

.btn-close {
  filter: invert(100%);
}

.btn-primary {
  background-color: #ff9800; /* Orange button background */
  border-color: #ff9800; /* Orange button border */
}

.btn-primary:hover {
  background-color: #ffcc80; /* Yellow button background on hover */
  border-color: #ffcc80; /* Yellow button border on hover */
}

.social-icon {
  color: #ffcc80; /* Yellow icon color */
  font-size: 1.5rem; /* Increase icon size */
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: #ff9800; /* Orange icon color on hover */
}

.fab {
  margin: 0 10px; /* Margin between icons */
}
</style>
