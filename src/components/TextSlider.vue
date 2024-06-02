<template>
  <div class="text-slider">
    <div class="text-track">
      <div class="text-item" v-for="(text, index) in texts.concat(texts)" :key="index + Math.random()">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextSlider',
  data() {
    return {
      texts: ['Sale', 'Sale', 'Sale', 'Discount upto 50%', 'New Arrival', 'Limited Offer','Sale', 'Sale', 'Sale' ,'Discount upto 50%'],
    };
  },
};
</script>

<style scoped>

</style>
