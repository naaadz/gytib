<template>
  <div>
    <!-- Example 1 large amt of dom nodes -->
    <div v-for="i in 50">
      <span v-for="i in 50" class="flex flex-col"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam {{ randomNumber }}</span
      >
    </div>

    <!-- Example 2 fetch data -->
    <!-- <div v-if="posts.length" class="flex flex-col gap-4">
      <h2>Fetched Posts</h2>
      <ul>
        <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
      </ul>
    </div> -->
  </div>
</template>

<script setup>
defineProps({
  number: Number
});

const randomNumber = ref(Math.random());

// Example 2 - fetch data

// const superSecretKey = 'serverKey123'
// const posts = ref([])
// const fetchPosts = async () => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/posts?apiKey=${superSecretKey}`)
//   posts.value = await response.json()
// }

// await fetchPosts()
</script>
