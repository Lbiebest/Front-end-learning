<!-- App.vue -->

<template>
  <div>
    <h1>{{ title1 }}</h1>
    <ElementView></ElementView>
    <h1>{{ title2 }}</h1>
    <ElementTable></ElementTable>
    <h1>{{ title3 }}</h1>
    <ElementDialog></ElementDialog>
    <h1>{{ title4 }}</h1>
    <ElementFrom></ElementFrom>
  </div>
</template>

<script>
import { ref } from "vue";
import ElementView from "./views/element/ElementView.vue";
import ElementTable from "./views/element/ElementTableView.vue";
import ElementDialog from "./views/element/ElementDialog.vue";
import ElementFrom from "./views/element/ElementFrom.vue";


export default {
  components: { ElementView, ElementTable, ElementDialog, ElementFrom },
  setup() {
    const title1 = ref("Element Button");
    const title2 = ref("Element Table");
    const title3 = ref("Element Dialog");
    const title4 = ref("Element From");

    return {
      title1, title2, title3, title4
    };
  },
};
</script>

<style scoped></style>
