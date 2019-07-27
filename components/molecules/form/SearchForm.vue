<template>
  <div class="search-form">
    <v-layout
      row
      justify-center
      align-center
    >
      <v-flex xs7>
        <v-text-field
          v-model="searchWord"
          v-validate="'required|max:10'"
          data-vv-name="検索ワード"
          :error-messages="errors.collect('検索ワード')"
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
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'

@Component
export default class SearchForm extends Vue {
  @Prop({
    required: true
  })
  value: string = ''

  @Prop({
    required: true
  })
  label: string = ''

  @Prop({
    default: '検索する'
  })
  btnLabel: string = ''

  @Emit()
  input(searchWord: string) {
    return searchWord
  }

  @Emit()
  public search() {}

  get searchWord() {
    return this.value
  }

  set searchWord(searchWord: string) {
    this.input(searchWord)
  }
}
</script>
