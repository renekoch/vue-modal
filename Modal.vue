<template>
  <transition name="rkm-fade" @enter="onOpening()">
    <div class="rk-modal" tabindex="0"
         ref="background"
         v-if="open"
         @click.self="onClose('background')"
         @keydown.esc="onClose('esc')">
        <slot></slot>
    </div>
  </transition>
</template>

<script>

function isWithin(el, paremt) {
  if (!el || !paremt) return false;

  while (el) {
    if (el === parent) return true;
    el = el.parentElement;
  }
  return false;
}

export default {
  model: {
    prop: 'open',
    event: 'change',
  },
  props: {
    open: Boolean,
    closeOn: {type: [Object, null], default: null}
  },
  data() {
    return {}
  },
  watch: {},
  computed: {
    /**
     * @return {{background: Boolean, esc: Boolean}}
     */
    canClose() {
      return {
        background: !!(this.closeOn && this.closeOn.background),
        esc: !!(this.closeOn && this.closeOn.esc),
      }
    }
  },
  methods: {
    onOpening() {
      const bg = this.$refs.background;
      if (!isWithin(document.activeElement, bg)) bg.focus();
      this.$emit('opened', this);
    },
    onClose(activator) {
      if (this.canClose[activator]) this.$emit('change', false);
    }
  }
}
</script>

<style>
  .rk-modal {
    z-index: var(--rkm-z-index, 1000);
  }

	.rkm-fade-enter-active,
	.rkm-fade-leave-active {
		transition: opacity var(--rkm-transition-speed, .3s);
	}

	.rkm-fade-enter,
	.rkm-fade-leave-to {
		opacity: 0;
	}
</style>
