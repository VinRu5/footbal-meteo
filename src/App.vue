<template>
  <div id="app">
    <div class="container container-height">
      <!-- Il componente Home verrà visualizzato in contrapposizione con i componenti football/weather -->
      
      <Home
        v-if="show.home"
        @viewFootball="showFootball"
        @viewWeather="showWeather"
      />
      
      <div v-else>
        <!-- verrà visualizzato solo un componente tra football o weather -->
        <Football v-if="show.football" @showHome="showHome"/>
        <Weather v-else @showHome="showHome"/>
      </div>
    </div>
  </div>
</template>

<script>
import Football from './components/Football.vue'
import Home from './components/Home.vue'

import Weather from './components/Weather.vue'


export default {
  components: {Home, Football, Weather,  },
  name: 'App',

  data(){
    return {
      show: {
        home: true, 
        football: true,
      }
    }
  },

  methods: {
    showFootball() {
      console.log('ciao')
      this.show.football = true;
      this.show.home = false;
    },

    showWeather() {
      this.show.football = false;
      this.show.home = false;
    },

    showHome() {
      this.show.home = true;
    },
  }
}
</script>

<style lang="scss">
@import './style/app.scss';


</style>
