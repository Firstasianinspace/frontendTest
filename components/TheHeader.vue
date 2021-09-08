<template>
  <div class="header">
    <h1>Добавление товара</h1>
    <div class="header-option">
      <InputOption
      />
    </div>
  </div>
</template>

<script>
import InputOption from '@/components/forms/InputOption'

export default {
  name: 'TheHeader',
  components: {
    InputOption
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding: 32px 32px 16px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & h1 {
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
  }
  &-option {
    min-width: 175px;
  }
}
</style>
