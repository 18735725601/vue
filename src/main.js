import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import './veevalidate'
import * as API from './api'
import {Button} from 'mint-ui';
import './mock/mockServer'



import router from './router'
import store from './store'
import GshopHeader from './components/GshopHeader/GshopHeader'
import CartControl from './components/CartControl/CatrControl.vue'

Vue.prototype.$API = API

Vue.component(Button.name, Button);
Vue.component('CartControl', CartControl)


// Vue全局注册组件的语法： Vue.component(组件名，组件)
Vue.component('GshopHeader', GshopHeader)

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

new Vue({
  el:'#app',
  components:{App},
  template:'<App/>',
  router,
  store
  
})
