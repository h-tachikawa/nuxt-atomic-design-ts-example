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
        btn-label="検索"
        label="検索ワードを入力"
        @search="searchIllust"
        @reset="resetSearchWord"
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
import { Illust } from '~/models/illust';
import { useStore } from 'vuex-simple';
import { VStore } from '@/store';

@Component({
  components: {
    SearchForm,
    IllustList
  }
})
export default class Index extends Vue {
  private repository: VStore = useStore(this.$store)
  public searchWord: string = ''

  public async mounted(): void {
    await this.repository.illust.refresh()
  }

  public get illustList(): Illust[] {
    return this.repository.illust.filteredIllustList
  }

  public searchIllust(): void {
    this.repository.illust.search()
  }

  public resetSearchWord(): void {
    this.searchWord = ''
  }
}
</script>
