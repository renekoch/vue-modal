import Modal from './Modal.vue'


export {Modal};
export default {
  /**
   * @param {Object} Vue - Vue instance
   * @param {Object} options
   */
  install(Vue, options = {}) {
    Vue.component(options.tag || 'vue-modal', Modal)
  }
}
