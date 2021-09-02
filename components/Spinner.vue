<template>
  <div
    class="spinner"
    :style="{ 'height': height + 'px' }"
  >
    <span />
  </div>
</template>

<script>
export default {
  name: 'Spinner',
  props: {
    height: {
      type: Number,
      require: true,
      default: 200
    }
  }
}
</script>

<style lang="scss" scoped>
.spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  & span {
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 100%;
    position: relative;
    overflow: hidden;
    &::after {
      content: '';
      margin: auto;
      border: 10px solid #DCDCDC;
      border-top-color: #C9C9C9;
      border-radius: 100%;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      animation: loading 1.2s ease infinite;
    }
  }
}

@keyframes loading {
  to {
    transform: rotate(360deg)
  }
}
</style>
