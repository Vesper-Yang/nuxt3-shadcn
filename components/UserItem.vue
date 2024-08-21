<script setup>
  const loading = ref(false)
  const name = ref("Vesper Yang")
  const description = ref("CTO & Youtuber")
</script>

<template>
  <div class="m-2 p-2 border flex justify-start items-center gap-2 cursor-pointer hover:bg-neutral-50 transition rounded-lg">
    <div class="rounded-full w-10 h-10 bg-green-500 flex items-center justify-center font-bold text-white">
      {{ name[0] }}
    </div>
    <div>
      <p class="text-black font-bold text-sm">{{ name }}</p>
      <p class="text-xs">{{ description }}</p>
    </div>
  </div>
</template>