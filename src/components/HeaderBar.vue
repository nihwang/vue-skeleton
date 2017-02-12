<template>
  <nav class="navbar navbar-inverse">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <v-link class="navbar-brand" href="/">
        BRAND
        </v-link>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <template v-for="route in routesArrayCenter">
            <li>
              <v-link v-bind:href="route.path">
                {{ route.name }}
              </v-link>
            </li>
          </template>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <template v-for="route in routesArrayRight">
            <li>
              <v-link v-bind:href="route.path">
                {{ route.name }}
              </v-link>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  import VLink from './VLink';
  import routes from '../routes';


  const routesArrayCenter = routes.filter(r => r.locationOnNav === 'center');
  const routesArrayRight = routes.filter(r => r.locationOnNav === 'right');

  export default {
    data: function data() {
      return { routesArrayCenter, routesArrayRight };
    },
    components: {
      VLink,
    },
  };
</script>

<style>
  .navbar {
    margin-bottom: 0;
    border-radius: 0;
    border: 0;
  }
</style>
