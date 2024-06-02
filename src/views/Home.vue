<template>
  <div>
    <Banner />
    <main>
      <LatestProduct />
      <Sale />
      <Item />
      <SummerOffer />
      <LogoSlider />
      <Testimonials />
    </main>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import LatestProduct from "../components/LatestProduct.vue";
import Item from "../components/Item.vue";
import SummerOffer from "../components/SummerOffer.vue";
import Sale from "../components/Sale.vue";
import LogoSlider from "../components/LogoSlider.vue";
import TextSlider from "../components/TextSlider.vue";
import Testimonials from "../components/Testimonials.vue";


export default {
  name: "Home",
  components: {
    Banner,
    LatestProduct,
    Sale,
    Item,
    TextSlider,
    SummerOffer,
    LogoSlider,
    Testimonials,
  },
};
</script>
