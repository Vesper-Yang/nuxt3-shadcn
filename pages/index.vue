<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
const loading =ref(false)
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


interface Categories {
  today: string[];
  week: string[];
  year: string[];
  month?: string[]; // 可选属性 month
}


let categories = ref(<Categories>{
  today: [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00"
  ],
  week: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ],
  year: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]
})
let currentCategory = ref('today')

const selectedCategories = computed(() => {
  return categories.value[currentCategory.value as keyof typeof categories.value];
});

const options = computed(() => (
  {
    chart: {
        type: 'line',
        animation: {
          enabled: false
        }
    },
    legend: {
      enabled: false
    },
    title: {
        text: ''
    },
    xAxis: {
        gridLineColor: 'transparent', // remove line
        categories: selectedCategories.value
      },
    yAxis: {
        gridLineColor: 'transparent',
        title: {
            text: ''
        }
    },
    plotOptions: {
        line: {
            marker: {
              enabled: false
            },
            dataLabels: {
                enabled: false
            },
            enableMouseTracking: true
        }
    },
    series: [{
        name: 'line',
        lineWidth: '4px',
        color: {
          linearGradient : {},
          stops: [
            [0, 'rgba(252, 176, 69, 1)'],
            [0.33, 'rgba(253, 29, 29, 1)'],
            [0.66, 'rgba(131, 58, 180, 1)'],
            [1, 'rgba(29, 217, 83, 1)'],

          ]
        },
        data: data.value
    }]
}
))

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

function generateMonth() {
  let currentDate = new Date();
  let currentMonth = currentDate.getMonth() + 1;
  let currentYear = currentDate.getFullYear(); 

  function generateMonthDates() {
    let monthDates = [];
    let daysInMonth = new Date(currentYear, currentMonth, 0).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
      let dayString = ("0" + i).slice(-2); 
      let monthString = ("0" + currentMonth).slice(-2); 
      monthDates.push(monthString + "/" + dayString);
    }

    return monthDates;
  }

  let month = generateMonthDates();
  categories.value = { ...categories.value, month }; 
  return month;
}

onMounted(() => {
  generateRandomData()
  generateMonth()
})

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
      <Tabs default-value="today" @click="setCategory">
        <TabsList>
          <TabsTrigger v-for="(item, index) in list" :key="index" :value="item.title">
            {{ item.title }}
          </TabsTrigger>
        </TabsList>
        <TabsContent v-for="(item, index) in list" :key="index" :value="item.title">
          <highchart v-if="data.length > 0" :options="options" />
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