import { Getter, State, Mutation, Action } from 'vuex-simple';
import { Illust } from '~/models/illust';
import axios from 'axios'

export interface IllustResponse {
  data: Illust[]
}

export class IllustModule {
  @State() private illustList: Illust[] = [];

  @Mutation()
  public REPLACE_ILLUST_LIST(newIllustList: Illust[]): void {
    this.illustList = newIllustList
  }

  @Mutation()
  public REFRESH_ILLUST_LIST(): void {
    this.illustList = []
  }

  @Getter()
  public get filteredIllustList(): Illust[] {
    // APIから5000件データが返ってくるが開発しにくいので10件に絞って返す
    return this.illustList.slice(0, 10)
  }

  @Action()
  public async search(): Promise<void> {
    const illustResponse: IllustResponse = await axios.get('https://jsonplaceholder.typicode.com/photos')
    console.log('response', illustResponse);
    this.REPLACE_ILLUST_LIST(illustResponse.data)
  }

  @Action()
  public refresh(): void {
    this.REFRESH_ILLUST_LIST()
  }
}
