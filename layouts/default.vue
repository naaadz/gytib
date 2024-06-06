<template>
    <div class="nadia mx-auto mt-20 px-4 sm:w-2/3">
      <div class="absolute top-0 right-0 flex gap-4 underline bg-white p-4">
        <nuxt-link to="/">Welcome</nuxt-link>
        <nuxt-link to="/universal">Universal</nuxt-link>
        <nuxt-link to="/hydration">Hydration</nuxt-link>
        <nuxt-link to="/data">Data</nuxt-link>
        <nuxt-link to="/other">Other</nuxt-link>
      </div>
      <slot />
    </div>
</template>

<script setup>

const date = ref(null)

onMounted(() => {
  setTimeout(() => {
    date.value = new Date();
  }, 3000);
});
</script>