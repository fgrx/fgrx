import Vue from 'vue';
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload, {
    preLoad: 1.3,
    loading: '~assets/img/placeholder.png',
    attempt: 1
  })