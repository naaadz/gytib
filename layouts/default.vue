<template>
  <div class="nadia mx-auto mt-20 px-4 sm:w-2/3">
    <div class="absolute top-0 right-0 flex gap-4 underline bg-white p-4">
      <nuxt-link to="/">Welcome</nuxt-link>
      <nuxt-link to="/hydration">Hydration</nuxt-link>
      <nuxt-link to="/server-page">Server page</nuxt-link>
      <nuxt-link to="/lazy">Lazy</nuxt-link>
      <nuxt-link to="/data">Data</nuxt-link>
      <nuxt-link to="/other">Other</nuxt-link>
    </div>
    <slot />
  </div>
</template>
