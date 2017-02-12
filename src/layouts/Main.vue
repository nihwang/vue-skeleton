<template>
  <div class="main">
    <header-bar />
    <slot></slot>
    <footer-bar />
  </div>
</template>

<script>
  import HeaderBar from '../components/HeaderBar';
  import FooterBar from '../components/FooterBar';

  export default {
    components: {
      HeaderBar,
      FooterBar,
    },
  };
</script>

<style scoped>
  @import '../../node_modules/normalize.css/normalize.css';
  @import '../../static/stylesheets/base-styles.scss';
  @import url('https://fonts.googleapis.com/css?family=Roboto:300');
</style>
