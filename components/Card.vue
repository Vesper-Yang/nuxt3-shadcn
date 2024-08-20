<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const props = defineProps(["card"])
</script>

<template>
  <Card>
    
    <CardHeader class="pt-4 pb-2 px-4">
      <div class="flex justify-between item-center">
        <p>{{ card.title }}</p>
        <Badge class="bg-green-400">{{ '+' + card.progression  + '%' }}</Badge>
      </div>
    </CardHeader>
    <CardContent class="flex items-center justify-end px-4 pt-0 pb-2 border-b">
      <div class="text-[48px] font-[800]">
        <span class="text-neutral-300">$</span>
        <span>{{ card.amount }}</span>
      </div>
    </CardContent>
    <CardFooter class="flex gap-2 items-center justify-between p-2">
      <div class="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center">
        <Icon :name="card.icon" size="20" style="color: black;" />
      </div>
      <p class="grow text-xs">{{ card.description }}</p>
      <Button variant="outline"> {{  card.label }}</Button>
    </CardFooter>
  </Card>
</template>