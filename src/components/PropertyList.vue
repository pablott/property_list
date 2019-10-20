<template>
  <div class="list">
    <h1>{{ list }}</h1>
    <ul>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PropertyList',
  props: {
    list: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
