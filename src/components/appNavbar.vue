<template>
  <div>
    <nav
      class="flex flex-auto justify-around py-6 mx-auto bg-indigo-300 font-bold"
    >
      <div class="space-x-8 flex flex-row">
        <router-link to="/urun-listesi" class="text-white"
          >Ürün Listesi</router-link
        >
        <router-link to="/urun-islemleri" class="text-white"
          >Ürün İşlemleri</router-link
        >
        <router-link to="/urun-cikisi" class="text-white"
          >Ürün Çıkışı</router-link
        >
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "appNavbar",
};
</script>
