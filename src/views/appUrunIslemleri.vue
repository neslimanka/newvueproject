<template>
  <div class="flex flex-col m-auto border-2 mt-6 rounded-lg w-1/4">
    <span class="font-medium text-lg m-auto my-2"> Ürün İşlemleri</span>
    <hr />
    <label class="flex flex-col">
      <span class="text-md m-4 font-medium">Ürün Adı</span>
      <input
        type="text"
        name="name"
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
        placeholder="Ürün adını giriniz."
        v-model="product.title"
      />
    </label>
    <label class="flex flex-col">
      <span class="text-md m-4 font-medium">Adet</span>
      <input
        type="number"
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
        placeholder="Ürün adetini giriniz."
        v-model="product.count"
      />
    </label>
    <label class="flex flex-col">
      <span class="text-md m-4 font-medium">Fiyat</span>
      <input
        type="number"
        name="name"
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
        placeholder="Ürün fiyatı giriniz."
        v-model="product.price"
      />
    </label>
    <label class="flex flex-col">
      <span class="text-md m-4 font-medium">Açıklama</span>
      <textarea
        id="message"
        rows="4"
        class="
          p-2.5
          w-4/5
          text-sm
          rounded-lg
          border
          focus:outline-none
          m-auto
          focus:ring-1
        "
        placeholder="Ürüne ait bir açıklama giriniz."
        v-model="product.description"
      ></textarea>
    </label>
    <div class="flex justify-start mt-3 ml-4 mb-4">
      <button
        type="button"
        class="
          bg-blue-500
          text-white
          font-semibold
          py-2
          px-6
          rounded
          disabled:opacity-25
        "
        :disabled="saveEnabled"
        @click="saveProduct"
      >
        Kaydet
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "appUrunIslemleri",
  data() {
    return {
      product: {
        title: "",
        count: null,
        price: null,
        description: "",
      },
      saveButtonClicked: false,
    };
  },
  methods: {
    saveProduct() {
      this.saveButtonClicked = true;
      this.$store.dispatch("saveProduct", this.product);
    },
  },
  computed: {
    saveEnabled() {
      if (
        this.product.title.length > 0 &&
        this.product.count > 0 &&
        this.product.price > 0 &&
        this.product.description.length > 0
      ) {
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
    beforeRouteLeave(to, from, next) {
      if (
        (this.product.title.length > 0 ||
          this.product.count > 0 ||
          this.product.price > 0 ||
          this.product.description.length > 0) &&
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
