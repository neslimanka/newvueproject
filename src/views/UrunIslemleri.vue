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
      />
    </label>
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
    <label class="flex flex-col">
      <span class="text-md m-4 font-medium">Fiyat</span>
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
        placeholder="Ürün fiyatı giriniz."
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
      ></textarea>
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
export default {
  name: "appUrunIslemleri",
};
</script>
