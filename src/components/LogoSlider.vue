<template>
  <div class="logo-slider">
    <div class="logo-track">
      <div class="logo" v-for="logo in logos.concat(logos)" :key="logo.name + Math.random()">
        <img :src="logo.src" :alt="logo.name" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogoSlider',
  data() {
    return {
      logos: [
        { name: '1', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCj5cbas4JAtU6nMKyg15n4QrqvzNlZd0bmw&s' },
        { name: '2', src: 'https://cdn.logojoy.com/wp-content/uploads/2018/05/30143359/2_big1-768x591.png' },
        { name: '3', src: 'https://penji.co/wp-content/uploads/2019/05/hugo-boss-black.jpg' },
        { name: '4', src: 'https://cdn.logojoy.com/wp-content/uploads/2018/05/30143407/512-768x591.png' },
        { name: '5', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxlL6xtDUTdS_LCHJSGmXEp5PIlXOcNVLxmg&s' },
        { name: '6', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQwas91ZA3zExW3-x2nnKNuD4JnOToUPzK4w&s' },
        { name: '7', src: 'https://m.media-amazon.com/images/I/31HkYtnMOKL._AC_UF1000,1000_QL80_.jpg' },
        { name: '8', src: 'https://www.freeiconspng.com/thumbs/nike-logo/download-nike-desktop-background-picture-1.png' },
        { name: '9', src: 'https://mrwallpaper.com/images/high/mac-cosmetics-classic-logo-yj2rtmolaoz4ovo4.jpg' },
        { name: '10', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQjiwGB3greD4JxjdBzeu1x4Qx7Bx9OLmvRA&s' },
        { name: '12', src: 'https://media.licdn.com/dms/image/D4D22AQELX5KtyeOedQ/feedshare-shrink_800/0/1696043347975?e=2147483647&v=beta&t=aMKJY-Uh0a4jWWODK-VDgz00FKjQ2W79MvckKdX3bL0' },
        { name: '12', src: 'https://www.indiablooms.com/finance_pic/2017/UBER-1495736059.jpg' },
        { name: '13', src: 'https://content.jdmagicbox.com/comp/delhi/d2/011pxx11.xx11.120120113758.s4d2/catalogue/fastrack-store-ambedkar-road-delhi-wrist-watch-dealers-fastrack-fkra5y6sdh.jpg' },
        { name: '14', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm8I5EOZtbyT_ZzYalO8VSNImWAyI0MVddNQ&s' },
        { name: '15', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYHCRNZvkwB3YTVPy_ez_5xRXNvqF892a68w&s' },
      ],
    };
  },
};
</script>

<style scoped>
.logo-slider {
  overflow: hidden;
  width: 100%;
  background-color: black;
  padding: 20px 0;
}

.logo-track {
  display: flex;
  width: calc(2 * 100%);
  animation: scroll 30s linear infinite;
}

.logo {
  flex: 0 0 auto;
  width: 150px;
  margin: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo img {
  max-width: 100%;
  height: auto;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Dark mode styles */
:root {
  --bg-color: #000;
  --text-color: #fff;
}

body.dark-mode {
  --bg-color: #000;
  --text-color: #fff;
}

body.light-mode {
  --bg-color: #fff;
  --text-color: #000;
}
</style>
