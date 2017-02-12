# Vue Skeleon

A skeleton to quickly set up Vue.js for a project.

**Libraries included**:
- Bootstrap
- jQuery

**Other Features**
- SCSS is enabled in this skeleton so that you don't have to specify SCSS in every vue file. 
- Use `static/stylesheets/utils.scss` and `static/stylesheets/base-styles.scss` to import into files to use shared styles. Best used for storing variables and styles that can be shared
```javascript
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
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
