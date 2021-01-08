# vue-modal

### Example
```vue
<template>
  <button @click="open = true">Open</button>
  <vue-modal v-model="open" :close-on="{esc:true}">
    <div>
    <header>Title</header>
      <button @click="open = false">x</button>
      <p> 
        Here is a lightbox
      </p>
    </div>
  </vue-modal>
</template>

<script>
  import Vue from 'vue';
  import Modal from 'vue-modal';

  Vue.use(Modal);
  export default {
    data() {
      return {
        open: false;
      }
    }
  }
</script>

<style>
  .rk-modal{
    background: rgba(255,255,255, 0.3);
  }
</style>
```
