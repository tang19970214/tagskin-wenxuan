<template>
  <div id="product" :style="{'overflow: hidden': openModal == true}">
    <div class="w-full p-10">
      <!-- title -->
      <div class="w-full pb-3 border-b-2">
        <h1 class="text-2xl tracking-tight text-gray-900 sm:text-2xl md:text-3xl px-2 pt-3">
          <span class="block text-gray-600 xl:inline font-extrabold">所有商品</span>
        </h1>
      </div>

      <!-- searchBox -->
      <div class="hidden md:block">
        <div class="w-full pt-5 flex items-center overflow-x-auto md:overflow-hidden md:flex-wrap">
          <span class="px-3 py-2 mr-3 mb-3 text-center border-2 text-gray-500 rounded-lg cursor-pointer duration-300 hover:bg-gray-300 hover:border-gray-500 hover:text-gray-700 hover:font-bold" style="min-width: 6rem; max-width: 6rem" :class="{'bg-gray-300 border-gray-500 text-gray-700 font-bold cursor-not-allowed': defaultTag === item.value}" v-for="item in tagList" :key="item.id" @click="getValue(item)">{{item.label}}</span>
        </div>
      </div>

      <div class="block md:hidden w-full pt-5">
        <select class="w-full border rounded-lg p-1" v-model="defaultTag">
          <option :value="item.value" v-for="item in tagList" :key="item.id">{{item.label}}</option>
        </select>
      </div>

      <!-- product -->
      <div class="w-full mt-5">
        <div class="w-full flex items-center justify-around grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div class="bg-white rounded-lg shadow-lg m-3 flex items-center justify-center flex-col transform duration-500 hover:scale-110 motion-reduce:transform-none cursor-pointer" v-for="item in filterProd(productList)" :key="item.id" @click="openProduct(item)">

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

      <ProductModal :openModal="openModal" :productIMG="productIMG" :productInfo="productInfo" @closeModal="closeModal" />

    </div>
  </div>
</template>

<script>
import ProductModal from "../components/ProductModal.vue";

export default {
  head: {
    title: "商品列表",
  },
  components: { ProductModal },
  data() {
    return {
      defaultTag: "all",
      tagList: [
        {
          id: 1,
          label: "全部",
          value: "all",
        },
        {
          id: 2,
          label: "洗面乳",
          value: "cleanser",
        },
        {
          id: 3,
          label: "去角質",
          value: "exfoliate",
        },
        {
          id: 4,
          label: "面膜",
          value: "mask",
        },
        {
          id: 5,
          label: "化妝水",
          value: "toner",
        },
        {
          id: 6,
          label: "精華",
          value: "essence",
        },
        {
          id: 7,
          label: "乳液",
          value: "lotion",
        },
        {
          id: 8,
          label: "隔離霜",
          value: "basecream",
        },
        {
          id: 9,
          label: "保濕噴霧",
          value: "spray",
        },
        {
          id: 10,
          label: "卸妝",
          value: "makeup",
        },
        {
          id: 11,
          label: "痘膏",
          value: "acnecream",
        },
        {
          id: 12,
          label: "美容棒",
          value: "stick",
        },
      ],
      //   productList: [
      //     {
      //       id: 1,
      //       imgPath: require("../assets/images/product/cleanser.jpg"),
      //       title: "裸光胺基酸潔顏乳",
      //       price: "NT$ 680",
      //       price_sale: [
      //         {
      //           id: 1,
      //           num: "1",
      //           price: "NT$ 680",
      //         },
      //       ],
      //       value: "cleanser",
      //     },
      //     {
      //       id: 2,
      //       imgPath: require("../assets/images/product/creamFilm.jpg"),
      //       title: "酵素柔焦霜膜",
      //       price: "NT$ 1,380",
      //       price_sale: [
      //         {
      //           id: 1,
      //           num: "1",
      //           price: "NT$ 1,380",
      //         },
      //         {
      //           id: 2,
      //           num: "2",
      //           price: "NT$ 2,600",
      //         },
      //       ],
      //       value: "exfoliate",
      //     },
      //     {
      //       id: 3,
      //       imgPath: require("../assets/images/product/facial.jpg"),
      //       title: "裸光緊緻面膜",
      //       price: "NT$ 99",
      //       price_sale: [
      //         {
      //           id: 1,
      //           num: "1~9",
      //           price: "NT$ 99",
      //         },
      //         {
      //           id: 2,
      //           num: "10~99",
      //           price: "NT$ 90",
      //         },
      //         {
      //           id: 3,
      //           num: "100以上",
      //           price: "NT$ 80",
      //         },
      //       ],
      //       value: "mask",
      //     },
      //     {
      //       id: 4,
      //       imgPath: require("../assets/images/product/funcWater.jpg"),
      //       title: "裸光活化機能水",
      //       price: "NT$ 1,380",
      //       price_sale: [
      //         {
      //           id: 1,
      //           num: "1",
      //           price: "NT$ 1,380",
      //         },
      //         {
      //           id: 2,
      //           num: "2",
      //           price: "NT$ 2,600",
      //         },
      //       ],
      //       value: "toner",
      //     },
      //     {
      //       id: 5,
      //       imgPath: require("../assets/images/product/essence.jpg"),
      //       title: "蜂毒絲絨精萃",
      //       price: "NT$ 1,380",
      //       price_sale: [
      //         {
      //           id: 1,
      //           num: "1",
      //           price: "NT$ 1,380",
      //         },
      //         {
      //           id: 2,
      //           num: "2",
      //           price: "NT$ 2,600",
      //         },
      //       ],
      //       value: "essence",
      //     },
      //     {
      //       id: 6,
      //       imgPath: require("../assets/images/product/cream.jpg"),
      //       title: "光感美肌霜",
      //       price: "NT$ 1,380",
      //       price_sale: [
      //         {
      //           id: 1,
      //           num: "1",
      //           price: "NT$ 1,380",
      //         },
      //         {
      //           id: 2,
      //           num: "2",
      //           price: "NT$ 2,600",
      //         },
      //       ],
      //       value: "lotion",
      //     },
      //     {
      //       id: 7,
      //       imgPath: require("../assets/images/product/funcCream.jpg"),
      //       title: "裸光機能霜",
      //       price: "NT$ 1,280",
      //       price_sale: [
      //         {
      //           id: 1,
      //           num: "1",
      //           price: "NT$ 1,280",
      //         },
      //         {
      //           id: 2,
      //           num: "2",
      //           price: "NT$ 2,400",
      //         },
      //       ],
      //       value: "lotion",
      //     },
      //     {
      //       id: 8,
      //       imgPath: require("../assets/images/product/baseCream.jpg"),
      //       title: "裸光絲緞隔離霜",
      //       price: "NT$ 1,280",
      //       price_sale: [
      //         {
      //           id: 1,
      //           num: "1",
      //           price: "NT$ 1,280",
      //         },
      //         {
      //           id: 2,
      //           num: "2",
      //           price: "NT$ 2,400",
      //         },
      //       ],
      //       value: "basecream",
      //     },
      //     {
      //       id: 9,
      //       imgPath: require("../assets/images/product/spray.jpg"),
      //       title: "抗藍光保濕噴霧",
      //       price: "NT$ 880",
      //       price_sale: [
      //         {
      //           id: 1,
      //           num: "1",
      //           price: "NT$ 880",
      //         },
      //       ],
      //       value: "spray",
      //     },
      //     {
      //       id: 10,
      //       imgPath: require("../assets/images/product/makeupRemover.jpg"),
      //       title: "裸光仙人掌卸妝露",
      //       price: "NT$ 1,280",
      //       price_sale: [
      //         {
      //           id: 1,
      //           num: "1",
      //           price: "NT$ 1,280",
      //         },
      //       ],
      //       value: "makeup",
      //     },
      //     {
      //       id: 11,
      //       imgPath: require("../assets/images/product/balanceCream.jpg"),
      //       title: "植萃平衡膏",
      //       price: "NT$ 1,080",
      //       price_sale: [
      //         {
      //           id: 1,
      //           num: "1",
      //           price: "NT$ 1,080",
      //         },
      //         {
      //           id: 2,
      //           num: "2",
      //           price: "NT$ 2,000",
      //         },
      //       ],
      //       value: "acnecream",
      //     },
      //     {
      //       id: 12,
      //       imgPath: require("../assets/images/product/stick.jpg"),
      //       title: "水晶美容棒",
      //       price: "NT$ 1,280",
      //       price_sale: [
      //         {
      //           id: 1,
      //           num: "1",
      //           price: "NT$ 1,280",
      //         },
      //       ],
      //       value: "stick",
      //     },
      //   ],
      productList: [],
      openModal: false,
      productIMG: "",
      productInfo: {},
    };
  },
  computed: {
    filterProd() {
      return (data) => {
        let newData;
        if (this.defaultTag == "all") {
          newData = data;
        } else {
          newData = data.filter((res) => res.value === this.defaultTag);
        }
        return newData;
      };
    },
  },
  methods: {
    getValue(item) {
      this.defaultTag = item.value;
    },
    openProduct(item) {
      this.$store.dispatch("loadingHandler", true);
      this.openModal = true;
      this.productIMG = item.imgPath;
      this.productInfo = item;
      setTimeout(() => {
        this.$store.dispatch("loadingHandler", false);
      }, 200);
    },
    closeModal() {
      this.openModal = false;
    },
  },
  mounted() {
    this.productList = this.$store.state.productList;
    this.$store.dispatch("loadingHandler", true);
    setTimeout(() => {
      this.$store.dispatch("loadingHandler", false);
    }, 300);
  },
  watch: {
    defaultTag(newVal, oldVal) {
      this.$store.dispatch("loadingHandler", true);
      setTimeout(() => {
        this.$store.dispatch("loadingHandler", false);
      }, 200);
    },
  },
};
</script>