<template lang="html">
  <ScrollView>
    <StackLayout width="100%">
      <Label class="drawer-header" text="Tus donaciones en un solo lugar" textWrap="true" flexGrow="true"/>

      <Label
        v-for="(page, i) in pages"
        @tap="goToPage(page.component,page.adds)"
        class="drawer-item"
        :text="page.name"
        :key="i"
      />

      <Button class="drawer-close-button" @tap="closeDrawer()">Ocultar</Button>
    </StackLayout>
  </ScrollView>
</template>

<script>
import sideDrawer from '~/mixins/sideDrawer'
import { ObservableArray } from "tns-core-modules/data/observable-array";

export default {
  mixins: [sideDrawer],
  data () {
    return {
      pages: new ObservableArray(
        { name: 'Home', component: this.$routes.Home, tipolista: ''  },
        { name: 'Favoritos', component: this.$routes.Home, adds: 'fav' }
      )
    }
  },
  created(){
    for (var ii = 0, len = this.$store.state.orgs.length; ii < len; ii++) {
      var elm = this.$store.state.orgs[ii]
      if(elm.categoria != ''){
          var ncat = 0;
          
            for (var j = 0, lenj = this.pages.length; j < lenj; j++) {
              if (typeof this.pages[j] !== 'undefined') {
                if(elm.categoria == this.pages[j].name){
                    ncat = 1;
                }
              }
          }/**/
          if(ncat == 0){
            this.pages = this.pages.concat([{ name: elm.categoria, component: this.$routes.Home, adds: elm.categoria }]);
          }
      }
    }
    this.pages = this.pages.concat([{ name: 'Información', component: this.$routes.Informacion, adds: '' }]);
    this.pages = this.pages.concat([{ name: 'Contactanos', component: this.$routes.Nosotros, adds: '' }]);
  },
  methods: {
    goToPage (pageComponent,adds) {
      // use the manual navigation method
      this.$navigateTo(pageComponent, {
                    props: {
                        tipolista: adds
                   }
                });
      // and we probably want to close the drawer when changing pages
      this.closeDrawer()
    }
  }
}
</script>

<style lang="css">
</style>