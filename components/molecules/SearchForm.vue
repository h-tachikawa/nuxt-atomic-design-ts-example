<template>
  <div>
    <v-layout
      row
      justify-center
      align-center
    >
      <v-flex xs7>
        <v-text-field
          v-model="input"
          :append-icon="input ? 'close' : undefined"
          label="検索ワードを入力"
          @click:append="$emit('reset')"
        />
      </v-flex>
      <v-btn
        @click="search"
        color="primary"
      >
        検索する
      </v-btn>
    </v-layout>
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
</style>
