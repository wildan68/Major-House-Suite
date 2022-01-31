import Vue from 'vue'
import Toast from 'vue-toast-notification'

import 'vue-toast-notification/dist/theme-sugar.css'

Vue.use(Toast, {
    position: 'top',
    duration: 1000,
    queue: true,
})