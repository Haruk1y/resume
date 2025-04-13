<template>
  <div class="radar-chart-container">
    <div class="chart-wrapper">
      <canvas ref="radarChart" width="300" height="300"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Chart from 'chart.js/auto';

const props = defineProps({
  skills: {
    type: Array,
    default: () => [
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 80 },
      { name: 'Vue.js', level: 75 },
      { name: 'Node.js', level: 70 },
      { name: 'CSS/SCSS', level: 85 },
      { name: 'UI/UX Design', level: 65 },
      { name: 'TypeScript', level: 75 },
    ]
  },
  chartColors: {
    type: Object,
    default: () => ({
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      pointBackgroundColor: 'rgba(54, 162, 235, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(54, 162, 235, 1)'
    })
  }
});

let chart = null;
const radarChart = ref(null);

onMounted(() => {
  if (typeof window !== 'undefined') {
    const ctx = radarChart.value.getContext('2d');
    
    const skillNames = props.skills.map(skill => skill.name);
    const skillLevels = props.skills.map(skill => skill.level);
    
    chart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: skillNames,
        datasets: [{
          label: 'Skill Level',
          data: skillLevels,
          backgroundColor: props.chartColors.backgroundColor,
          borderColor: props.chartColors.borderColor,
          pointBackgroundColor: props.chartColors.pointBackgroundColor,
          pointBorderColor: props.chartColors.pointBorderColor,
          pointHoverBackgroundColor: props.chartColors.pointHoverBackgroundColor,
          pointHoverBorderColor: props.chartColors.pointHoverBorderColor,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          r: {
            angleLines: {
              display: true
            },
            suggestedMin: 0,
            suggestedMax: 100
          }
        },
        plugins: {
          legend: {
            display: false
          }
        },
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
});

onBeforeUnmount(() => {
  if (chart) {
    chart.destroy();
  }
});
</script>

<style scoped>
.radar-chart-container {
  width: 100%;
  margin: 2rem auto;
}

.chart-wrapper {
  position: relative;
  height: 300px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}
</style>