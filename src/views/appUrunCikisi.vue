<template>
  <div class="flex flex-col m-auto border-2 mt-6 rounded-lg w-1/4">
    <span class="font-medium text-lg m-auto my-2"> Ürün Çıkışı</span>
    <hr />
    <label class="flex flex-col">
      <span class="text-md m-4 font-medium">Ürün Adı</span>
      <select
        class="
          m-auto
          w-4/5
          form-select
          px-3
          py-3
          bg-white
          border border-solid
          rounded
          focus:ring-1 focus:outline-none
        "
        v-model="selectedProduct"
        @change="productSelected"
      >
        <option selected disabled>Lütfen Bir Ürün Seçiniz.</option>
        <option
          v-for="product in getProducts"
          :key="product.key"
          :value="product.key"
        >
          {{ product.title }}
        </option>
      </select>
    </label>
    <transition name="fade" mode="out-in">
      <div
        class="
          flex flex-col
          border-2 border-dotted border-pink-700
          w-4/5
          m-auto
          mt-2
        "
        v-if="product !== null"
      >
        <div class="flex flex-row justify-around">
          <span class="bg-green-500 rounded-md">Stok:{{ product.count }}</span>
          <span class="bg-blue-600 rounded-md"
            >Fiyat: {{ product.price | currency }}</span
          >
        </div>
        <div class="flex flex-col w-4/5 m-auto my-2 border border-yellow-500">
          <p>{{ product.description }}</p>
        </div>
      </div>
    </transition>
    <label class="flex flex-col">
      <span class="text-md m-4 font-medium">Adet</span>
      <input
        type="text"
        name="count"
        class="
          m-auto
          px-6
          py-4
          border
          shadow-sm
          focus:outline-none
          w-4/5
          rounded-md
          sm:text-sm
          focus:ring-1
        "
        v-model="product_count"
        placeholder="Ürün adetini giriniz."
      />
    </label>
    <div class="flex justify-start mt-3 ml-4 mb-4">
      <button
        class="
          bg-blue-500
          hover:bg-blue-400
          text-white
          font-semibold
          py-2
          px-6
          rounded
        "
        @click="save"
        :disabled="saveEnabled"
      >
        Kaydet
      </button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "appUrunCikisi",
  data() {
    return {
      selectedProduct: null,
      product: null,
      product_count: null,
      saveButtonClicked: false,
    };
  },
  computed: {
    ...mapGetters(["getProducts"]),
    saveEnabled() {
      if (this.selectedProduct !== null && this.product_count > 0) {
        return false;
      } else {
        return true;
      }
    },
    isLoading() {
      if (this.saveButtonClicked) {
        return {
          display: "block",
        };
      } else {
        return {
          display: "none",
        };
      }
    },
  },
  methods: {
    productSelected() {
      console.log(this.selectedProduct);
      this.product = this.$store.getters.getProduct(this.selectedProduct)[0];
    },
    save() {
      this.saveButtonClicked = true;
      let product = {
        key: this.selectedProduct,
        count: this.product_count,
      };
      this.$store.dispatch("sellProduct", product);
    },
    beforeRouteLeave(to, from, next) {
      if (
        (this.selectedProduct !== null || this.product_count > 0) &&
        !this.saveButtonClicked
      ) {
        if (
          confirm(
            "Kaydedilmemiş değişiklikler var. Yine de çıkmak istiyor musunuz?"
          )
        ) {
          next();
        } else {
          next(false);
        }
      } else {
        next();
      }
    },
  },
};
</script>
