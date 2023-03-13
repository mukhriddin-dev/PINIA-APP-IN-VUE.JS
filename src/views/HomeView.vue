<template>
  <div>

  </div>
</template>
<script>
import { count } from "../stores/counter";

export default {
  name: "HomeView",

  data() {
    return {
      num: count().number
    } 
  },

  methods: {
    test() {
      console.log(this.num)
    }
  },

  computed: {

  },

  mounted() {
    this.test();
  }


}
</script>
<style lang="css"></style>