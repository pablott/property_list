<template>
  <div id="app">
    <md-toolbar class="md-primary" :md-elevation="1">
      <span class="md-title">List of properties</span>
    </md-toolbar>

    <!-- Display status in case connection is down -->
    <md-list v-if="errors && errors.length">
      An error has occurred:
      <md-list-item v-for="error of errors" :key="error.message">
        <md-toolbar class="md-accent">{{ error.message }}</md-toolbar>
      </md-list-item>
    </md-list>

    <!-- Load property list component -->
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
      // Error states (init as array or it won't push into it)
      errors: []
    }
  },
  mounted () {
    axios
      // Change get() to a non-existing URL to trigger a Network Error
      .get('https://gist.githubusercontent.com/ruimendesM/bf8d095f2e92da94938810b8a8187c21/raw/70b112f88e803bf0f101f2c823a186f3d076d9e6/properties.json')
      .then(response => {
        console.log(response);
        this.city = response.data.location.city.name;
        this.list = response.data.properties;
        //console.log(this.list);

        // DEBUG: uncomment to trigger a list error
        //this.list = null;
      })
      // Catch error states, push to array for listing in template
      .catch(e => {
        this.errors.push(e);
        console.log(this.errors);
      })
  }
}
</script>
<style>
</style>
