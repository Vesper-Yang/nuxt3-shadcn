<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
const loading =ref(false)
const list = [
    {
      title: "Today",
      component: resolveComponent('TabsToday')
    },
    {
      title: "Week",
      component: "Week"
    },
    {
      title: "Month",
      component: resolveComponent('TabsMonth')
    },
    {
      title: "Year",
      component: resolveComponent('TabsYear')
    }
  ]
</script>

<template>
  <div class="grid gap-4 w-full">
    <header class="flex items-start justify-between">
      <div class="grow">
        <p>Hi, welcome back Bunan!</p>
        <h1>Dashboard</h1>
      </div>
      <div class=" bg-neutral-200 h-[36px] w-[120px]"></div>
    </header>
    <main class="grid gap-4">
      <Tabs default-value="today" class="w-[400px]">
        <TabsList>
          <TabsTrigger v-for="(item, index) in list" :key="index" :value="item.title">
            {{ item.title }}
          </TabsTrigger>
        </TabsList>
        <TabsContent v-for="(item, index) in list" :key="index" :value="item.title">
          {{ item.component }}
        </TabsContent>
      </Tabs>
      <section class=" bg-neutral-200 w-full h-[300px]">
        Chart
      </section>
    </main>
    <footer>
      <div class="flex ietms-center gap-4">
        <div v-for="(item, index) in 3" :key="index" class=" bg-neutral-200 w-full h-[300px]">I'll have 3 differents cards.</div>
      </div>
    </footer>
  </div>
</template>