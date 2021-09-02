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
      v-model="name"
      :id="uniq"
      :name="uniq"
      type="text"
      :placeholder="placeholder"
      class="form-input"
      :class="{ 'is-invalid': v.$error }"
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
export default {
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
  computed: {
    name: {
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
