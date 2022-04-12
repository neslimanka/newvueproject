<template>
  <footer class="bg-gray-300 p-2 w-full bottom-0 fixed">
    <div class="flex flex-row">
      <div class="flex flex-row m-auto mr-4">
        <span class="mx-4"
          >Alış Tutarı:
          <h2 class="bg-red-700 rounded-md">
            {{ getTradeResult.purchase | currency }}
          </h2></span
        >
        <span class="mx-4"
          >Satış Tutarı:
          <h2 class="bg-yellow-400 rounded-md">
            {{ getTradeResult.sale | currency }}
          </h2></span
        >
        <span class="mx-4"
          >Bakiye:
          <h2 class="bg-blue-600 rounded-md">
            {{ getTradeResult.balance | currency }}
          </h2></span
        >
      </div>
    </div>
  </footer>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "appFooter",
  computed: mapGetters(["getTradeResult"]),
};
</script>