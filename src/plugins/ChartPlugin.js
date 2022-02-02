import Chart from 'chart.js';

export default {
  install(Vue) {
    Vue.prototype.$_Chart = Chart;
    console.log('chart plugin loaded');

    // BarChart.vue
    // this.$_Chart

    // LineChart.vue
    // this.$_Chart
  },
};
