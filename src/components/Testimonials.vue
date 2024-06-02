
<template>
  <section id="testimonials" class="py-5">
    <div class="container">
      <h2 class="text-center mb-4">Customer Reviews</h2>
      <swiper :slides-per-view="1" :loop="true" :autoplay="{ delay: 3000 }" :breakpoints="{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }" class="mySwiper ">
        <swiper-slide v-for="(testimonial, index) in testimonials" :key="index">
          <div class="card mx-2 " style="max-width: 400px;">
            <div class="card-body text-center ">
              <img :src="testimonial.image" class="rounded-circle mb-3" :alt="'Customer ' + (index + 1)" style="width: 100px;">
              <h5 class="card-title">{{ testimonial.name }}</h5>
              <p class="card-text">"{{ testimonial.text }}"</p>
              <div class="rating">
                <span v-for="star in 5" :key="star" class="fa fa-star" :class="{ checked: star <= testimonial.rating }"></span>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';


export default {
  name: 'Testimonials',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      testimonials: [
        {
          image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg',
          name: 'John Doe',
          text: 'Great service and amazing products! Highly recommend this store.',
          rating: 5
        },
        {
          image: 'https://img.freepik.com/free-photo/internet-banking-ecommerce-concept-happy-young-smiling-female-with-afro-hairstyle-uses-modern-cell-phone-credit-card-online-shopping_273609-3392.jpg',
          name: 'Jane Smith',
          text: 'I love the variety of products available. Fast delivery and excellent customer support.',
          rating: 4
        },
        {
          image: 'https://as1.ftcdn.net/v2/jpg/02/00/90/24/1000_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg',
          name: 'Emily Johnson',
          text: 'Fantastic shopping experience. The quality of the products is top-notch.',
          rating: 5
        },
        
        {
          image: 'https://www.shutterstock.com/shutterstock/photos/1617540484/display_1500/stock-photo-closeup-photo-of-amazing-short-hairdo-lady-looking-up-empty-space-deep-thinking-creative-person-arm-1617540484.jpg',
          name: 'Garima',
          text: 'Great service and amazing products! Highly recommend this store.',
          rating: 5
        }
      ]
    };
  }
};
</script>

<style scoped>
#testimonials{
background-color:black;
}
h2 {
color:#ff9800;
}
.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.card-title {
  font-size: 1.25rem;
  font-weight: bold;
}
.card-text {
  font-style: italic;
}
.rating .fa-star {
  color: #ddd;
}
.rating .fa-star.checked {
  color: #f39c12;
}

</style>
