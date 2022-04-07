<template>
  <div class="container flex flex-col m-auto border-2 mt-6 rounded-lg w-2/5">
    <p class="font-semibold text-md m-4 justify-start">Ürün Listesi</p>
    <hr />
    <div class="flex flex-col bg-yellow-200 m-6">
      <div>
        <p class="text-yellow-600">Henüz Burada Bir Kayıt Bulamadık.</p>
      </div>
      <div>
        <p class="text-yellow-600">
          Kayıt Eklemek için
          <a href="/urun-islemleri" class="text-blue-700">Ürün İşlemlerinden</a>
          yararlanabiliriz.
        </p>
      </div>
    </div>
    <div class="m-auto">
      <div class="shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left">
          <thead class="text-xs uppercase">
            <tr>
              <th scope="col" class="px-6 py-3">id</th>
              <th scope="col" class="px-6 py-3">Ürün Adı</th>
              <th scope="col" class="px-6 py-3">Adet</th>
              <th scope="col" class="px-6 py-3">Fiyat</th>
              <th scope="col" class="px-6 py-3">Açıklama</th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody v-for="item in getTradeResult" :key="item.key">
            <tr class="border-b bg-gray-100">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {{ item.key }}
              </th>
              <td class="px-6 py-4">{{ item.title }}</td>
              <td class="px-6 py-4 bg-green-400">{{ item.count }}</td>
              <td class="px-6 py-4">{{ item.price }}</td>
              <td class="px-6 py-4">{{ item.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "appUrunListesi",
  created() {
    this.$store.dispatch("setTradeResult");
  },
  computed: {
    ...mapGetters(["getTradeResult"]),
  },
};
</script>
