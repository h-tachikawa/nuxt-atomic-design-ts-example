<template>
  <div class="search-form">
    <v-layout
      row
      justify-center
      align-center
    >
      <v-flex xs7>
        <v-text-field
          v-model="input"
          :append-icon="input ? 'close' : undefined"
          :label="label"
          @click:append="$emit('reset')"
        />
      </v-flex>
      <v-btn
        color="primary"
        @click="search"
      >
        {{ btnLabel }}
      </v-btn>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop({
    required: true
  })
  value: string

  @Prop({
    required: true
  })
  label: string

  @Prop({
    default: '検索する'
  })
  btnLabel: string

  get input() {
    return this.value
  }

  set input(inp) {
    this.$emit('input', inp)
  }

  public search() {
    this.$emit('search')
  }
}
</script>
