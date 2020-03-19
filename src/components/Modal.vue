<template>
  <div class="modal" v-if="show">
    <div class="modal-window">
      <section class="modal-header-closeBtn">
        <header class="modal-header">Modal header</header>
        <button class="modal-header__closeButton" @click="onClose()">×</button>
      </section>
      <main class="modal-content">
        <slot />
      </main>
      <footer class="modal-footer">
        <button class="modal-footer__openButton" @click="onAccept()">ok</button>
      </footer>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    show: Boolean,
    customClass: String,
    onClose: {
      type: Function,
      default: () => {}
    },
    onAccept: Function
  }
};
</script>

