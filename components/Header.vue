<template>
  <div id="Header">
    <div class="fixed bg-white shadow-md w-full z-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex justify-between items-center border-b-2 border-gray-100 py-4 md:space-x-10">

          <!-- 標題 -->
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <router-link to="/">
              <span class="sr-only">Workflow</span>
              <img class="w-auto w-auto h-12 md:h-16 lg:h-14" src="../assets/images/logo.png" alt="Tag Skin">
            </router-link>
          </div>

          <!-- menu button for phone -->
          <div class="-mr-2 -my-2 sm:hidden">
            <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" @click="openMenu = true" v-if="!openMenu">
              <span class="sr-only">Open menu</span>
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" @click="openMenu = false" v-else>
              <span class="sr-only">Close menu</span>
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- 導覽列 -->
          <nav class="hidden sm:flex space-x-10">
            <div v-for="item in menuList" :key="item.id">
              <router-link :to="item.path" class="text-base font-medium text-gray-500 hover:text-gray-700 hover:font-bold" :class="{'text-gray-700 font-bold': item.path === $route.name}" v-if="!item.subMenu">
                {{item.title}}
              </router-link>

              <div v-else class="relative" @mouseenter="openQA = true" @mouseleave="openQA = false">
                <button type="button" class="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-700 hover:font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" :class="{'text-gray-700 font-bold': openQA}">
                  <span :class="{'text-gray-700 font-bold': $route.name == 'terms' || $route.name == 'policy'}">常見問題</span>
                  <svg class="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>

                <div class="absolute z-10 transform -translate-x-1/2 ml-10 pt-2 px-2 w-32 max-w-md sm:px-0" v-if="openQA">
                  <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8">

                      <router-link :to="items.path" class="-m-3 px-3 py-2 flex items-start rounded-lg text-center text-gray-500 hover:bg-gray-200 hover:text-gray-700 hover:font-bold" :class="{'bg-gray-200 text-gray-700 font-bold': items.path === $route.name}" v-for="items in item.subMenu" :key="items.id">
                        {{items.title}}
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <!-- phone menu -->
      <div class="absolute top-0 mt-20 inset-x-0 transition transform origin-top-right sm:hidden" v-if="openMenu">
        <div class="rounded-b-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div class="pt-5 pb-6 px-5">

            <nav class="grid">
              <div v-for="item in menuList" :key="item.id">
                <a class="duration-500 p-3 flex items-between rounded-md text-gray-500 hover:bg-gray-200 hover:text-gray-700 hover:font-bold" :class="{'bg-gray-200 font-bold text-gray-700': item.path == $route.name}" v-if="!item.subMenu" @click="goPage(item)">{{item.title}}</a>

                <div v-else>
                  <div class="p-3 flex items-between rounded-md text-gray-500 cursor-pointer hover:bg-gray-200 hover:text-gray-700 hover:font-bold" :class="{'bg-gray-100 font-bold text-gray-700': $route.name == 'terms' || $route.name == 'policy'}" @click="openQA = !openQA">
                    <p class="w-full">{{item.title}}</p>
                    <svg class="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </div>

                  <div class="w-full" v-if="openQA">
                    <a class=" duration-700 mt-1 pl-8 py-2 flex items-start rounded-lg text-center text-gray-500 cursor-pointer hover:bg-gray-100 hover:text-gray-600 hover:font-bold text-sm" :class="{'bg-gray-200 font-bold text-gray-700': $route.name == items.path}" v-for="items in item.subMenu" :key="items.id" @click="goPage(items)">
                      {{items.title}}
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      openQA: false,
      openMenu: false,
      menuList: [
        {
          id: 1,
          title: "商品列表",
          path: "product",
        },
        {
          id: 2,
          title: "常見問題",
          subMenu: [
            { id: 11, title: "條款與細則", path: "terms" },
            { id: 12, title: "退換貨政策", path: "policy" },
          ],
        },
        {
          id: 3,
          title: "關於我們",
          path: "about",
        },
      ],
    };
  },
  methods: {
    goPage(item) {
      this.$router.push(item.path);
      this.openMenu = false;
      if (item.path == "terms" || item.path == "policy") {
        this.openQA = true;
      } else {
        this.openQA = false;
      }
    },
  },
};
</script>