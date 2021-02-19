<template>
  <div id="Footer">
    <div class="p-5 sm:px-32 bg-gray-300">
      <div class="sm:flex sm:items-center sm:justify-between">

        <div class="w-full text-left">
          <ul>
            <li class="border-l-2 border-gray-700 px-3 mb-2 text-sm tracking-wider" v-for="item in footerList" :key="item.id">{{item.label}}</li>
          </ul>
        </div>

        <div class="w-full text-center mt-10 sm:mt-0 sm:text-right d-flex items-center">
          <span class="mx-3 inline-flex" v-for="item in mediaList" :key="item.id">
            <a :href="item.link" target="_blank">
              <img class="transform duration-500 hover:scale-150 motion-reduce:transform-none cursor-pointer" :src="item.imgPath" :alt="item.title" width="20px">
            </a>
          </span>
        </div>

      </div>

      <div class="w-full text-center mt-5">
        <label>2021 © TAG SKIN</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mediaList: [
        {
          id: 1,
          imgPath: require("../assets/images/icon/Instagram.png"),
          title: "Instagram",
          link: "https://www.instagram.com/wenxuan516/",
        },
        {
          id: 2,
          imgPath: require("../assets/images/icon/Facebook.png"),
          title: "Facebook",
          link: "https://www.facebook.com/profile.php?id=100001999579915",
        },
        {
          id: 3,
          imgPath: require("../assets/images/icon/Line.png"),
          title: "Line",
          link: "https://line.me/ti/p/3tB1q1f3R4",
        },
      ],
      footerList: [
        {
          id: 1,
          label: "以肌之名生技有限公司",
        },
        {
          id: 2,
          label: "電子信箱： a0983322299@gmail.com",
        },
        {
          id: 3,
          label: "LINE ID： line051620",
        },
        {
          id: 4,
          label: "客服時間： 09:00 ~ 18:00",
        },
      ],
    };
  },
};
</script>