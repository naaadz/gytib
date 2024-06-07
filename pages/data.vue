<template>
  <div class="data flex flex-col gap-6 items-start">
    <h1>Data Fetching</h1>
    <div v-if="team" class="flex flex-col sm:flex-row gap-2">
      <!-- Example 1 - Fetch whole document -->
      <div
        v-for="member in team.data.team_members.slice(0, 2)"
        :key="member.id"
        class="relative basis-1/2"
      >
        <img :src="member.team_image.url" alt="" />
        <span class="absolute left-4 bottom-4 text-white text-xl">{{
          member.team_name[0].text
        }}</span>
      </div>

      <!-- Example 2 - Fetch just needed items with transform -->
      <!-- <div v-for="member in team" :key="member.id" class="relative sm:basis-1/2">
        <img :src="member.team_image.url" alt="">
        <span class="absolute left-4 bottom-4 text-white text-xl">{{ member.team_name[0].text }}</span>
      </div> -->

      <!-- Example 3 - NuxtImg -->
      <!-- <div v-for="member in team" :key="member.id" class="relative sm:basis-1/2">
        <NuxtImg
          :src="extractImagePath(member.team_image.url)"
          sizes="100vw sm:400px lg:700px"
        />
        <span class="absolute left-4 bottom-4 text-white text-xl">{{ member.team_name[0].text }}</span>
      </div> -->
    </div>
    <ul>
      <li>
        Cut down on in-page payload size with Transforms
        <a
          href="https://nuxt.com/docs/api/composables/use-async-data"
          target="_blank"
          >useAsyncData</a
        >
      </li>
      <li>Cache the response client side</li>
      <li><a href="https://image.nuxt.com/" target="_blank">NuxtImg</a></li>
    </ul>
  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp();
const {client} = usePrismic();

// Example 2 - Fetch whole document
const {data: team} = await useAsyncData('team', () => client.getSingle('team'));

// Example 2 - Transforms and cached data
// const { data: team } = await useAsyncData('team', () => client.getSingle('team'), {
//   transform: (team) => {
//     const teamMembers = team.data.team_members || []
//     return teamMembers.slice(0, 2)
//   },
//   getCachedData: (key) => nuxtApp.payload.data[key] || nuxtApp.static.data[key]
// })

const extractImagePath = (url) => {
  const urlObj = new URL(url);
  const matches = urlObj.pathname.match(/\/([^?]+)/);
  return matches ? matches[0] : '';
};
</script>
