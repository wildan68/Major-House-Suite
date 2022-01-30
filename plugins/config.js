import Vue from 'vue'

export default ({ app }, inject) => {
    inject('conf', Vue.observable({
        isMobile: false,
    }))
}