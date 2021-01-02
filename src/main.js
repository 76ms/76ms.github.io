import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

function hyphenate (str) {
  return str.replace(/ /, '-').toLowerCase();
}
Vue.prototype.$hyphenate = hyphenate;

function unhyphenate (str) {
  return str.replace(/-/, ' ').toLowerCase();
}
Vue.prototype.$unhyphenate = unhyphenate;

function getDate (dateStr) {
  const date = new Date(dateStr);
  const day = date.getDate() < 10 ? `0${ date.getDate() }` : date.getDate();
  const month = date.toLocaleString('default', {month: 'short'});
  return `${ day } ${ month } ${ date.getFullYear() }`;
}
Vue.prototype.$date = getDate;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
