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
        DISTANCE: {{property.distance.value}} km
        <br> 
        LOWEST PRICE: {{property.lowestPricePerNight.value | convert('EUR')}} - 
        RATING: {{property.overallRating | normalize}}
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
  },
  mounted () {
    // DEBUG
    console.log('mounted');
    console.log(this.$props);
  },
  filters: {
    // Filter for normalizing ratings to 0..10
    normalize: function (rating) {
      // Check if rating exists
      // Important: don't just check for true/false as some properties are rated zero
      if (rating===null) return 'rating not available';

      // Normalize rating to 0..10
      let overall = rating.overall;
      return overall/10 + ' (out of ' + rating.numberOfRatings + ' reviews)';
    },
    // Filter to convert currency
    convert: function (value, outCurrency) {
      // Check if value exists
      if (value===null) return 'no price set';

      // Init factor and asign value based on outCurrency argument
      let factor;

      switch (outCurrency) {
        case 'EUR':
          factor = 7.55;
        // Add other currencies below
        //case 'GBP':
        //  factor = 8;
      }
      // Apply conversion factor and round to two decimal places. Add currency at end.
      // This returns a string 
      return (value/factor).toFixed(2) + ' ' + outCurrency;
    }
  }
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
  /*display: inline-block;*/
  margin: 0 10px;
}
.featured {
  background-color: red;
}
</style>
