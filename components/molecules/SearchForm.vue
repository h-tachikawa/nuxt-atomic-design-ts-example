<template>
  <div>
    <v-text-field
      v-model="input"
      :append-icon="input ? 'close' : undefined"
      label="検索ワードを入力"
      class="inline"
      @click:append="$emit('reset')"
    />
    <v-btn
      @click="search"
      color="primary"
    >
      search
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
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
    }
  },
  methods: {
    search() {
      this.$emit('search')
    }
  }
};
</script>

<style scoped>
  .inline {
    display: inline-block;
  }
</style>
