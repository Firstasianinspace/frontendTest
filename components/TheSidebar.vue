<template>
  <div class="sidebar">
    <TheForm />
  </div>
</template>

<script>
import TheForm from '@/components/forms/TheForm.vue'
export default {
  name: 'TheSidebar',
  components: {
    TheForm
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  max-height: 440px;
  padding: 0;
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
}
</style>
