<template>
  <div>
    <div v-for="i in 100">
      <span v-for="i in 50" class="flex flex-col"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam {{ randomNumber }}</span
      >
    </div>
  </div>
</template>

<script setup>
const randomNumber = ref(Math.random());
</script>
