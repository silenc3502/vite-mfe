<script setup lang="ts">

import { ref } from 'vue'

//defineProps<{ msg: string }>()

const count = ref(0)

//import Basket from "./Basket.vue";

</script>

<template>
  <div style="background-color: lightgreen;">
    <div class="card">
      <button type="button" @click="count++">count is {{ count }}</button>
      <p>
        Edit
        <code>components/Sample.vue</code> to test HMR
      </p>
    </div>
  </div>
</template>