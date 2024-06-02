<template>
  <div class="popup-overlay" v-if="visible">
    <div class="popup-content">
      <h2>Thank You for Shopping!</h2>
      <p>We appreciate your business.</p>
      <button class="close-btn" @click="closePopup">Close</button>
      <div class="fireworks">
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="balloon"></div>
        <div class="balloon"></div>
        <div class="ribbon"></div>
        <div class="ribbon"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closePopup() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  background: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 80%;
  animation: fadeIn 0.5s;
  color: black;
}

.popup-content h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.popup-content p {
  font-size: 18px;
  margin-bottom: 20px;
}

.close-btn {
  background-color: #ff9800;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.close-btn:hover {
  background-color: #ffa726;
}

.fireworks {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  border-radius: 10px;
}

.firework {
  position: absolute;
  width: 5px;
  height: 80px;
  background: linear-gradient(to top, #ab0e73, rgba(49, 92, 176, 0));
  animation: firework 1.5s infinite;
}

.star, .balloon, .ribbon {
  position: absolute;
  width: 30px;
  height: 30px;
  opacity: 0;
  animation: float 3s infinite;
}

.star {
  background: url('https://thumbs.dreamstime.com/b/golden-star-27179479.jpg') no-repeat center center / cover;
}

.balloon {
  background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNhtTEczW-2NalQnjE0bArfV3Rpbcy9oOdxw&s') no-repeat center center / cover;
}

.ribbon {
  background: url('https://s3.envato.com/files/303802143/IMG_0068-Edit-Edit-Edit-3_20180206.jpg') no-repeat center center / cover;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes firework {
  0% {
    transform: scaleY(0);
    opacity: 1;
  }
  50% {
    transform: scaleY(1);
    opacity: 0.5;
  }
  100% {
    transform: scaleY(0);
    opacity: 0;
  }
}

@keyframes float {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  50% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-100px);
  }
}

.firework:nth-child(1) {
  left: 20%;
  animation-delay: 0s;
}
.firework:nth-child(2) {
  left: 50%;
  animation-delay: 0.5s;
}
.firework:nth-child(3) {
  left: 80%;
  animation-delay: 1s;
}

.star:nth-child(4) {
  left: 10%;
  animation-delay: 0s;
}
.star:nth-child(5) {
  left: 40%;
  animation-delay: 1s;
}
.star:nth-child(6) {
  left: 70%;
  animation-delay: 2s;
}

.balloon:nth-child(7) {
  left: 30%;
  animation-delay: 0.5s;
}
.balloon:nth-child(8) {
  left: 60%;
  animation-delay: 1.5s;
}

.ribbon:nth-child(9) {
  left: 20%;
  animation-delay: 1s;
}
.ribbon:nth-child(10) {
  left: 80%;
  animation-delay: 2.5s;
}
</style>
