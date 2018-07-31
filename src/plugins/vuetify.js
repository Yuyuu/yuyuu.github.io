import Vue from 'vue';
import {
  Vuetify,
  VApp,
  VAvatar,
  VGrid,
  transitions
} from 'vuetify';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  components: {
    VApp,
    VAvatar,
    VGrid,
    transitions
  }
});
