declare const require: any

import * as Vue from 'vue';

const hello = require('./components/hello.vue').default;
const bye = require('./components/bye.vue').default;

new Vue({
  	el: '#app',
  	components: { hello, bye }
})
