<template>
  <div id="cart-page" class="dark-theme">
    <div class="container mt-5">
      <h1 class="text-center text-white mb-5">Shopping Cart</h1>

      <div class="shopping-cart">
        <div class="column-labels d-none d-lg-flex">
          <label class="product-image">Image</label>
          <label class="product-details">Product</label>
          <label class="product-price">Price</label>
          <label class="product-quantity">Quantity</label>
          <label class="product-removal">Remove</label>
          <label class="product-line-price">Total</label>
        </div>

        <div v-for="product in cartItems" :key="product.id" class="product">
          <div class="product-image">
            <img :src="product.thumbnail" alt="Product Image" class="img-thumbnail">
          </div>
          <div class="product-details">
            <div class="product-title">{{ product.title }}</div>
            <p class="product-description d-lg-block d-none">{{ product.description }}</p>
          </div>
          <div class="product-price">{{ product.price }}</div>
          <div class="product-quantity">
            <input type="number" v-model="product.quantity" min="1">
          </div>
          <div class="product-removal">
            <button class="remove-product btn btn-danger" @click="removeProduct(product.id)">
              Remove
            </button>
          </div>
          <div class="product-line-price">{{ calculateTotal(product) }}</div>
        </div>

        <div class="totals my-5">
          <div class="totals-item">
            <label>Subtotal</label>
            <div class="totals-value" id="cart-subtotal">{{ calculateSubtotal() }}</div>
          </div>
          <div class="totals-item">
            <label>Tax (18%)</label>
            <div class="totals-value" id="cart-tax">{{ calculateTax() }}</div>
          </div>
          <div class="totals-item">
            <label>Shipping</label>
            <div class="totals-value" id="cart-shipping">15.00</div> <!-- Dummy shipping cost -->
          </div>
          <div class="totals-item totals-item-total">
            <label>Grand Total</label>
            <div class="totals-value" id="cart-total">{{ calculateGrandTotal() }}</div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="container mt-3">
      <div class="row justify-content-end">
        <div class="col-lg-4 col-md-6">
          <button class="checkout btn btn-primary btn-block"  @click="handleCheckout">
            Checkout
          </button>
        </div>
      </div>
    </div>
       <!-- Thank You Popup -->
    <ThankYouPopup :visible="isPopupVisible" @close="isPopupVisible = false" />
  </div>
</template>

<script>
import ThankYouPopup from './ThankYouPopup.vue';
export default {
  name: 'CartPage',
  components: {
    ThankYouPopup
  },
  data() {
    return {
      cartItems: [],
      isPopupVisible: false
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
          this.cartItems = data.products.slice(0, 2);
          this.cartItems.forEach(item => {
            item.quantity = 1;
          });
        })
        .catch(err => {
          console.error('Error fetching products:', err);
        });
    },
    removeProduct(productId) {
      this.cartItems = this.cartItems.filter(item => item.id !== productId);
    },
    calculateTotal(product) {
      return (product.price * product.quantity).toFixed(2);
    },
    calculateSubtotal() {
      return this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    },
    calculateTax() {
      return (this.calculateSubtotal() * 0.18).toFixed(2);
    },
    calculateGrandTotal() {
      return (parseFloat(this.calculateSubtotal()) + parseFloat(this.calculateTax()) + 15.00).toFixed(2);
    },
    handleCheckout() {
      // Handle your checkout logic here

      // Show the thank you popup
      this.isPopupVisible = true;
    }
  }
};
</script>

<style scoped>
.dark-theme {
  background-color: #121212;
  color: #fff;
  padding: 20px;
}

.shopping-cart {
  margin-top: -45px;
}

.column-labels {
  label {
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid #eee;
  }

  .product-image,
  .product-details,
  .product-removal {
    text-indent: -9999px;
  }
}

.product {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 5px;
}

.product-image {
  flex: 0 0 100px;
  margin-right: 20px;
}

.product-image img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

.product-details {
  flex: 1;
}

.product-title {
  font-weight: bold;
  margin-bottom: 5px;
}

.product-description {
  margin-bottom: 10px;
  line-height: 1.4em;
}

.product-price,
.product-quantity,
.product-removal,
.product-line-price {
  flex: 0 0 10%;
  text-align: center;
}

.product-quantity input {
  width: 40px;
  text-align: center;
}

.remove-product {
  padding: 6px 12px;
  border-radius: 3px;
}

.totals {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.totals-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.totals-item label {
  font-weight: bold;
}

.checkout {
  background-color: #ff9800;
  padding: 10px 25px;
  font-size: 16px;
  border-radius: 3px;
}

.checkout:hover {
  background-color: #ffa726;
}

@media (max-width: 992px) {
  .product {
    flex-wrap: wrap;
  }
  .product-image {
    flex: 0 0 100%;
    margin-bottom: 10px;
  }
  .product-details {
    flex: 1 1 100%;
    margin-bottom: 10px;
  }
  .product-price,
  .product-quantity,
  .product-removal,
  .product-line-price {
    flex: 0 0 50%;
    text-align: center;
  }
  .totals-item label {
    flex: 1 1 50%;
  }
}
</style>
