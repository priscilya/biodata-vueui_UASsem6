<template>
  <div class="home">
    <div class="my-4" />
    <Penjelasan />
  </div>
</template>

<script>
// @ is an alias to /src
import Penjelasan from "@/components/Penjelasan.vue";

export default {
  name: "Home",
  components: {
    Penjelasan,
  },
};
</script>
