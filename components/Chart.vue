<script setup lang="ts">
let props = defineProps(['currentCategory', 'data'])
let data = props.data || []
let currentCategory = props.currentCategory || 'today'

interface Categories {
  today: string[];
  week: string[];
  year: string[];
  month?: string[]; 
}

let categories = ref<Categories>({
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


const selectedCategories = computed(() => {
  return categories.value[currentCategory.value as keyof typeof categories.value];
});


let options = computed(() => ({
  chart: {
    type: 'line',
    animation: {
      enabled: false
    }
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
    title: { // remove title
      text: ''
    }
  },
  legend: {
    enabled: false
  },
  plotOptions: {
    line: {
      marker: { // remove points
        enabled: false
      },
      dataLabels: {
        enabled: false
      },
      enableMouseTracking: false
    }
  },
  series: [{
    name: 'line',
    lineWidth: '4px',
    color: { // gradients
      linearGradient: { y1: 0, y2: 0, y3: 0, y4: 0 },
      stops: [
        [0, 'rgba(252,176,69,1)'],
        [0.33, 'rgba(253,29,29,1)'],
        [0.66, 'rgba(131,58,180,1)'],
        [1, 'rgba(29,217,93,1)'],
      ]
    },
    data
  }]
}))


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
  generateMonth()
})
</script>

<template>
  <div>
    <highchart class="border p-4 rounded-lg" :options="options" />
  </div>
</template>