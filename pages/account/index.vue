<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { columns } from '~/components/columns';
import type { Payment } from '~/components/columns.ts';
import DataTable from '~/components/DataTable.vue';

const data = ref<Payment[]>([])

// 生成data的随机数据
function generateRandomData(numObjects: number) {
const statuses = ['pending', 'processing', 'completed'];
const emails = ['example@gmail.com', 'm@example.com', 'test@example.com', 'user@example.com'];

const randomData: any[] = [];

for (let i = 0; i < numObjects; i++) {
  const id = Math.random().toString(36).substr(2, 8);
  const amount = Math.floor(Math.random() * 500) + 50;
  const status = statuses[Math.floor(Math.random() * statuses.length)];
  const email = emails[Math.floor(Math.random() * emails.length)];

  randomData.push({ id, amount, status, email });
}

return data.value = randomData;
}

onMounted(() => {
  generateRandomData(100);
})

</script>

<template>
  <div>
    <header class="flex items-start justify-between">
      <div class="grow">
        <p>practice dataTable ...</p>
        <h1>Account</h1>
      </div>
    </header>
    <div>
      <DataTable :columns="columns" :data="data" />
    </div>
  </div>
</template>