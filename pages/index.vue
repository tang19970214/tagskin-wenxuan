<template>
  <div id="homePage">
    <div class="w-full">
      <!-- Banner -->
      <img src="../assets/images/banner1.jpg" alt="" width="100%">

      <!-- introduce -->
      <div class="w-full py-10 bg-gray-200">
        <div class="px-10 flex justify-around items-center flex-col sm:flex-row">
          <div class="bg-white p-4 rounded-lg shadow-lg my-3 flex items-center justify-center flex-col m-3 transform duration-500 w-full sm:w-32 md:w-48 lg:w-64 hover:scale-110 motion-reduce:transform-none" v-for="item in cardList" :key="item.id">

            <div class="w-full">
              <img class="mx-auto" :src="item.imgPath" :alt="item.title_ch" width="45">
            </div>

            <div class="w-full d-flex items-center flex-col text-center mt-3">
              <h3 class="text-lg leading-6 font-bold text-gray-700 tracking-widest max-w-40 truncate">
                {{item.title_ch}}
              </h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500 truncate">
                  {{item.title_en}}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- story -->
      <div class="relative bg-white overflow-hidden shadow-md">
        <div class="max-w-7xl mx-auto">
          <div class="relative z-10 pb-8 bg-white sm:pb-8 md:pb-16 lg:max-w-2xl lg:w-full lg:pb-20 xl:pb-28">

            <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <main class="mx-auto max-w-7xl p-4 sm:p-6">
              <div class="sm:text-center lg:text-left">
                <h1 class="text-2xl tracking-tight text-gray-900 sm:text-2xl md:text-3xl">
                  <span class="block text-gray-600 xl:inline font-extrabold">品牌故事</span>
                  <span class="block text-gray-400 xl:inline">Our Story</span>
                </h1>
                <p class="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
                  『#TAG SKIN』 代表著創辦人的精神涵義，注重肌膚管理的重要性。
                </p>
                <p class="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
                  『鑽研肌膚學理中的迷人之處，以純淨天然簡單為最高宗旨』愛自己並忠於自己，讓肌膚回歸美麗本質。
                </p>
                <p class="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
                  TAG SKIN 創立於2018年，專注致力於天然保養護膚管理，堅持純淨品質並嚴選天然高規格品質原料，杜絕所有有害的化學物質，以植物萃取為本源。
                </p>
                <p class="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
                  在研發過程中我們不斷探索友善肌膚環境的重要性並與<strong>台灣最具經驗的專業生物科技實驗室攜手合作</strong>，推出一系列極單純護膚成份的<strong>高品質高效能護膚品</strong>。
                </p>
                <div class="mt-8">
                  <strong class="text-gray-700 sm:text-xl sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">以肌之名宗旨：</strong>
                  <p class="mt-2 text-base text-gray-600 sm:mt-2 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-2 md:text-lg lg:mx-0">
                    我們認為只要有<strong>對於友善肌膚環境更棒的原物料</strong>，都應該<strong>回饋至消費者身上</strong>，並且採納每一位支持TAG SKIN好朋友們的寶貴意見，投入大量時間研究並在產品原物料上用心，在每一個階段將產品做必要性升級，讓消費者可以充分感受產品的高品質價值體現。
                  </p>
                </div>
                <div class="mt-8">
                  <p class="mt-3 text-base text-gray-600 sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5 md:text-md lg:mx-0">
                    #創辦人更希望能實質幫助正為肌膚困擾所苦的好朋友們以純淨極簡包裝更不使用誇大的行銷手法，TAG SKIN更注重要求產品品質與產品效能能讓每一位支持我們的好朋友們明白並感受肌膚的重要性！
                  </p>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img class="h-full w-full object-cover lg:w-full" src="../assets/images/story.jpg" alt="">
        </div>
      </div>

      <!-- product -->
      <div class="w-full p-2 md:p-6">
        <h1 class="text-2xl tracking-tight text-gray-900 sm:text-2xl md:text-3xl px-2 pt-3">
          <span class="block text-gray-600 xl:inline font-extrabold">熱門商品</span>
        </h1>

        <div class="w-full flex items-center justify-around grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div class="bg-white rounded-lg shadow-lg m-3 flex items-center justify-center flex-col transform duration-500 hover:scale-110 motion-reduce:transform-none" v-for="item in hotProductList" :key="item.id">

            <div class="w-full">
              <img class="mx-auto rounded-t-lg" :src="item.imgPath" :alt="item.title_ch">
            </div>

            <div class="w-full d-flex items-center flex-col text-left p-4">
              <h3 class="text-lg leading-6 font-bold text-gray-700 tracking-widest truncate">
                {{item.title}}
              </h3>
              <div class="mt-2">
                <p class="text-md text-gray-500">
                  {{item.price}}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- contact -->
      <div class="w-full">
        <div class="py-20 px-10 md:px-32">
          <h1 class="text-2xl tracking-tight text-gray-900 sm:text-2xl md:text-3xl px-5 pt-3">
            <span class="block text-gray-600 xl:inline font-extrabold">喜歡我們的商品嗎？</span>
          </h1>
          <div class="lg:px-32 py-10">
            <button class="w-full py-3 px-6 border-2 border-black shadow-sm text-sm font-bold tracking-widest text-black duration-500 bg-white hover:bg-black hover:text-white" @click="fastOrder">
              <span class="text-xl tracking-widest">點我快速下單</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <OrderModal :openModal="openModal" @closeModal="closeModal" />
  </div>
</template>

<script>
import OrderModal from "../components/OrderModal.vue";

export default {
  head: {
    title: "首頁",
  },
  components: { OrderModal },
  data() {
    return {
      cardList: [
        {
          id: 1,
          title_ch: "注重品質",
          title_en: "Focus On Quality",
          imgPath: require("../assets/images/icon/medal.svg"),
        },
        {
          id: 2,
          title_ch: "植物萃取",
          title_en: "Plant Extracts",
          imgPath: require("../assets/images/icon/natural.svg"),
        },
        {
          id: 3,
          title_ch: "改善肌膚",
          title_en: "Improve Skin",
          imgPath: require("../assets/images/icon/makeup.svg"),
        },
        {
          id: 4,
          title_ch: "精美包裝",
          title_en: "Beautiful Package",
          imgPath: require("../assets/images/icon/gift-box.svg"),
        },
      ],
      hotProductList: [
        {
          id: 1,
          imgPath: require("../assets/images/product/facial.jpg"),
          title: "裸光緊緻面膜",
          price: "NT$ 99",
        },
        {
          id: 2,
          imgPath: require("../assets/images/product/spray.jpg"),
          title: "抗藍光保濕噴霧",
          price: "NT$ 880",
        },
        {
          id: 3,
          imgPath: require("../assets/images/product/essence.jpg"),
          title: "蜂毒絲絨精萃",
          price: "NT$ 1,380",
        },
        {
          id: 4,
          imgPath: require("../assets/images/product/cream.jpg"),
          title: "光感美肌霜",
          price: "NT$ 1,380",
        },
      ],
      contactList: [
        {
          id: 1,
          type: "text",
          label: "姓名",
          placeholder: "請輸入姓名",
          value: "temp.name",
        },
        {
          id: 2,
          type: "text",
          label: "手機",
          placeholder: "請輸入手機",
          value: "temp.phone",
        },
        {
          id: 3,
          type: "text",
          label: "e-mail",
          placeholder: "請輸入電子郵件",
          value: "temp.email",
        },
        {
          id: 4,
          type: "select",
          label: "選擇商品",
          placeholder: "",
          value: "temp.product",
        },
      ],
      prod__list: [],
      openModal: false,
    };
  },
  methods: {
    getList() {
      this.prod__list = this.$store.state.productList;
    },
    fastOrder() {
      this.$store.dispatch("loadingHandler", true);
      this.openModal = true;
      setTimeout(() => {
        this.$store.dispatch("loadingHandler", false);
      }, 500);
    },
    submit() {},
    closeModal() {
      this.openModal = false;
    },
  },
  async mounted() {
    this.$store.dispatch("loadingHandler", true);
    await this.getList();
    setTimeout(() => {
      this.$store.dispatch("loadingHandler", false);
    }, 300);
  },
};
</script>