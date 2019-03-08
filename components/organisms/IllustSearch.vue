<template>
  <SearchForm
    v-model="searchWord"
    @search="searchIllust"
    @reset="resetSearchWord"
  />
</template>

<script>
import SearchForm from '~/components/molecules/SearchForm';
export default {
  components: {
    SearchForm
  },
  data () {
    return {
      searchWord: ''
    }
  },
  methods: {
    searchIllust() {
      console.log('searchIllust! query:', this.searchWord);
      // TODO: SearchFormの検索ボタンが押されたら発火→Storeのsearch actionをdispatch
    },
    resetSearchWord() {
      this.searchWord = ''
    }
  }
};
</script>

<style scoped>

</style>
