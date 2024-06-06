<template>
  <div class="hydration flex flex-col gap-6 items-start">
    <h1>Hydration</h1>
    <h2>Random number: {{ randomNumber }}</h2>
    <button @click="doSomething()" class="button">I am interactive?</button>
    <h2>How it works</h2>
    <span>Happens at Intial request time: </span>
    <ul>
      <li>Page is rendered with static content</li>
      <li>The client side js downloads and parses is where Vue gets initialized </li>
      <li>Vue makes a virtual dom</li>
      <li>Diffs that with the static markup, to add event listeners <<--even if there are none</li>
    </ul>
    <h2>Hydration mismatch</h2>
    <ul>
      <li>Random number on server vs client to test</li>
      <li>Better hydration messages</li>
      <li>Most the time its invalid markup</li>
    </ul>
    <h2>Time to interactivity</h2>
    <ul>
      <li>This page is computationally expensive, can't press the button right away</li>
    </ul>
    <h2>Server components</h2>
    <ul>
      <li>Skip hydration</li>
      <li>Add private keys, build:</li>
      <li>Server side request: static html</li>
      <li>Client side reqest: xhr payload only, that is cached</li>
      <li>Can take props, can have a slot for interactive content</li>
    </ul>
    <!-- <LoremIpsumFront /> -->
    <!-- <LoremIpsumBack /> -->
  </div>
</template>

<script setup>
const randomNumber = ref(Math.random())

const doSomething = () => {
  alert('Doing something')
}
</script>