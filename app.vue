<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

<script setup>
const formatted = useDateFormat(useNow(), 'ddd HH:mm AA');

watch(formatted, (newDate) => {
  if(['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].forEach(day => {
    // Is this a workday?
    if(newDate.includes(day)) {
      ['9:00 A.M.', '10:00 A.M.', '11:00 A.M.', '12:00 P.M', '13:00 P.M.', '14:00 P.M.'].forEach(time => {
        if(newDate.includes(time)) {
          console.log('GYFTIB!!!!')
          // HEY YO NADIA MY PIECE IS COMPLETE, BAC STILL IN QUESTION.
          // @TODO PUT BEAVERS AND MEERKATS AND EXPLOSIONS, AND LIONS, AND TIGERS, AND BEARS
          // SAYING PUT YOUR TIME IN
        }
      });
    }
  }));
});
</script>
