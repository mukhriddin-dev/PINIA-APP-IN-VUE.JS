<script setup>
import { count } from "@/stores/counter";
const store = count();


</script>


<template>

<h1>{{ store.number }}</h1>

<button @click="store.increment">ADD</button>

</template>



<style>

</style>