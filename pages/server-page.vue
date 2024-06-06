<template>
  <div>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div v-else class="data flex flex-col gap-6 items-start">
      <h1>Posts</h1>
      <h2>Api fetching with sensitive data</h2>
      <ul>
        <li v-for="post in data" :key="post.id">{{ post.title }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// Example 1 - Client side fetch with sensitive info
const apiKey = 'abc123'
const { data, pending, error } = await useAsyncData('posts', () => $fetch(`https://jsonplaceholder.typicode.com/posts?${apiKey}`))

//Example 2 - Setup server route and call that instead
//const { data, pending, error } = await useAsyncData('posts', () => $fetch('/api/posts'))

//Example 3 - Turn this into a server component, so route is auto-created and cached

</script>