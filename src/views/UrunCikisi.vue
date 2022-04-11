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
      >
        <option
          v-for="product in getProducts"
          :key="product.key"
          :value="product.key"
        >
          {{ product.title }}
        </option>
      </select>
    </label>
    <div
      class="
        flex flex-col
        border-2 border-dotted border-pink-700
        w-4/5
        m-auto
        mt-2
      "
    >
      <div class="flex flex-row justify-around">
        <span class="bg-green-500 rounded-md">Stok:{{ product.count }}</span>
        <span class="bg-blue-600 rounded-md">Fiyat: {{ product.price }}</span>
      </div>
      <div class="flex flex-col w-4/5 m-auto my-2 border border-yellow-500">
        <p>{{ product.description }}</p>
      </div>
    </div>
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
  computed: {
    ...mapGetters(["getProducts"]),
  },
  created() {
    console.log(this.getProducts);
  },
};
</script>
