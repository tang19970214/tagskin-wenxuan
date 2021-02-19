<template>
  <div class="z-50 w-full h-full flex items-center justify-center fixed bg-gray-500 bg-opacity-50" v-if="$store.state.loading">
    <!-- <div class="loading__BG"></div> -->
    <!-- <div class="loading__Icon"> -->
    <div class="z-50 w-32 h-32 animate-spin">
      <img src="../assets/images/icon/loading.png" alt="載入中">
    </div>
    <!-- </div> -->
  </div>
</template>
