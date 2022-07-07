<template>
  <div class="home">
    <p class="title">这是一个</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {},
});
</script>

<style lang="scss">
.title {
  height: 75px;
  padding: 0;
  margin: 0;
  background: #0094ff;
}
</style>
