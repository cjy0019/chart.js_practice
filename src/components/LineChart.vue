<template>
  <canvas id="lineChart" width="400" height="400"></canvas>
</template>

<script>
import Chart from 'chart.js';
const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

const data = {
  labels: labels,
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const config = {
  type: 'line',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

export default {
  mounted() {
    const ctx = document.getElementById('lineChart').getContext('2d');
    const myChart = new Chart(ctx, config);
    console.log(myChart);
  },
};
</script>

<style></style>
