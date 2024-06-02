<template>
  <section id="product-slider" class="py-5">
    <div class="container">
      <h2 class="text-center mb-4" style="color: #ff9800">Our Products</h2>
      <div v-for="(category, index) in categories" :key="index" class="mb-5">
        <h2 class="text-start mb-1 display-5" style="color: white">
          {{ category.name }}
        </h2>
        <p class="text-start mb-4" style="color: #ffffff">
          {{ category.question }}
        </p>
        <div class="slider-container">
          <swiper
            :slides-per-view="3"
            :space-between="30"
            loop
            autoplay
            :breakpoints="{
             300: { slidesPerView: 1 },
              400: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }"
            class="mySwiper"
            navigation
          >
            <swiper-slide
              v-for="(product, productIndex) in category.products"
              :key="productIndex"
              class="product-slide"
            >
              <div class="card">
                <img
                  :src="product.image"
                  :alt="product.name"
                  class="card-img-top"
                />
                <div class="card-body">
                  <h5 class="card-title">{{ product.name }}</h5>
                  <p class="card-text">₹ {{ product.price }}</p>
                  <div class="rating">
                    <span
                      v-for="star in 5"
                      :key="star"
                      class="fa fa-star"
                      :class="{ checked: star <= product.rating }"
                    ></span>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import SwiperCore, { Navigation } from 'swiper/core';

SwiperCore.use([Navigation]);

export default {
  name: 'ProductSlider',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      categories: [
        {
          name: 'Clothes',
          question: 'Looking for stylish and comfortable clothes?',
          products: [

            { image: 'https://m.media-amazon.com/images/I/616VuRO-4yL._AC_UL320_.jpg', name: 'T-Shirt', price: '499', rating: 4 },
            { image: 'https://m.media-amazon.com/images/I/31KmNEDi4GL._AC_UY1100_.jpg', name: 'Jeans', price: '799', rating: 5 },
              { image: 'https://www.indy100.com/media-library/image.png?id=31864844&width=776&quality=85', name: 'Jacket', price: '999', rating: 4 },
             { image: 'https://m.media-amazon.com/images/I/51hRNn8lvWL._AC_UL320_.jpg', name: 'Jeans-black', price: '1799', rating: 4.5 },
            { image: 'https://m.media-amazon.com/images/I/71zo3tQTcsL._SX569_.jpg', name: ' Kurta and Pant Set ', price: '1699', rating: 3 },
            { image: 'https://m.media-amazon.com/images/I/81Kt6ESprIL._SY741_.jpg', name: 'Wedding Suit', price: '1099', rating: 5 },
            { image: 'https://m.media-amazon.com/images/I/71BImx1-r8L._AC_UL320_.jpg', name: 'UNNATI SILKS', price: '899', rating: 4 },
            { image: 'https://m.media-amazon.com/images/I/519xO+nxjAL._AC_UL320_.jpg', name: 'BENGAL HANDLOOM', price: '1599', rating: 5 },
          ]
        },
        {
          name: 'Watches',
          question: 'Find the perfect watch to match your style.',
          products: [
            { image: 'https://m.media-amazon.com/images/I/61q0ZgCYoJL._AC_UL320_.jpg', name: 'Fastrack ', price: '1999', rating: 5 },
            { image: 'https://m.media-amazon.com/images/I/71eZGn3sZGL._AC_UL320_.jpg', name: 'Casio ', price: '3999', rating: 5 },
            { image: 'https://m.media-amazon.com/images/I/618qhNo1BOL._AC_UL320_.jpg', name: 'Titan ', price: '2999', rating: 4 },
              { image: 'https://m.media-amazon.com/images/I/81sa6HPlKeL._AC_UL320_.jpg', name: 'Sonata', price: '4999', rating: 4.5 },
                { image: 'https://m.media-amazon.com/images/I/716G8-WHiIL._AC_UL320_.jpg', name: 'BENYAR', price: '5999', rating: 5 }
          ]
        },
        {
          name: 'Sunglasses',
          question: 'Protect your eyes with stylish sunglasses.',
          products: [
            { image: 'https://m.media-amazon.com/images/I/61xbGkFmwvL._AC_UL320_.jpg', name: 'Fastrack', price: '1599', rating: 3.5 },
             { image: 'https://m.media-amazon.com/images/I/61XpppzhORL._AC_UL320_.jpg', name: 'Ray-Ban', price: '3599', rating: 4 },
              { image: 'https://m.media-amazon.com/images/I/612UdT4oMTL._AC_UL320_.jpg', name: 'ROYAL SON', price: '2599', rating: 4 },
              { image: 'https://m.media-amazon.com/images/I/61YVfpNgvBL._AC_UL320_.jpg', name: 'Dervin', price: '1599', rating: 3 },
            { image: 'https://m.media-amazon.com/images/I/714jrL5yoIL._AC_UL320_.jpg', name: 'Dervin', price: '1899', rating: 5 }
          ]
        },
        {
          name: 'Cosmetics',
          question: 'Enhance your beauty with our premium cosmetics.',
          products: [
            { image: 'https://m.media-amazon.com/images/I/51IgR2yRK2L._AC_UL320_.jpg', name: 'LAKMÉ', price: '99', rating: 5 },
            { image: 'https://m.media-amazon.com/images/I/51PQhsaEcLL._AC_UL320_.jpg', name: 'Maybelline', price: '259', rating: 4 },
            { image: 'https://m.media-amazon.com/images/I/61IxF1ljJHL._AC_UL320_.jpg', name: 'Indulekha', price: '237', rating: 5 },
             { image: 'https://m.media-amazon.com/images/I/51-G+VRBzHL._AC_UL320_.jpg', name: 'RENEE', price: '378', rating: 4.2 },
            { image: 'https://m.media-amazon.com/images/I/51QLQjvAAOL._AC_UL320_.jpg', name: 'SUGAR Cosmetics', price: '167', rating: 4 }

          ]
        },
        {
          name: 'Phones',
          question: 'Explore the latest and greatest smartphones.',
          products: [
            { image: 'https://m.media-amazon.com/images/I/71ocQY+G2XL._AC_UL320_.jpg', name: 'realme NARZO N65 5G', price: '12499', rating: 5 },
            { image: 'https://m.media-amazon.com/images/I/61u9zN1HYCL._AC_UL320_.jpg', name: 'OnePlus 11R 5G ', price: '27999', rating: 4 },
              { image: 'https://m.media-amazon.com/images/I/6175SlKKECL._AC_UL320_.jpg', name: 'OnePlus Nord CE 3 5G', price: '18999', rating: 4.5 },
                { image: 'https://m.media-amazon.com/images/I/71xb2xkN5qL._AC_UL320_.jpg', name: 'Apple iPhone 13 (128GB) ', price: '48799', rating: 4 },
                  { image: 'https://m.media-amazon.com/images/I/91L9EF-OEGL._AC_UL320_.jpg', name: 'Samsung Galaxy M34 5G', price: '13999', rating: 4.2},
            { image: 'https://m.media-amazon.com/images/I/81nMsYgIHdL._AC_UL320_.jpg', name: 'Redmi 13C 5G', price: '10499', rating: 4 }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
#product-slider {
  background-color: #191b1d;
  color: #ffffff;
  padding: 3rem 0;
}

.product-slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card {
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-img-top {
  max-width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-body {
  padding: 1rem;
}

.card-title {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #ff9800;
}

.card-text {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.rating {
  display: flex;
  justify-content: center;
  align-items: center;
}

.fa-star {
  color: #ff9800;
  margin: 0 2px;
}

.fa-star.checked {
  color: #ff9800;
}

.swiper-button-next,
.swiper-button-prev {
  color: #ff9800;
}

.slider-container {
  position: relative;
}
p {
  font-size: 20px;
}
</style>
