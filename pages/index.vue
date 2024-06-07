<template>
  <div class="index">
    <div v-if="message" class="relative w-[700px] mx-auto flex flex-col gap-6">
      <div class="text-bubble absolute top-20 -left-1/3 z-10">
        {{ message }}
      </div>
      <img
        :class="{inverse: flash}"
        class="block mx-auto w-[700px]"
        src="https://images.prismic.io/zaneraywebsite/ff5b5f9c-5de2-40a4-9aac-2b91696747bf_team_henry.jpg"
      />
      <h2>Universal rendering with ssr</h2>
      <ul>
        <li>Initial request: ssr, in-app navigation: spa</li>
        <li>
          build time: builds all routes for server and client requests:
          .nuxt/dist/server and /client
        </li>
        <li>request time: serves built js to output just html and styling</li>
        <li>Downloads the client scripts, per page that is linked to</li>
        <li>Hydrates the page</li>
      </ul>
    </div>
    <div v-else class="w-96 mx-auto flex flex-col gap-6 text-center">
      <h1>Welcome to ZaneRay</h1>
      <span class="text-2xl">What do your friends call you?</span>
      <input
        type="text"
        class="border-4 px-4 py-2 rounded-xl text-xl"
        v-model="friendName"
      />
      <span class="text-2xl">What do your enemies call you?</span>
      <input
        type="text"
        class="border-4 px-4 py-2 rounded-xl text-xl"
        v-model="enemyName"
      />
      <button @click="submitNames" class="button">Submit</button>
    </div>
  </div>
</template>

<script setup>
const friendName = ref('');
const enemyName = ref('');
const message = ref('');
const flash = ref(false);

const speak = () => {
  if ('speechSynthesis' in window) {
    const message = `${friendName.value}, get your time in, ${enemyName.value}`;
    const utterance = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(utterance);
  } else {
    alert('Your browser does not support the Speech Synthesis API.');
  }
};

const submitNames = () => {
  if (friendName.value && enemyName.value) {
    message.value = `${friendName.value}, get your time in, ${enemyName.value}!`;
    speak();
    flashEffect();
  }
};

const flashEffect = () => {
  let flashCount = 0;
  const interval = setInterval(() => {
    flash.value = !flash.value;
    flashCount += 1;
    if (flashCount === 6) {
      clearInterval(interval);
      flash.value = false;
    }
  }, 500);
};
</script>

<style scoped>
img.inverse {
  filter: invert(1);
}
</style>
