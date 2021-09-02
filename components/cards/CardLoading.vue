<template>
  <div class="card card-loading">
    <div class="card-image"></div>
    <div class="card-text">
      <h4 class="card-text__title"></h4>
      <p class="card-text__desc"></p>
      <p class="card-text__price"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardLoading'
}
</script>

<style lang="scss" scoped>
@keyframes progress {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  50% {
    transform: translate3d(100%, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0)
  }
}
.card-loading {
  & .card-image {
    height: 184px;
    margin: 16px 16px 0 16px;
    background: #FAF9F7;
    position: relative;
    overflow: hidden;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, transparent 0%, #E8E8E8 50%, transparent 100%);
      animation: progress 2s ease-in-out infinite;
    }
  }
  & .card-text {
    &__title {
      height: 25px;
      background: #FAF9F7;
      position: relative;
      overflow: hidden;
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, transparent 0%, #E8E8E8 50%, transparent 100%);
        animation: progress 2s ease-in-out infinite;
        animation-delay: .2;
      }
    }
    &__desc {
      height: 80px;
      background: #FAF9F7;
      padding: 0;
      margin: 16px 0 32px 0;
      position: relative;
      overflow: hidden;
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, transparent 0%, #E8E8E8 50%, transparent 100%);
        animation: progress 2s ease-in-out infinite;
        animation-delay: .3;
      }
    }
    &__price {
      height: 30px;
      background: #FAF9F7;
      position: relative;
      overflow: hidden;
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, transparent 0%, #E8E8E8 50%, transparent 100%);
        animation: progress 2s ease-in-out infinite;
        animation-delay: .4;
      }
    }
  }
}
</style>
