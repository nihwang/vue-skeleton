/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

/* global window */

import Vue from 'vue';
import routes from './routes';

const pages = {
  Error404: require('./pages/Error404'),
};

routes.forEach((route) => {
  pages[route.path] = route.getTemplate();
});

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname,
  },
  computed: {
    ViewComponent() {
      if (pages[this.currentRoute]) {
        return pages[this.currentRoute];
      }

      return pages.Error404;
    },
  },
  render(h) {
    return h(this.ViewComponent);
  },
});

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname;
});
