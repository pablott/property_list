<template>
  <div id="app">
    <h1>List of properties</h1>  
    <PropertyList :city="city" :list="list"/>
  </div>
</template>

<script>
import PropertyList from './components/PropertyList.vue';
import axios from 'axios';

export default {
  name: 'app',
  components: {
    PropertyList
  },
  data () {
    return {
      city: null,
      list: null,
    }
  },
  mounted () {
    axios
      .get('https://gist.githubusercontent.com/ruimendesM/bf8d095f2e92da94938810b8a8187c21/raw/70b112f88e803bf0f101f2c823a186f3d076d9e6/properties.json')
      .then(response => {
        console.log(response);
        this.city = response.data.location.city.name;
        this.list = response.data.properties;
        console.log(this.city);
      })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
