<template>
  <div id="productModal">
    <div class="fixed z-30 w-full h-full left-0 top-0 overflow-auto bg-gray-700 bg-opacity-50 no-scrollbar" v-if="openModal">
      <div class="w-full h-full box-border px-2 py-20 md:px-20 lg:px-40">
        <div class="w-full bg-white border-2 border-gray-600 rounded-lg" style="min-height: 600px">
          <!-- close Bar -->
          <div class="w-full flex justify-end p-2">
            <div class="cursor-pointer bg-gray-500 p-2 rounded-full border-whote-700 border-2 hover:bg-gray-700 hover:border-gray-700 duration-500" @click="closeModal">
              <img src="../assets/images/icon/cancel.png" alt="" />
            </div>
          </div>

          <!-- content -->
          <div class="w-full">
            <!-- product Name -->
            <div class="w-full px-8">
              <h1 class="text-2xl tracking-tight sm:text-2xl md:text-3xl">
                <span class="block text-gray-700 xl:inline font-extrabold">{{productInfo.title}}</span>
              </h1>
            </div>
            <!-- product image -->
            <div class="w-full px-8 py-2">
              <img :src="productIMG" :alt="productInfo.title" width="100%">
            </div>

            <!-- introduce -->
            <div class="w-full px-8 py-2">
              <div class="w-full">
                <ul class="list-none text-teal-500">
                  <li v-for="item in productInfo.price_sale" :key="item.id">數量：{{item.num}} ／ 金額：{{item.price}}</li>
                </ul>
              </div>

              <div class="w-full mt-10">
                <h2 class="text-xl tracking-tight sm:text-xl md:text-2xl">
                  <span class="block text-gray-600 xl:inline font-extrabold">商品描述</span>
                </h2>

                <div class="w-full">
                  <p class="text-gray-600 px-6 mt-2">{{productInfo.description}}</p>
                </div>

                <div class="w-full mt-6">
                  <strong class="text-lg tracking-tight sm:text-lg md:text-xl">
                    <span class="block text-gray-600 xl:inline font-extrabold" v-if="productInfo.value == 'stick'">成分</span>
                    <span class="block text-gray-600 xl:inline font-extrabold" v-else>容量</span>
                  </strong>
                  <p>{{productInfo.capacity}}</p>
                </div>

                <div class="w-full mt-6" v-if="productInfo.saveMethod">
                  <strong class="text-lg tracking-tight sm:text-lg md:text-xl">
                    <span class="block text-gray-600 xl:inline font-extrabold">保存方法</span>
                  </strong>
                  <p>{{productInfo.saveMethod}}</p>
                </div>

                <div class="w-full mt-6" v-if="productInfo.notice">
                  <strong class="text-lg tracking-tight sm:text-lg md:text-xl">
                    <span class="block text-gray-600 xl:inline font-extrabold">提醒</span>
                  </strong>
                  <p>{{productInfo.notice}}</p>
                </div>

                <div class="w-full mt-6">
                  <strong class="text-lg tracking-tight sm:text-lg md:text-xl">
                    <span class="block text-gray-600 xl:inline font-extrabold">使用方法</span>
                  </strong>
                  <p class="mt-2">{{productInfo.useTime}}</p>
                  <ul class="list-disc mx-5 mt-1">
                    <li v-for="item in productInfo.useMethod" :key="item.id">{{item.text}}</li>
                  </ul>
                </div>

                <div class="w-full mt-6">
                  <strong class="text-lg tracking-tight sm:text-lg md:text-xl">
                    <span class="block text-gray-600 xl:inline font-extrabold" v-if="productInfo.value == 'stick'">滾輪</span>
                    <span class="block text-gray-600 xl:inline font-extrabold" v-else>主要成分</span>
                  </strong>
                  <ul class="list-disc mx-5 mt-1">
                    <li v-for="item in productInfo.mainIngredient" :key="item.id">{{item.text}}</li>
                  </ul>
                </div>

                <div class="w-full mt-6">
                  <strong class="text-lg tracking-tight sm:text-lg md:text-xl">
                    <span class="block text-gray-600 xl:inline font-extrabold" v-if="productInfo.value == 'stick'">為什麼要使用？</span>
                    <span class="block text-gray-600 xl:inline font-extrabold" v-else>全成分</span>
                  </strong>
                  <p>{{productInfo.ingredient}}</p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    openModal: {
      type: Boolean,
      default: false,
      require: true,
    },
    productIMG: {
      type: String,
      require: true,
    },
    productInfo: {
      type: Object,
      require: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>