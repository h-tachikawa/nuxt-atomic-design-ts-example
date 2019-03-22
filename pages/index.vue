<template>
  <v-layout
    row
    wrap
    justify-center
    align-center
  >
    <v-flex xs12>
      <SearchForm
        v-model="searchWord"
        @search="searchIllust"
        @reset="resetSearchWord"
        btn-label="検索"
      />
      <v-divider />
      <IllustList
        :illust-list="illustList"
      />
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SearchForm from '~/components/molecules/form/SearchForm'
import IllustList from '~/components/organisms/search/IllustList'
import { Illust, ILLUST_MODULE, ILLUST_SEARCH, REFLESH_ILLUST_LIST } from '~/store/illust'

@Component({
  components: {
    SearchForm,
    IllustList
  }
})
export default class Index extends Vue {
  public searchWord: string = ''

  public mounted (): void {
    this.$store.dispatch(`${ILLUST_MODULE}/${REFLESH_ILLUST_LIST}`)
  }

  public get illustList (): Illust[] {
    return this.$store.getters['illust/filterdIllustList']
  }

  public searchIllust(): void {
    this.$store.dispatch(`${ILLUST_MODULE}/${ILLUST_SEARCH}`, this.searchWord)
  }

  public resetSearchWord(): void {
    this.searchWord = ''
  }
}
</script>
