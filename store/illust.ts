import { Getter, State, Mutation, Action } from 'vuex-simple';
import { Illust } from '~/models/illust';
import axios from 'axios'

export interface IllustResponse {
  data: Illust[]
}

export class IllustModule {
  @State() private illustList: Illust[] = [];

  @Mutation()
  public REPLACE_ILLUST_LIST(newIllustList: Illust[]) {
    this.illustList = newIllustList
  }

  @Mutation()
  public REFRESH_ILLUST_LIST() {
    this.illustList = []
  }

  @Getter()
  public get filteredIllustList() {
    // APIから5000件データが返ってくるが開発しにくいので10件に絞って返す
    return this.illustList.slice(0, 10)
  }

  @Action()
  public search() {
    axios.get('https://jsonplaceholder.typicode.com/photos').then((illustResponse: IllustResponse) => {
      console.log('response', illustResponse);
      this.REPLACE_ILLUST_LIST(illustResponse.data)
    })
  }

  @Action()
  public refresh() {
    this.REFRESH_ILLUST_LIST()
  }
}
