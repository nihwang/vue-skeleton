/* eslint-disable global-require */

export default [
  {
    path: '/',
    name: 'Home',
    locationOnNav: 'none',
    getTemplate: () => {
      return require('./pages/Home');
    },
  },
  {
    path: '/product',
    name: 'Product',
    locationOnNav: 'center',
    getTemplate: () => {
      return require('./pages/Product');
    },
  },
  {
    path: '/developers',
    name: 'Developers',
    locationOnNav: 'center',
    getTemplate: () => {
      return require('./pages/Developers');
    },
  },
  {
    path: '/company',
    name: 'Company',
    locationOnNav: 'center',
    getTemplate: () => {
      return require('./pages/Company');
    },
  },
];
