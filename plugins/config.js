import Vue from 'vue'

export default ({ app }, inject) => {
    inject('conf', Vue.observable({
        isMobile: false,
        //url_api: 'http://localhost/majorapi/mhsuites/api/',

        url_api: 'https://majorwebapi.herokuapp.com/mhsuites/api/',

        //Data State
        dataAdmin: null,
    }))
}