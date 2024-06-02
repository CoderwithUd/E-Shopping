<template>
  <section id="latest-products" class="py-5 bg-dark text-light">
    <div class="container">
      <h2 class="text-center mb-4" style="color: #ff9800">Latest Products</h2>
      <div class="row mt-5">
        <div
          class="col-md-6 col-lg-4"
          v-for="(product, index) in products"
          :key="index"
        >
          <div class="card mb-4 shadow-sm position-relative">
            <span v-if="product.offer" class="offer-tag bg-warning text-dark">
              {{ product.offer }}
            </span>
            <img
              :src="product.image"
              class="card-img-top"
              :alt="product.name"
            />
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">{{ product.description }}</p>

              <router-link
                to="/products"
                class="btn btn-outline-warning fade-in-text"
                role="button"
                >Shop Now</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LatestProducts",
  data() {
    return {
      products: [
        {
          image: "https://m.media-amazon.com/images/I/81KwkKnMDtL._SY741_.jpg",
          name: "Westen",
          description: "This is a great product.",
          offer: "20% Off",
        },
        {
          image:
            "https://media.istockphoto.com/id/839977436/photo/sexy-and-fashionable-set-of-glamour-black-and-white-accessories-for-woman.jpg?s=1024x1024&w=is&k=20&c=4GacxVIwPL8ucRyshuEtXcgU9ppBFDcnx4Lll54doxg=",
          name: "Bags",
          description: "This product is amazing.",
          offer: "Special Price",
        },
        {
          image: "https://sathya.in/media/87913/catalog/2-35.jpg",
          name: "Electronic",
          description: "You will love this product.",
          offer: "Free Shipping",
        },
        {
          image: "https://m.media-amazon.com/images/I/71xVmoqXqOL.jpg",
          name: "Zara",
          description: "Best product in the market.",
          offer: "Limited Stock",
        },
        {
          image:
            "https://assets.ajio.com/medias/sys_master/root/20230921/meKx/650c4c2bddf7791519efcd10/skylona_black_chronograph_watch.jpg",
          name: "Fasttrack",
          description: "Best product in the market.",
          offer: "Buy 1 get free",
        },
        {
          image:
            "https://5.imimg.com/data5/ANDROID/Default/2023/2/JS/ZL/PG/119321993/product-jpeg-500x500.jpg",
          name: "Fashion",
          description: "Best product in the market.",
          offer: "40%",
        },
      ],
    };
  },
};
</script>

<style scoped>
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
}

.card:hover {
  transform: translateY(-5px);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease; /* Add animation to the image */
}

.card:hover .card-img-top {
  transform: scale(1.05); /* Scale up the image on hover */
}

.card-title,
.card-text {
  opacity: 1; /* Initially hide the text */
  transition: opacity 0.3s ease; /* Add animation to the text */
}

.card:hover .card-title,
.card:hover .card-text {
  opacity: 1; /* Fade in the text on hover */
}

.offer-tag {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #f39c12; /* Orange background color */
  color: #343a40; /* Dark text color */
  padding: 4px 8px;
  font-size: 0.8rem;
  transform: translateY(-50%);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 0 8px;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  opacity: 1;
}

.btn-outline-warning {
  color: #f39c12; /* Orange button text color */
  border-color: #f39c12; /* Orange button border color */
  background-color: transparent; /* Transparent background initially */
  transition: background-color 0.3s ease, color 0.3s ease; /* Add transition */
}

.btn-outline-warning:hover {
  background-color: #f39c12; /* Orange background on hover */
  color: #343a40; /* Dark text color on hover */
}
</style>
