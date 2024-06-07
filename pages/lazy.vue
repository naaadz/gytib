<template>
  <div>
    <div class="other flex flex-col gap-6 items-start">
      <h1>Lazy</h1>
      <h2>Lazy prefix available for all your components to split the chunk</h2>
      <h3>Old way:</h3>
      <pre>
Modal: () => import(/* webpackChunkName: "my-component" */ './components/Modal.vue')</pre
      >
      <h3>New way:</h3>
      <pre>{{ '<LazyModal />' }}</pre>
      <button class="button" @click="shouldModalOpen = true">
        Launch Modal
      </button>
      <!-- Example: change this to LazyModal to split out the chunk on a build -->
      <Modal :open="shouldModalOpen" @close="shouldModalOpen = false"
        ><h1>I am a modal.</h1></Modal
      >
    </div>
  </div>
</template>

<script setup>
const shouldModalOpen = ref(false);
</script>
