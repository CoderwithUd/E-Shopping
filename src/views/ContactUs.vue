<template>
  <div id="contact-us-page">
    <div class="animated-heading">
      <h1>Contact Us</h1>
    </div>
    <section id="contact" class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="contact-sub-left mx-lg-3 mt-4 mt-lg-0">
              <div class="contact-info">
                <p><i class="fa-solid fa-location-dot mx-3"></i> 123 Example Street<br>City, State, Zip Code<br>Country</p>
                <p><i class="fa-solid fa-phone mx-3"></i> +1 234 567 8901</p>
                <p><i class="fa-solid fa-envelope mx-3"></i> info@example.com</p>
              </div>
              <p class="contact-message mt-4">
                Our team is available during business hours to assist you with any inquiries or assistance you may need. Whether it's about our products, services, or anything else, we're here to help!
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="contact-sub-right mt-4 mt-lg-0">
              <form class="row g-3">
                <div class="col-12">
                  <label for="inputName" class="form-label">Your Name</label>
                  <input type="text" class="form-control" id="inputName" placeholder="Your Name">
                </div>
                <div class="col-12">
                  <label for="inputEmail4" class="form-label">Your Email</label>
                  <input type="email" class="form-control" id="inputEmail4" placeholder="Your Email">
                </div>
                <div class="col-12">
                  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Message..."></textarea>
                </div>
                <div class="col-12">
                  <button type="button" class="btn btn-primary">Submit your Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactUsPage',
}
</script>

<style scoped>
#contact-us-page {
  text-align: center;
  color: #ffb74d;
  background-color: #121212;
}

.animated-heading {
  background-image: url('https://img.freepik.com/premium-photo/shopping-bags-female-hand-with-holiday-sparcles-pink-background-with-copy-space_150893-2629.jpg');
  background-size: cover;
  background-position: center;
  padding: 50px 0;
  margin-bottom: 30px;
  position: relative;
}

.animated-heading h1 {
  font-size: 3rem;
  color: white;
  animation: text-animate 3s ease-in-out infinite;
}

@keyframes text-animate {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.container {
  max-width: 1140px;
  margin: 0 auto;
}

.contact-sub-left, .contact-sub-right {
  background-color: #333333;
  padding: 20px;
  border-radius: 10px;
}

.contact-sub-left p {
  margin: 10px 0;
  color: #ffffff;
}

.contact-sub-left .fa-solid {
  color: #ff9800;
}

.contact-message {
  font-size: 18px;
  line-height: 1.6;
  margin-top: 20px;
  color: #ffffff;
}

.form-label {
  color: white;
  text-align: start; /* Align label text at the start position */
}

.form-control {
  background-color: #333333;
  color: #ffffff;
  border: 1px solid #ff9800;
  border-radius: 5px;
}

.btn-primary {
  background-color: #ff9800;
  border-color: #ff9800;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
}

.btn-primary:hover {
  background-color: #ffba7e;
  border-color: #ffba7e;
}

@media (max-width: 768px) {
  .animated-heading h1 {
    font-size: 2rem;
  }
  .contact-sub-left, .contact-sub-right {
    padding: 15px;
    border-radius: 5px;
  }
}
</style>
