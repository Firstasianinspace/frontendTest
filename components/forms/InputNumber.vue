<template>
  <div class="form-field">
    <label v-if="label" class="form-label">
      {{ label }}
      <span
        v-if="asterisk === true"
        class="form-label__required"
      />
    </label>
    <input
      v-model="price"
      :id="uniq"
      :name="uniq"
      type="text"
      :placeholder="placeholder"
      class="form-input"
      :class="{ 'is-invalid': v.$error }"
      v-money="price !== null ? money : null"
      autocomplete="off"
    />
    <div v-if="v.$error" class="form-field__errors">
      <p v-if="!v.required">
        Поле является обязательным
      </p>
    </div>
  </div>
</template>

<script>
import { VMoney } from 'v-money'

export default {
  directives: {
    money: VMoney
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    asterisk: {
      type: Boolean,
      required: true,
      default: false
    },
    v: {
      type: Object,
      required: true
    },
    placeholder: {
      type: String,
      default: 'Placeholder'
    },
    uniq: {
      type: String,
      default: 'uniq'
    },
    label: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      money: {
        decimal: ',',
        thousands: ' ',
        prefix: '',
        suffix: '',
        precision: 0,
        masked: false
      }
    }
  },
  computed: {
    price: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
