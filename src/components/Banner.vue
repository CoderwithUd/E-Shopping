<template>
  <div class="jumbotron jumbotron-fluid text-white bg-primary">
    <div class="container text-center jumbotron-text">
      <h1 class="display-4">Welcome to Our Store!</h1>
      <p class="lead">Discover amazing products and great deals.</p>

      <router-link
        to="/products"
        class="btn btn-light btn-lg fade-in-text"
        role="button"
        >Shop Now</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style scoped>
.jumbotron {
  background: url("https://t3.ftcdn.net/jpg/06/26/43/88/360_F_626438875_UiXvnbdBg9AS380Nc7cuIm0cmrCamPyp.jpg")
    no-repeat center center;
  background-size: cover;
  padding: 6rem 0;
}
</style>
