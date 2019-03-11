export const ILLUST_MODULE = 'illust'
export const ILLUST_SEARCH = 'search'
export const REPLACE_ILLUST_LIST = 'replaceIllustList'
export const REFLESH_ILLUST_LIST = 'refreshIllustList'

// UIからアクセス不可にする
export const state = () => ({
  illustList: []
})

/**
 * stateの中の一部データのみを取り出すなどのフィルターの役割を持たせる(例: 男女混合データの中から男のみ取り出す)
 * また、例えばAPI側がレガシーになっておりUIから使いにくい形になってしまっている場合などは、
 * ここでUI側から使いやすいモデルに変換したものを返すという手もある。(「ドメイン駆動 Vuex」でググると参考になるかも)
 */
export const getters = {
  filterdIllustList: (state) => {
    // APIから5000件データが返ってくるが開発しにくいので10件に絞って返す
    return state.illustList.slice(0, 10)
  }
}

// 同期的変更のみを行うこと
export const mutations = {
  [REPLACE_ILLUST_LIST] (state, photos) {
    state.illustList = photos
  },
  [REFLESH_ILLUST_LIST] (state) {
    state.illustList = []
  }
}

// UIからのリクエストを受け付け、APIにリクエストを送信する/APIからのレスポンスをmutationに受け渡す
export const actions = {
  [ILLUST_SEARCH] (ctx, searchWord) {
    this.$axios.$get('https://jsonplaceholder.typicode.com/photos').then((photos) => {
      ctx.commit(REPLACE_ILLUST_LIST, photos)
    })
  },
  [REFLESH_ILLUST_LIST] (ctx) {
    ctx.commit(REFLESH_ILLUST_LIST)
  }
}
