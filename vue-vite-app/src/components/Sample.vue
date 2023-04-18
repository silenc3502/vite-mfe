<script setup>

import { ref } from 'vue';
const count = ref(0);

import Basket from "./Basket.vue";

</script>

<template>
  <div style="background-color: lightgreen;">
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <button @click="count++">
      You clicked me {{ count }} times in a <b>vue</b> application!
    </button>
    <Basket/>
  </div>
</template>