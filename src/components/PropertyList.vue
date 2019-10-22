<template>
  <div class="list" v-if="list"> 
    <h3>Pick one from the list</h3>
    <p>Properties for {{ city }}</p>
    <pre>{{ list }}</pre>
    <ul>
      <li v-for="property in list" :key="property.id">
        <div class="featured" v-if="property.isFeatured">FEATURED</div>
        {{property.id}} - 
        {{property.name}}
        {{property.address1}}
        <br> 
        DISTANCE: {{property.distance}}
        <br> 
        LOWEST PRICE: {{property.lowestPricePerNight.value}} VEF - 
        RATING: {{property.overallRating}}
        <br> 
        {{property.overview}}
        <hr>
      </li>
    </ul>
  </div>
  <div v-else>List not loaded</div>
</template>

<script>
export default {
  name: 'PropertyList',
  props: {
    city: String,
    list: Array
  }
  // TODO: add filter to convert currency
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
pre {
  height: 100px;
  overflow: scroll;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.featured {
  background-color: red;
}
</style>
