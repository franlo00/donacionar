import Vue from 'nativescript-vue'
import routes from '~/router'
import store from '~/store'
import sideDrawer from '~/components/sideDrawer'
import drawerContent from '~/components/drawerContent'
import * as ApplicationSettings from "tns-core-modules/application-settings";
import * as http from "http";



Vue.config.silent = (TNS_ENV === 'production')
//Vue.config.silent = true

Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)
Vue.prototype.$routes = routes

store.subscribe((mutation, state) => {
  ApplicationSettings.setString('store', JSON.stringify(state));
});
 
new Vue({
  store,
  async beforeCreate() {
    this.$store.commit('initialiseStore');
    let timestampInSeconds = Math.floor(Date.now()/1000);
    
      let jresult = await http.getJSON("https://donacion.com.ar/todas?json=1");
      if(jresult.version != this.$store.lastupdate){
        this.$store.commit('setOrgs',jresult.results);
      
        this.$store.commit('setLU',jresult.version);
      }


	},
  render (h) {
    return h(
      sideDrawer,
      [
        h(drawerContent, { slot: 'drawerContent' }),
        h(routes.Home, { slot: 'mainContent' })
      ]
    )
  }
}).$start()