<template>
  <div class="list" v-if="list"> 
    <!-- DEBUG -->
    <!-- <pre>{{ list }}</pre> -->

    <md-list class="md-triple-line">
    <md-subheader>Properties for {{ city }}</md-subheader>

      <md-list-item v-for="property in list" :key="property.id">
        <!--<div class="featured" v-if="property.isFeatured">FEATURED</div>--> 

        <md-button class="md-icon-button md-list-action">
          <md-icon class="md-primary" v-if="property.isFeatured">star</md-icon>
          <md-icon v-else>star_border</md-icon>
        </md-button>

        <div class="md-list-item-text">
          <!-- DEBUG
          {{property.id}} -->

          <span>
           <b>{{property.name}}</b>
          </span>
          <span>{{property.address1}}</span>

          <md-divider></md-divider>

          <span><b>Distance:</b> {{property.distance.value}} km</span>
          <span><b>Lowest price:</b> {{property.lowestPricePerNight.value | convert('EUR')}}</span>
          <span><b>Rating:</b> {{property.overallRating | normalize}}</span>
          <span>{{property.overview}}</span>
        </div>
      </md-list-item>
    </md-list>
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
    //console.log('mounted');
    //console.log(this.$props);
  },
  filters: {
    // Filter for normalizing ratings to 0..10
    normalize: function (rating) {
      // Check if rating exists
      // Important: don't just check for true/false as some properties are rated zero
      if (rating===null) return 'rating not available';

      // Normalize rating to 0..10, add total ratings it is based on
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

.md-list-item-text {
  margin-left: 20px;
}

.md-list-item {
  margin-bottom: 20px;
}
</style>
