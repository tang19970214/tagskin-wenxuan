<template>
  <div id="modal">
    <div class="fixed z-30 w-full h-full left-0 top-0 overflow-auto bg-gray-700 bg-opacity-50" v-if="openModal">
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
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSecoOl5YSHxAlc099bKuOOMSG8kc5WaRqpLAa3ou0V2FJpvLQ/viewform?embedded=true" width="100%" height="500" frameborder="0" marginheight="0" marginwidth="0">載入中…</iframe>
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
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>
