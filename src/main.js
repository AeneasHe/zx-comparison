import Vue from 'vue'
import App from './App.vue'
import zxComparison from './components/export.js'
Vue.component('byui-comparison', zxComparison)
Vue.config.productionTip = false
new Vue({
	render: h => h(App),
}).$mount('#app')
