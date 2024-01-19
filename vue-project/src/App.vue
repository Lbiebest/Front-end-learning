<!-- App.vue -->

<template>
  <div>
    <h1>{{ msg }}</h1>
    <ElementView></ElementView>
  </div>
</template>

<script>
import { ref } from "vue";
import ElementView from "./views/element/ElementView.vue"; // 大写开头的文件名

export default {
  components: { ElementView },
  setup() {
    const msg = ref("Element Button");
    return {
      msg,
    };
  },
};
</script>

<style scoped></style>
