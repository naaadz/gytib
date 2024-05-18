<template>
  <div class="overflow-hidden h-screen w-screen flex flex-col items-center justify-center">
    <div v-if="isExecuting" class="emoji-container relative flex justify-center">
      <span class="critter">{{ randomEmoji }}</span>
      <div class="overlay-text absolute top-[100px] text-xl text-center">{{ overlayText }}</div>
    </div>
    <div class="flex gap-4" v-else>
      <input v-model="name" class="border border-solid border-slate-600 px-4 py-2 rounded-lg" placeholder="What is your name?" />
      <button class="border bg-slate-600 text-white px-4 py-2 rounded-lg" @click="speak()">Test it</button>
    </div>
  </div>
</template>

<script setup>
const formatted = useDateFormat(useNow(), 'ddd HH:mm AA');
const name = ref('');
const message = ref('get your time in, bitch!')
const isExecuting = ref(false);
const overlayText = ref('');
const randomEmoji = ref('');

const emojis = ['🦔', '🦊', '🐻', '🦁', '🐯', '🐷', '🐵', '🐸', '🐼'];

useHead({
  title: 'Get your time in, Bitch!'
})

const getRandomEmoji = () => {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
};

const speak = () => {
  if ('speechSynthesis' in window) {
    const yourname = name.value || 'hey you';
    const utterance = new SpeechSynthesisUtterance(`${yourname} ${message.value}`);
    window.speechSynthesis.speak(utterance);
    overlayText.value = `${yourname}, ${message.value}`;
    randomEmoji.value = getRandomEmoji();
    animateEmoji();
  } else {
    alert('Your browser does not support the Speech Synthesis API.');
  }
};

const animateEmoji = () => {
  isExecuting.value = true;
  setTimeout(() => {
    isExecuting.value = false;
  }, 3000);
};

watch(formatted, (newDate) => {
  if(['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].forEach(day => {
    // Is this a workday?
    if (newDate.includes(day)) {
      ['9:00 A.M.', '10:00 A.M.', '11:00 A.M.', '12:00 P.M', '13:00 P.M.', '14:00 P.M.'].forEach(time => {
        if(newDate.includes(time)) {
          console.log('GYFTIB!!!!')
          speak()
          // HEY YO NADIA MY PIECE IS COMPLETE, BAC STILL IN QUESTION.
          // @TODO PUT BEAVERS AND MEERKATS AND EXPLOSIONS, AND LIONS, AND TIGERS, AND BEARS
          // SAYING PUT YOUR TIME IN
        }
      });
    }
  }));
});
</script>

<style scoped>

.critter {
  display: block;
  transform: scale(1);
  font-size: 400px;
  animation: rotateAndScale 3s ease-in-out;
}

@keyframes rotateAndScale {
  0% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.5) rotate(180deg);
  }
  100% {
    transform: scale(1) rotate(360deg);
  }
}

</style>
