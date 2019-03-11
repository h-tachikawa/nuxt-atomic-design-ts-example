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

<script>
import SearchForm from '~/components/molecules/form/SearchForm'
import IllustList from '~/components/organisms/search/IllustList'
import { ILLUST_MODULE, ILLUST_SEARCH, REFLESH_ILLUST_LIST } from '~/store/illust'

export default {
  components: {
    SearchForm,
    IllustList
  },
  data() {
    return {
      searchWord: ''
    }
  },
  mounted () {
    this.$store.dispatch(`${ILLUST_MODULE}/${REFLESH_ILLUST_LIST}`)
  },
  computed: {
    illustList () {
      return this.$store.getters['illust/filterdIllustList']
    }
  },
  methods: {
    searchIllust() {
      this.$store.dispatch(`${ILLUST_MODULE}/${ILLUST_SEARCH}`, this.searchWord)
    },
    resetSearchWord() {
      this.searchWord = ''
    }
  }
}
</script>
