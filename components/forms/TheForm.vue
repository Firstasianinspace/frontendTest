<template>
  <div class="form-wrapper">
    <form
      @submit.prevent="submitForm"
    >
      <InputText
        v-model="cardObject.name"
        :asterisk="true"
        uniq="name"
        :label="('Наименование товара')"
        :value="cardObject.name"
        :placeholder="('Введите наименование товара')"
        :v="$v.cardObject.name"
      />
      <InputTextarea
        v-model="cardObject.description"
        :asterisk="false"
        uniq="desc"
        :label="('Описание товара')"
        :value="cardObject.description"
        :placeholder="('Введите описание товара')"
        :v="$v.cardObject.description"
      />
      <InputText
        v-model="cardObject.imageLink"
        :asterisk="true"
        uniq="imageLink"
        :label="('Ссылка на изображение товара')"
        :value="cardObject.imageLink"
        :placeholder="('Введите ссылку')"
        :v="$v.cardObject.imageLink"
      />
      <InputNumber
        v-model="cardObject.price"
        :asterisk="true"
        uniq="price"
        :label="('Цена товара')"
        :value="cardObject.price"
        :placeholder="('Введите цену')"
        :v="$v.cardObject.price"
      />
      <button
        class="button-submit"
        :disabled="$v.cardObject.$invalid"
      >
        Добавить товар
      </button>
    </form>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import InputText from '@/components/forms/InputText.vue'
import InputTextarea from '@/components/forms/InputTextarea'
import InputNumber from '@/components/forms/InputNumber.vue'

export default {
  name: 'TheForm',
  components: {
    InputText,
    InputTextarea,
    InputNumber
  },
  data () {
    return {
      cardObject: {
        id: null,
        name: null,
        description: null,
        imageLink: null,
        price: null
      },
      error: ''
    }
  },
  validations: {
    cardObject: {
      name: { required },
      description: {},
      imageLink: { required },
      price: { required }
    }
  },
  methods: {
    submitForm (event) {
      this.$v.cardObject.$touch()
      if (this.$v.$invalid) {
        return console.log('Form is invalid')
      } else {
        this.cardObject.id = this.$store.state.posts.list.length + 1
        this.$store.dispatch('posts/addPost', this.cardObject)
          .then(() => {
            this.$store.commit('posts/SET_ACTIVE_OPTION', 'По умолчанию')
            event.target.reset()
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
