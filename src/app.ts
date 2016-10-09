declare const require: any

import * as Vue from 'vue';

const Hello = require('./components/hello.vue').default;

new Vue({
  	el: '#app',
  	components: { Hello }
})
