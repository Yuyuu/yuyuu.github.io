import Vue from 'vue';
import {
  Vuetify,
  VApp,
  VAvatar,
  VGrid,
  VTabs,
  transitions
} from 'vuetify';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  components: {
    VApp,
    VAvatar,
    VGrid,
    VTabs,
    transitions
  }
});
