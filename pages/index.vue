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
    amount: 1244.43,
    label: "View sales",
    description: "Sales of March 2024",
    icon: "solar:ticket-sale-outline"
  },
  {
    title: "Refunds",
    progression: 8,
    amount: 84.44,
    label: "View refunds",
    description: "Refunds since beginning of year",
    icon: "heroicons-outline:receipt-refund"
  },
  {
    title: "Payouts",
    progression: 14,
    amount: 899.99,
    label: "View payouts",
    description: "Payouts of this week",
    icon: "tabler:zoom-money"
  }
]

onMounted(() => {
  generateRandomData(24)
})



</script>

<template>sw
  <div class="grid gap-4">
    <header class="flex items-start justify-between">
      <div class="grow">
        <p>Hi, welcome back Bunan!</p>
        <h1>Dashboard</h1>
      </div>
      <ProductNew />
    </header>
    <main class="grid gap-4">
      <Tabs default-value="Today" @click="setCategory">
        <TabsList>
          <TabsTrigger v-for="(item, index) in list" :key="index" :value="item.title">
            {{ item.title }}
          </TabsTrigger>
        </TabsList>
        <TabsContent v-for="(item, index) in list" :key="index" :value="item.title">
          <Chart v-if="data.length > 0" :currentCategory="currentCategory" :data="data" />
        </TabsContent>
      </Tabs>
    </main>
    <footer>
      <div class="grid lg:grid-cols-3 gap-4">
          <Card class="flex-1" v-for="(item, index) in cards" :key="index" :card="item"/>
      </div>
    </footer>
  </div>
</template>