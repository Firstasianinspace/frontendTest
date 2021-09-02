<template>
  <div class="form-field">
    <label v-if="label" class="form-label">
      {{ label }}
      <span
        v-if="asterisk === true"
        class="form-label__required"
      />
    </label>
    <textarea
      v-model="description"
      :id="uniq"
      :name="uniq"
      type="textarea"
      :placeholder="placeholder"
      class="form-input"
      autocomplete="off"
      rows="6"
    />
    <div v-if="v.$error" class="form-field__errors">
      <div v-if="!v.required">
        Поле является обязательным
      </div>
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
    description: {
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
