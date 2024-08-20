<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from 'radix-vue';
const list = [
  {
    title: "Today",
    component: resolveComponent("TabsToday")
  },
  {
    title: "Week",
    component: "Week"
  },
  {
    title: "Month",
    component: "Month"
  },
  {
    title: "Year",
    component: resolveComponent("TabsYear")
}]

let data = ref([16.0, 18.2, 23.1, 27.9, 32.2, 36.4, 39.8, 38.4, 35.5, 29.2, 22.0, 17.8])


let currentCategory = ref('today')


const setCategory = (e: { target: { innerText: string; }; }) => {
  let v = e.target.innerText.toLowerCase()
  currentCategory.value = v
  switch (v) {
    case 'today':
      generateRandomData(24);
      break
    case 'week':
      generateRandomData(7);
      break
    case 'month':
      generateRandomData(31);
      break
    case 'year' :
      generateRandomData(12);
      break
    default:
      generateRandomData(24)
      break
  }
}

function generateRandomData(number = 7) {
  let values = []
  for ( let i = 0; i < number; i++) {
    values.push(Math.floor(Math.random() * 100))
  }
  console.log(values)
  data.value = values
  return values
}

const cards = [
  {
    title: "Sales",
    progression: 12,
    amount: 84.44,
    Label: "View sales",
    description: "Sales of March 2024",
    icon: "solar: ticket-sale-outline"
  },
  {
    title: "Sales",
    progression: 12,
    amount: 84.44
  },
  {
    title: "Sales",
    progression: 12,
    amount: 84.44
  }
]

onMounted(() => {
  generateRandomData(24)
})



</script>

<template>
  <div class="grid gap-4">
    <header class="flex items-start justify-between">
      <div class="grow">
        <p>Hi, welcome back Bunan!</p>
        <h1>Dashboard</h1>
      </div>
      <div class=" bg-neutral-200 h-[36px] w-[120px]"></div>
    </header>
    <main class="grid gap-4">
      <Tabs default-value="today" @click="setCategory">
        <TabsList>
          <TabsTrigger v-for="(item, index) in list" :key="index" :value="item.title">
            {{ item.title }}
          </TabsTrigger>
        </TabsList>
        <TabsContent v-for="(item, index) in list" :key="index" :value="item.title">
          <Chart v-if="data.length > 0" :currentCategory="currentCategory" :data="data" />
        </TabsContent>
      </Tabs>
      <section class=" bg-neutral-200 w-full h-[150px]">
        Chart
      </section>
    </main>
    <footer>
      <div class="flex ietms-center gap-4">
        <div v-for="(item, index) in 3" :key="index" class=" bg-neutral-200 w-full h-[100px]">I'll have 3 differents cards.</div>
      </div>
    </footer>
  </div>
</template>