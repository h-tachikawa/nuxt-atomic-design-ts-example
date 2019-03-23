import { State, Module, createVuexStore, Mutation } from 'vuex-simple';
import { IIllustStore, IllustStore } from '~/store/illust';

export class VStore {
  @Module() public illust: IIllustStore = new IllustStore()

  @State() public globalState = 'initialState';

  @Mutation()
  public setGlobalState(newState: string) {
    this.globalState = newState;
  }
}

const store = new VStore();

// createVuexStoreを返すだけではNuxtでは動かないので、関数で包んで返している
const createStore = () => {
  return createVuexStore(store, {
    modules: {},
    plugins: []
  });
}

export default createStore
