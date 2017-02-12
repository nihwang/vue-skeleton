<template>
  <div class="container">
    <div class="line"></div>
    hello from footer
  </div>
</template>

<script>
  import VLink from './VLink';

  export default {
    components: {
      VLink,
    },
  };
  
</script>

<style scoped>
  @import '../../static/stylesheets/utils.scss';

  .container {
  }

  .line {
    width: 100%;
    height: 1px;
    border: solid 1px #e1e9f2;
  }
  
</style>