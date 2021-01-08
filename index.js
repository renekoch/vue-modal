import Modal from './Modal.vue'

export default {
  /**
   * @param {Vue} Vue - Vue instance
   * @param {Object} options
   */
  install(Vue, options = {}) {
    Vue.component(options.tag || 'vue-modal', Modal)
  }
}
