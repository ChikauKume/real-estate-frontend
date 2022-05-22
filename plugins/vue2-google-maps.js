import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBsuBF9FnGuRzVLBCDyGh0l_nD7VRsl-vU',
    libraries: 'places',
  },
})

