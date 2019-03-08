<template>
  <v-text-field
    v-model="input"
    :error-messages="errorMessage ? [errorMessage] : []"
    :disabled="disabled"
    :append-icon="input ? 'close' : undefined"
    @click:append="$emit('resetInputUrl')"
    label="AmazonのURLを入力"
    prepend-icon="link"
  />
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    input: {
      get() {
        return this.value
      },
      set(input) {
        this.$emit('input', input)
      }
    },
    isJPAmazonUrl() {
      if (typeof this.input !== 'string') {
        return false
      }
      const regex = RegExp('^https://www.amazon.co.jp')
      return Boolean(this.input.match(regex))
    },
    extractedAsin() {
      if (this.isJPAmazonUrl) {
        const regex = RegExp('https://www.amazon.co.jp/([\\w-%]+/)?(dp|gp/product)/(\\w+/)?(\\w{10})')
        const match = this.input.match(regex)
        return match ? match[4] : null
      }
      return null
    },
    errorMessage () {
      if (!this.input) {
        return
      }

      if (!this.isJPAmazonUrl) {
        return 'Amazon.co.jp(日本)にのみ対応しています。'
      }

      if (this.input.length > 15 && !this.extractedAsin) {
        return 'URLが正しくありません。'
      }
    }
  },
  watch: {
    extractedAsin(extractedAsin) {
      this.$emit('extractedAsin', extractedAsin)
    }
  }
}
</script>

<style scoped>

</style>
